from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field
from typing import List, Dict, Any, Optional
from datetime import date
import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import NearestNeighbors
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import FunctionTransformer
import os
import json
from fastapi.middleware.cors import CORSMiddleware


# ====================================================
# User Provided Model Code (Integrated as Is)
# ====================================================

# ---------------------------
# Person Class Definition
# ---------------------------
class Person:
    def __init__(self, age, height, weight, gender, activity, meals_calories_perc, weight_loss):
        self.age = age
        self.height = height
        self.weight = weight
        self.gender = gender
        self.activity = activity
        self.meals_calories_perc = meals_calories_perc
        self.weight_loss = weight_loss

    def calculate_bmi(self):
        bmi = round(self.weight / ((self.height / 100) ** 2), 2)
        return bmi

    def display_result(self):
        bmi = self.calculate_bmi()
        bmi_string = f'{bmi} kg/m²'
        if bmi < 18.5:
            category = 'Underweight'
            color = 'Red'
        elif 18.5 <= bmi < 25:
            category = 'Normal'
            color = 'Green'
        elif 25 <= bmi < 30:
            category = 'Overweight'
            color = 'Yellow'
        else:
            category = 'Obesity'
            color = 'Red'
        return bmi_string, category, color

    def calculate_bmr(self):
        if self.gender == 'Male':
            bmr = 10 * self.weight + 6.25 * self.height - 5 * self.age + 5
        else:
            bmr = 10 * self.weight + 6.25 * self.height - 5 * self.age - 161
        return bmr

    def calories_calculator(self):
        activites = ['Little/no exercise', 'Light exercise',
                     'Moderate exercise (3-5 days/wk)', 'Very active (6-7 days/wk)',
                     'Extra active (very active & physical job)']
        weights = [1.2, 1.375, 1.55, 1.725, 1.9]
        weight_factor = weights[activites.index(self.activity)]
        maintain_calories = self.calculate_bmr() * weight_factor
        return maintain_calories

# ---------------------------
# Dataset and Nutritional Limits
# ---------------------------
# Replace the following empty DataFrame with your actual recipe dataset.
# The dataset must contain these columns (among others):
# ['RecipeId','Name','CookTime','PrepTime','TotalTime','RecipeIngredientParts',
#  'Calories','FatContent','SaturatedFatContent','CholesterolContent',
#  'SodiumContent','CarbohydrateContent','FiberContent','SugarContent','ProteinContent','RecipeInstructions']

dataset = pd.read_csv("recipes.csv")

# Nutrient columns: define explicitly to avoid slicing errors.
nutrient_columns = ['Calories', 'FatContent', 'SaturatedFatContent', 
                    'CholesterolContent', 'SodiumContent', 'CarbohydrateContent', 
                    'FiberContent', 'SugarContent', 'ProteinContent']

# Define max limits based on your requirements.
max_Calories = 2000
max_daily_fat = 100
max_daily_Saturatedfat = 13
max_daily_Cholesterol = 300
max_daily_Sodium = 2300
max_daily_Carbohydrate = 325
max_daily_Fiber = 50
max_daily_Sugar = 40
max_daily_Protein = 40
max_list = [max_Calories, max_daily_fat, max_daily_Saturatedfat, max_daily_Cholesterol,
            max_daily_Sodium, max_daily_Carbohydrate, max_daily_Fiber, max_daily_Sugar, max_daily_Protein]

# ---------------------------
# Filter out recipes exceeding limits (if dataset available)
# ---------------------------
if not dataset.empty:
    extracted_data = dataset.copy()
    # Convert nutrient columns to numeric (if not already)
    for column in nutrient_columns:
        extracted_data[column] = pd.to_numeric(extracted_data[column], errors='coerce')
    # Drop rows with NaN in nutrient columns (if conversion failed)
    extracted_data.dropna(subset=nutrient_columns, inplace=True)
    # Now filter based on limits
    for column, maximum in zip(nutrient_columns, max_list):
        extracted_data = extracted_data[extracted_data[column] < maximum]
else:
    extracted_data = pd.DataFrame()  # Placeholder if dataset is empty

# ---------------------------
# Diet Recommendation Functions (as provided)
# ---------------------------
def scaling(dataframe):
    scaler = StandardScaler()
    # Use the explicit nutrient_columns list
    prep_data = scaler.fit_transform(dataframe[nutrient_columns].to_numpy())
    return prep_data, scaler

def nn_predictor(prep_data):
    neigh = NearestNeighbors(metric='cosine', algorithm='brute')
    neigh.fit(prep_data)
    return neigh

def build_pipeline(neigh, scaler, params):
    transformer = FunctionTransformer(neigh.kneighbors, kw_args=params)
    pipeline = Pipeline([('std_scaler', scaler), ('NN', transformer)])
    return pipeline

def extract_data(dataframe, ingredient_filter, max_nutritional_values, allergic_filter=None):
    extracted = dataframe.copy()
    for column, maximum in zip(nutrient_columns, max_nutritional_values):
        extracted = extracted[extracted[column] < maximum]
    if ingredient_filter is not None:
        for ingredient in ingredient_filter:
            extracted = extracted[
                extracted['RecipeIngredientParts'].str.contains(ingredient, regex=False)
            ]
    if allergic_filter is not None:
        for allergen in allergic_filter:
            extracted = extracted[
                ~extracted['RecipeIngredientParts'].str.contains(allergen, regex=False)
            ]
    return extracted

def apply_pipeline(pipeline, _input, extracted_data):
    return extracted_data.iloc[pipeline.transform(_input)[0]]

def adjust_input_based_on_user_data(_input, user_data, adjustment_factor=0.1):
    # Adjust the input vector based on the provided deficits or surpluses.
    nutrient_names = nutrient_columns
    adjusted_input = _input.copy()
    for i, nutrient in enumerate(nutrient_names):
        if nutrient in user_data:
            adjusted_input[0, i] = adjusted_input[0, i] + adjustment_factor * user_data[nutrient]
    return adjusted_input

def recommend(dataframe, _input, max_nutritional_values, ingredient_filter=None,
              allergic_filter=None, user_data=None,
              params={'return_distance': False, 'n_neighbors': 10}, adjustment_factor=0.1):
    if user_data is not None:
        _input = adjust_input_based_on_user_data(_input, user_data, adjustment_factor)
    
    ext_data = extract_data(dataframe, ingredient_filter, max_nutritional_values, allergic_filter)
    
    # Check if the filtered dataset is empty
    if ext_data.empty:
        # Return empty DataFrame with the same columns as the original dataset
        return pd.DataFrame(columns=dataframe.columns)
    
    prep_data, scaler = scaling(ext_data)
    neigh = nn_predictor(prep_data)
    pipeline = build_pipeline(neigh, scaler, params)
    return apply_pipeline(pipeline, _input, extracted_data=ext_data)

# ---------------------------
# Prepare Manual Input DataFrame for Recommendations Integration
# ---------------------------
manual_values = [0, 30, 12, 250, 1500, 300, 30, 20, 100]  # Calories will be updated dynamically
manual_input_df = pd.DataFrame([manual_values], columns=nutrient_columns)

# Default filters and parameters for recommendations.
ingredient_filter_default = ['egg', 'milk']
allergic_filter_default = ['flour']
default_params = {'return_distance': False, 'n_neighbors': 5}
default_user_nutrient_deficit = {"ProteinContent": 30}

# ====================================================
# FastAPI Application and Endpoints
# ====================================================
app = FastAPI(
    title="Diet Recommendation System API",
    description="API endpoints for diet recommendations, custom diet planning, and diet log tracking.",
    version="1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------------------
# Pydantic Models for Input/Output
# ---------------------------
# Feature 1: Diet Recommendation Input
class DietRecommendationInput(BaseModel):
    age: int = Field(..., example=25)
    height: int = Field(..., example=175)         # in cm
    weight: float = Field(..., example=70)          # in kg
    gender: str = Field(..., example="Male")
    activity: str = Field(..., example="Moderate exercise (3-5 days/wk)")
    weight_loss_plan: str = Field(..., example="Weight loss", description="Options: Maintain weight, Mild weight loss, Weight loss, Extreme weight loss")
    meals_per_day: int = Field(..., example=3, ge=3, le=5)
    ingredient_filter: Optional[List[str]] = Field(
        None,
        example=["tomato", "potato"],
        description="List of ingredients to filter. Can be null."
    )
    allergic_filter: Optional[List[str]] = Field(
        None,
        example=["peanut", "dairy"],
        description="List of ingredients that the user is allergic to. Can be null."
    )
    
class PersonHealthResponse(BaseModel):
    bmi: float
    bmi_string: str
    bmi_category: str
    color: str
    bmr: float
    maintenance_calories: float
    target_calories: float
    meal_recommendations: Optional[Dict[str, List[Dict[str, Any]]]] = None

# Feature 2: Custom Diet Recommendation Input
class CustomDietInput(BaseModel):
    Calories: float = Field(..., example=2000)
    FatContent: float = Field(..., example=80)
    SaturatedFatContent: float = Field(..., example=10)
    CholesterolContent: float = Field(..., example=250)
    SodiumContent: float = Field(..., example=2000)
    CarbohydrateContent: float = Field(..., example=300)
    FiberContent: float = Field(..., example=40)
    SugarContent: float = Field(..., example=35)
    ProteinContent: float = Field(..., example=35)
    ingredient_filter: Optional[List[str]] = Field(default_factory=list)
    allergic_filter: Optional[List[str]] = Field(default_factory=list)

class MealRecommendationsResponse(BaseModel):
    meal: str
    recommendations: List[Dict[str, Any]]

# Feature 3: Diet Log Entry
class DietLogEntry(BaseModel):
    user_id: str = Field(..., example="user123")
    meal_name: str = Field(..., example="Lunch")
    food_name: str = Field(..., example="Lunch")
    quantity: float = Field(..., example=1.0, description="Quantity of the meal")
    serving_unit: str = Field(..., example="plate")
    nutritional_values: Dict[str, float] = Field(..., example={"Calories": 600, "ProteinContent": 35})
    entry_date: date = Field(default_factory=date.today)

class DietLogResponse(BaseModel):
    message: str

# In-memory storage for diet log entries
diet_log_db: List[Dict[str, Any]] = []

# ---------------------------
# Helper function: Calculate meals calories percentages
# ---------------------------
def get_meals_calories_perc(number_of_meals: int) -> Dict[str, float]:
    if number_of_meals == 3:
        return {'breakfast': 0.35, 'lunch': 0.40, 'dinner': 0.25}
    elif number_of_meals == 4:
        return {'breakfast': 0.30, 'morning snack': 0.05, 'lunch': 0.40, 'dinner': 0.25}
    else:
        return {'breakfast': 0.30, 'morning snack': 0.05, 'lunch': 0.40, 'afternoon snack': 0.05, 'dinner': 0.20}

# Mapping for weight_loss_plan to factor:
weight_loss_mapping = {
    "Maintain weight": 1.0,
    "Mild weight loss": 0.9,
    "Weight loss": 0.8,
    "Extreme weight loss": 0.6
}

# ====================================================
# Endpoint 1: Feature 1 - Diet Recommendation Based on Health Parameters
# ====================================================
# @app.post("/diet_recommendation", response_model=PersonHealthResponse, summary="Diet Recommendation Based on Health Parameters")
# def diet_recommendation(input_data: DietRecommendationInput):
#     meals_perc = get_meals_calories_perc(input_data.meals_per_day)
#     # Get weight loss factor from plan mapping
#     weight_loss_factor = weight_loss_mapping.get(input_data.weight_loss_plan, 1.0)
#     person = Person(input_data.age, input_data.height, input_data.weight,
#                     input_data.gender, input_data.activity, meals_perc, weight_loss_factor)
#     bmi = person.calculate_bmi()
#     bmi_string, bmi_category, color = person.display_result()
#     bmr = person.calculate_bmr()
#     maintenance_cal = person.calories_calculator()
#     target_cal = maintenance_cal * weight_loss_factor
#     allergic_filter = input_data.allergic_filter
#     ingredient_filter = input_data.ingredient_filter

#     user_nutrient_deficit = get_remaining_nutrition("1");
#     user_nutrient_deficit = user_nutrient_deficit['remaining_nutrition']
#     print("user_nutrient_deficit",user_nutrient_deficit)
#     print("allergic_filter",allergic_filter)
#     print("ingredient_filter",ingredient_filter)
#     print("ingredient_filter_default",ingredient_filter_default)
#     print("allergic_filter_default",allergic_filter_default)
#     # Generate meal recommendations if dataset is available.
#     meal_recs = {}
#     for meal, perc in meals_perc.items():
#         meal_calories = target_cal * perc
#         test_input = manual_input_df.copy()
#         test_input.iloc[0, 0] = meal_calories   # Update the Calories value
#         test_input_array = test_input.to_numpy()
        
#         try:
#             recs = recommend(
#                 dataset,
#                 test_input_array,
#                 max_list,
#                 ingredient_filter=ingredient_filter,
#                 allergic_filter=allergic_filter,
#                 user_data=user_nutrient_deficit,
#                 params=default_params,
#                 adjustment_factor=0.1
#             )
            
#             # Convert recommendations to list of dictionaries if necessary
#             if isinstance(recs, pd.DataFrame):
#                 recs_list = recs.to_dict(orient="records")
#             else:
#                 recs_list = recs
                
#             # Handle empty recommendations
#             if not recs_list:
#                 recs_list = []
                
#             meal_recs[meal] = recs_list
#         except Exception as e:
#             # Log the error and return empty recommendations for this meal
#             print(f"Error generating recommendations for {meal}: {str(e)}")
#             meal_recs[meal] = []
    
#     return PersonHealthResponse(
#         bmi=bmi,
#         bmi_string=bmi_string,
#         bmi_category=bmi_category,
#         color=color,
#         bmr=bmr,
#         maintenance_calories=maintenance_cal,
#         target_calories=round(target_cal),
#         meal_recommendations=meal_recs
#     )

@app.post("/diet_recommendation", response_model=PersonHealthResponse, summary="Diet Recommendation Based on Health Parameters")
def diet_recommendation(input_data: DietRecommendationInput):
    meals_perc = get_meals_calories_perc(input_data.meals_per_day)
    # Get weight loss factor from plan mapping
    weight_loss_factor = weight_loss_mapping.get(input_data.weight_loss_plan, 1.0)
    person = Person(input_data.age, input_data.height, input_data.weight,
                    input_data.gender, input_data.activity, meals_perc, weight_loss_factor)
    bmi = person.calculate_bmi()
    bmi_string, bmi_category, color = person.display_result()
    bmr = person.calculate_bmr()
    maintenance_cal = person.calories_calculator()
    target_cal = maintenance_cal * weight_loss_factor
    allergic_filter = input_data.allergic_filter
    ingredient_filter = input_data.ingredient_filter

    # Get user's remaining nutritional needs
    try:
        user_nutrient_deficit = get_remaining_nutrition("1")
        user_nutrient_deficit = user_nutrient_deficit.get('remaining_nutrition', {})
    except Exception as e:
        print(f"Error retrieving user nutrition data: {str(e)}")
        user_nutrient_deficit = {}

    # Generate meal recommendations if dataset is available.
    meal_recs = {}
    # Keep track of already recommended recipes to avoid duplicates
    recommended_recipes = set()
    
    # Define meal-specific nutritional emphasis
    meal_nutrition_emphasis = {
        'breakfast': {'ProteinContent': 0.8, 'FiberContent': 1.2, 'SugarContent': 0.7},
        'morning snack': {'ProteinContent': 1.0, 'FiberContent': 1.0, 'SugarContent': 0.8},
        'lunch': {'ProteinContent': 1.5, 'FiberContent': 1.2, 'CarbohydrateContent': 1.3},
        'afternoon snack': {'ProteinContent': 1.2, 'FiberContent': 1.0, 'SodiumContent': 0.7},
        'dinner': {'ProteinContent': 1.3, 'FatContent': 0.8, 'CholesterolContent': 0.7}
    }

    for meal, perc in meals_perc.items():
        meal_calories = target_cal * perc
        test_input = manual_input_df.copy()
        test_input.iloc[0, 0] = meal_calories  # Update the Calories value
        
        # Apply meal-specific nutritional emphasis
        meal_emphasis = meal_nutrition_emphasis.get(meal, {})
        user_nutrition_for_meal = user_nutrient_deficit.copy()
        
        # Modify user nutrition data with meal-specific emphasis
        for nutrient, factor in meal_emphasis.items():
            if nutrient in user_nutrition_for_meal:
                user_nutrition_for_meal[nutrient] = user_nutrition_for_meal[nutrient] * factor
        
        test_input_array = test_input.to_numpy()
        
        try:
            # Get more recommendations than needed to filter out duplicates
            params = {'return_distance': False, 'n_neighbors': 15}
            recs = recommend(
                dataset,
                test_input_array,
                max_list,
                ingredient_filter=ingredient_filter,
                allergic_filter=allergic_filter,
                user_data=user_nutrition_for_meal,
                params=params,
                adjustment_factor=0.15  # Increased adjustment factor for more variation
            )
            
            # Convert recommendations to list of dictionaries if necessary
            if isinstance(recs, pd.DataFrame):
                # Filter out recipes that were already recommended for other meals
                new_recs = []
                for _, row in recs.iterrows():
                    recipe_id = row.get('RecipeId')
                    if recipe_id not in recommended_recipes:
                        new_recs.append(row.to_dict())
                        recommended_recipes.add(recipe_id)
                        # Limit to 5 recommendations per meal
                        if len(new_recs) >= 5:
                            break
                recs_list = new_recs
            else:
                recs_list = []
                
            # Handle empty recommendations
            if not recs_list:
                recs_list = []
                
            meal_recs[meal] = recs_list
        except Exception as e:
            # Log the error and return empty recommendations for this meal
            print(f"Error generating recommendations for {meal}: {str(e)}")
            meal_recs[meal] = []
    
    return PersonHealthResponse(
        bmi=bmi,
        bmi_string=bmi_string,
        bmi_category=bmi_category,
        color=color,
        bmr=bmr,
        maintenance_calories=maintenance_cal,
        target_calories=round(target_cal),
        meal_recommendations=meal_recs
    )
    
# ====================================================
# Endpoint 2: Feature 2 - Custom Diet Recommendation Using Nutritional Targets and Filters
# ====================================================
@app.post("/custom_diet_recommendation", response_model=List[MealRecommendationsResponse], summary="Custom Diet Recommendation")
def custom_diet_recommendation(custom_input: CustomDietInput):
    # Create a DataFrame from the nutritional target values.
    base_values = [custom_input.Calories, custom_input.FatContent, custom_input.SaturatedFatContent,
                   custom_input.CholesterolContent, custom_input.SodiumContent, custom_input.CarbohydrateContent,
                   custom_input.FiberContent, custom_input.SugarContent, custom_input.ProteinContent]
    base_manual_df = pd.DataFrame([base_values], columns=nutrient_columns)
    # For demonstration, simulate recommendations for a 3-meal plan.
    meals_perc = get_meals_calories_perc(3)
    recommendations_response = []
    for meal, perc in meals_perc.items():
        meal_values = base_manual_df.copy()
        meal_values.iloc[0, 0] = custom_input.Calories * perc  # Adjust calories per meal
        input_array = meal_values.to_numpy()
        recs = recommend(
            dataset,
            input_array,
            max_list,
            ingredient_filter=custom_input.ingredient_filter if custom_input.ingredient_filter else None,
            allergic_filter=custom_input.allergic_filter if custom_input.allergic_filter else None,
            params=default_params,
            adjustment_factor=0.1
        )
        if isinstance(recs, pd.DataFrame):
            recs_list = recs.to_dict(orient="records")
        else:
            recs_list = recs
        recommendations_response.append(MealRecommendationsResponse(meal=meal, recommendations=recs_list))
    return recommendations_response

# ====================================================
# Endpoint 3: Feature 3 - Save Diet Log
# ====================================================
GOAL_DATA_FILE = "goals.txt"

USER_DATA_FILE = "user_data.txt"

def get_remaining_nutrition(user_id: str) -> Dict[str, Any]:
    # Load user diet logs
    if not os.path.exists(USER_DATA_FILE):
        raise FileNotFoundError("user_data.txt not found")

    if not os.path.exists(GOAL_DATA_FILE):
        raise FileNotFoundError("goals.txt not found")

    with open(USER_DATA_FILE, "r") as f:
        user_data = json.load(f)

    with open(GOAL_DATA_FILE, "r") as f:
        goals_data = json.load(f)

    # Filter goal for the user
    goal_entry = next((entry for entry in goals_data if entry.get("user_id") == user_id and entry.get("type") == "goal"), None)
    if not goal_entry:
        raise ValueError("Goal entry not found for user")

    # Initialize total intake
    total_intake: Dict[str, float] = {}

    # Sum nutritional values for this user
    for entry in user_data:
        if entry.get("user_id") == user_id and entry.get("type") == "diet_log":
            nutrition = entry.get("nutritional_values", {})
            for key, value in nutrition.items():
                total_intake[key] = total_intake.get(key, 0.0) + float(value)

    # Subtract totals from goals
    remaining = {}
    for key, goal_value in goal_entry.items():
        if key in ["user_id", "type"]:
            continue
        consumed = total_intake.get(key, 0.0)
        remaining[key] = round(goal_value - consumed, 2)

    return {
        "user_id": user_id,
        "remaining_nutrition": remaining
    }

print(get_remaining_nutrition("1"))


def load_data() -> List[Dict[str, Any]]:
    if not os.path.exists(GOAL_DATA_FILE):
        return []
    with open(GOAL_DATA_FILE, "r") as f:
        try:
            return json.load(f)
        except json.JSONDecodeError:
            return []

def save_data(data: List[Dict[str, Any]]) -> None:
    with open(GOAL_DATA_FILE, "w") as f:
        json.dump(data, f, indent=4)
        
        
def load_user_data() -> List[Dict[str, Any]]:
    if not os.path.exists(USER_DATA_FILE):
        return []
    with open(USER_DATA_FILE, "r") as f:
        try:
            return json.load(f)
        except json.JSONDecodeError:
            return []

def save_user_data(data: List[Dict[str, Any]]) -> None:
    with open(USER_DATA_FILE, "w") as f:
        json.dump(data, f, indent=4, default=str)


class NutritionalGoals(BaseModel):
    user_id: str
    Calories: Optional[float] = None
    FatContent: Optional[float] = None
    SaturatedFatContent: Optional[float] = None
    CholesterolContent: Optional[float] = None
    SodiumContent: Optional[float] = None
    CarbohydrateContent: Optional[float] = None
    FiberContent: Optional[float] = None
    SugarContent: Optional[float] = None
    ProteinContent: Optional[float] = None

class GoalResponse(BaseModel):
    message: str

@app.post("/diet_log", response_model=DietLogResponse, summary="Save Diet Log Entry")
def save_diet_log(entry: DietLogEntry):
    data = load_user_data()

    entry_dict = entry.dict()
    entry_dict["type"] = "diet_log"  # Tagging for filtering
    data.append(entry_dict)

    save_user_data(data)
    return DietLogResponse(message="Diet log entry saved successfully.")

@app.get("/diet_log/{user_id}", response_model=List[DietLogEntry], summary="Retrieve Diet Log for a User")
def retrieve_diet_log(user_id: str):
    data = load_user_data()

    logs = [
        DietLogEntry(**entry)
        for entry in data
        if entry.get("type") == "diet_log" and entry.get("user_id") == user_id
    ]

    if not logs:
        raise HTTPException(status_code=404, detail="No diet log entries found for the given user_id")

    return logs

@app.post("/goals", response_model=GoalResponse, summary="Save Nutritional Goals")
def save_goals(goals: NutritionalGoals):
    data = load_data()

    # Remove old goals for same user if exist
    data = [entry for entry in data if not (entry.get("type") == "goal" and entry.get("user_id") == goals.user_id)]

    # Add new goals with a type flag
    entry = goals.dict()
    entry["type"] = "goal"
    data.append(entry)
    save_data(data)

    return GoalResponse(message="Nutritional goals saved successfully.")

@app.get("/goals/{user_id}", response_model=NutritionalGoals, summary="Retrieve Nutritional Goals for a User")
def get_goals(user_id: str):
    data = load_data()
    for entry in data:
        if entry.get("type") == "goal" and entry.get("user_id") == user_id:
            return NutritionalGoals(**entry)
    raise HTTPException(status_code=404, detail="Nutritional goals not found for the given user_id")


# ====================================================
# Endpoints Summary:
#
# 1. POST /diet_recommendation
#    Input JSON (DietRecommendationInput):
#      {
#          "age": 25,
#          "height": 175,
#          "weight": 70,
#          "gender": "Male",
#          "activity": "Moderate exercise (3-5 days/wk)",
#          "weight_loss_plan": "Weight loss",
#          "meals_per_day": 3
#      }
#    Sample Response (PersonHealthResponse):
#      {
#          "bmi": 22.86,
#          "bmi_string": "22.86 kg/m²",
#          "bmi_category": "Normal",
#          "color": "Green",
#          "bmr": 1665,
#          "maintenance_calories": 2570,
#          "target_calories": 2056,
#          "meal_recommendations": {
#              "breakfast": [ { recipe details... }, ... ],
#              "lunch": [ { recipe details... }, ... ],
#              "dinner": [ { recipe details... }, ... ]
#          }
#      }
#
# 2. POST /custom_diet_recommendation
#    Input JSON (CustomDietInput):
    #  {
    #      "Calories": 2000,
    #      "FatContent": 80,
    #      "SaturatedFatContent": 10,
    #      "CholesterolContent": 250,
    #      "SodiumContent": 2000,
    #      "CarbohydrateContent": 300,
    #      "FiberContent": 40,
    #      "SugarContent": 35,
    #      "ProteinContent": 35,
    #      "ingredient_filter": ["tomato"],
    #      "allergic_filter": ["peanut"]
    #  }
#    Sample Response: List of objects each with meal name and recipe details.
#
# 3. POST /diet_log
#    Input JSON (DietLogEntry):
    #  {
    #      "user_id": "user123",
    #      "meal_name": "Lunch",
    #      "quantity": 1,
    #      "serving_unit": "plate",
    #      "nutritional_values": {"Calories": 600, "ProteinContent": 35},
    #      "entry_date": "2025-04-15"
    #  }
#    Sample Response (DietLogResponse):
#      { "message": "Diet log entry saved successfully." }
#
# 4. GET /diet_log/{user_id}
#    Retrieves all diet log entries for the given user.
#       [
#     {
#         "user_id": "2",
#         "meal_name": "Lunch",
#         "quantity": 1.0,
#         "serving_unit": "plate",
#         "nutritional_values": {
#             "Calories": 600.0,
#             "ProteinContent": 35.0
#         },
#         "entry_date": "2025-04-15"
#     }
# ]
# ====================================================
# 5. POST /goals
# stores user diet goals. 
# Input JSON
# {
#   "user_id": "1",
#   "Calories": 1000,
#   "FatContent": 40,
#   "SaturatedFatContent": 10,
#   "CholesterolContent": 250,
#   "SodiumContent": 1000,
#   "CarbohydrateContent": 300,
#   "FiberContent": 40,
#   "SugarContent": 35,
#   "ProteinContent": 35
# }
# same data will be provided if GET is used

