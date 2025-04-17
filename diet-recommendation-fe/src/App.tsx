// import React, { useState } from "react";
// import {
//   Search,
//   Home,
//   Dumbbell,
//   PieChart,
//   ListPlus,
//   Calendar,
// } from "lucide-react";

// // Main App Component
// export default function App() {
//   const [activeTab, setActiveTab] = useState("dietRecommendation");

//   // Render the active component based on tab selection
//   const renderActiveComponent = () => {
//     switch (activeTab) {
//       case "dietRecommendation":
//         return <DietRecommendation />;
//       case "customDiet":
//         return <CustomDiet />;
//       case "exerciseRecommendation":
//         return <ExerciseRecommendation />;
//       case "trackDiet":
//         return <TrackDiet />;
//       default:
//         return <DietRecommendation />;
//     }
//   };

//   return (
//     <div className="flex h-screen bg-gray-50">
//       {/* Sidebar */}
//       <div className="w-64 bg-white shadow-lg">
//         <div className="p-4">
//           <h1 className="text-xl font-bold text-indigo-600">NutriTrack</h1>
//         </div>
//         <nav className="mt-6">
//           <SidebarItem
//             icon={<Home size={20} />}
//             label="Diet Recommendation"
//             active={activeTab === "dietRecommendation"}
//             onClick={() => setActiveTab("dietRecommendation")}
//           />
//           <SidebarItem
//             icon={<PieChart size={20} />}
//             label="Custom Diet"
//             active={activeTab === "customDiet"}
//             onClick={() => setActiveTab("customDiet")}
//           />
//           <SidebarItem
//             icon={<Dumbbell size={20} />}
//             label="Exercise Recommendation"
//             active={activeTab === "exerciseRecommendation"}
//             onClick={() => setActiveTab("exerciseRecommendation")}
//           />
//           <SidebarItem
//             icon={<Calendar size={20} />}
//             label="Track Diet"
//             active={activeTab === "trackDiet"}
//             onClick={() => setActiveTab("trackDiet")}
//           />
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 overflow-y-auto p-6">
//         {renderActiveComponent()}
//       </div>
//     </div>
//   );
// }

// // Sidebar Item Component
// function SidebarItem({ icon, label, active, onClick }) {
//   return (
//     <div
//       className={`flex items-center px-4 py-3 cursor-pointer transition-colors ${
//         active
//           ? "bg-indigo-50 text-indigo-600 border-r-4 border-indigo-600"
//           : "text-gray-600 hover:bg-gray-100"
//       }`}
//       onClick={onClick}
//     >
//       <div className="mr-3">{icon}</div>
//       <span className="font-medium">{label}</span>
//     </div>
//   );
// }

// // Diet Recommendation Component (Feature 1)
// function DietRecommendation() {
//   const [formData, setFormData] = useState({
//     height: "",
//     weight: "",
//     age: "",
//     gender: "male",
//     activityLevel: "sedentary",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would connect to your backend API
//     console.log("Form data submitted:", formData);
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-6">Diet Recommendation</h2>
//       <p className="mb-4">
//         Enter your details to get a personalized diet plan.
//       </p>

//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-md rounded-lg p-6 max-w-md"
//       >
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Height (cm)</label>
//           <input
//             type="number"
//             name="height"
//             value={formData.height}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Weight (kg)</label>
//           <input
//             type="number"
//             name="weight"
//             value={formData.weight}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Age</label>
//           <input
//             type="number"
//             name="age"
//             value={formData.age}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Gender</label>
//           <select
//             name="gender"
//             value={formData.gender}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           >
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>
//         </div>

//         <div className="mb-6">
//           <label className="block text-gray-700 mb-2">Activity Level</label>
//           <select
//             name="activityLevel"
//             value={formData.activityLevel}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           >
//             <option value="Little/no exercise">Little/no exercise</option>
//             <option value="Light exercise">Light exercise</option>
//             <option value="Moderate exercise (3-5 days/wk)">Moderate exercise (3-5 days/wk)</option>
//             <option value="Very active (6-7 days/wk)">Very active (6-7 days/wk)"</option>
//             <option value="Extra active (very active & physical job)">
//             Extra active (very active & physical job)
//             </option>
//           </select>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors"
//         >
//           Get Diet Recommendation
//         </button>
//       </form>
//     </div>
//   );
// }

// // Custom Diet Component (Feature 2)
// function CustomDiet() {
//   const [nutritionValues, setNutritionValues] = useState({
//     Calories: "",
//     FatContent: "",
//     SaturatedFatContent: "",
//     CholesterolContent: "",
//     SodiumContent: "",
//     CarbohydrateContent: "",
//     FiberContent: "",
//     SugarContent: "",
//     ProteinContent: "",
//   });

//   const handleChange = (e) => {
//     setNutritionValues({
//       ...nutritionValues,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Format data for backend
//     const formattedData = {
//       user_id: "1", // This would be dynamic in a real app
//       ...Object.fromEntries(
//         Object.entries(nutritionValues).map(([key, value]) => [
//           key,
//           parseFloat(value) || 0,
//         ])
//       ),
//       type: "goal",
//     };

//     console.log("Custom diet data:", formattedData);
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-6">Custom Diet Plan</h2>
//       <p className="mb-4">
//         Enter your desired nutritional values to get a custom diet plan.
//       </p>

//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-md rounded-lg p-6 max-w-md"
//       >
//         {Object.keys(nutritionValues).map((key) => (
//           <div key={key} className="mb-4">
//             <label className="block text-gray-700 mb-2">
//               {key.replace(/([A-Z])/g, " $1").trim()}
//             </label>
//             <input
//               type="number"
//               name={key}
//               value={nutritionValues[key]}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               step="0.1"
//             />
//           </div>
//         ))}

//         <button
//           type="submit"
//           className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors"
//         >
//           Generate Custom Diet
//         </button>
//       </form>
//     </div>
//   );
// }

// // Exercise Recommendation Component (Feature 3)
// function ExerciseRecommendation() {
//   const [formData, setFormData] = useState({
//     age: "",
//     height: "",
//     weight: "",
//     fitnessLevel: "beginner",
//     goal: "weight_loss",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Exercise recommendation data:", formData);
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-6">Exercise Recommendation</h2>
//       <p className="mb-4">
//         Get personalized exercise recommendations based on your profile.
//       </p>

//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-md rounded-lg p-6 max-w-md"
//       >
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Age</label>
//           <input
//             type="number"
//             name="age"
//             value={formData.age}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Height (cm)</label>
//           <input
//             type="number"
//             name="height"
//             value={formData.height}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Weight (kg)</label>
//           <input
//             type="number"
//             name="weight"
//             value={formData.weight}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Fitness Level</label>
//           <select
//             name="fitnessLevel"
//             value={formData.fitnessLevel}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           >
//             <option value="beginner">Beginner</option>
//             <option value="intermediate">Intermediate</option>
//             <option value="advanced">Advanced</option>
//           </select>
//         </div>

//         <div className="mb-6">
//           <label className="block text-gray-700 mb-2">Fitness Goal</label>
//           <select
//             name="goal"
//             value={formData.goal}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           >
//             <option value="weight_loss">Weight Loss</option>
//             <option value="muscle_gain">Muscle Gain</option>
//             <option value="endurance">Endurance</option>
//             <option value="general_fitness">General Fitness</option>
//           </select>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors"
//         >
//           Get Exercise Plan
//         </button>
//       </form>
//     </div>
//   );
// }

// // Track Diet Component (Feature 4)
// function TrackDiet() {
//   const [activeTab, setActiveTab] = useState("logFood");
//   const [foodQuery, setFoodQuery] = useState("");
//   const [foodSuggestions, setFoodSuggestions] = useState([]);
//   const [selectedFood, setSelectedFood] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [logData, setLogData] = useState({
//     meal_name: "Breakfast",
//     quantity: 1,
//     serving_unit: "serving",
//     entry_date: new Date().toISOString().split("T")[0],
//   });

//   const [nutritionalGoal, setNutritionalGoal] = useState({
//     Calories: "",
//     FatContent: "",
//     SaturatedFatContent: "",
//     CholesterolContent: "",
//     SodiumContent: "",
//     CarbohydrateContent: "",
//     FiberContent: "",
//     SugarContent: "",
//     ProteinContent: "",
//   });

//   // Search for food using Nutritionix API
//   const searchFood = async () => {
//     if (!foodQuery.trim()) return;

//     setIsLoading(true);
//     try {
//       // This would be your actual API call to Nutritionix with proper headers
//       // For demonstration, we'll simulate the API response
//       // const response = await fetch(`https://trackapi.nutritionix.com/v2/search/instant?query=${encodeURIComponent(foodQuery)}`);
//       // const data = await response.json();

//       // Simulated API response
//       setTimeout(() => {
//         const simulatedResults = [
//           {
//             food_name: "Blueberry Mango Smoothie",
//             serving_unit: "cup",
//             serving_qty: 1,
//             nf_calories: 250,
//             nf_protein: 5,
//           },
//           {
//             food_name: "Mango Blueberry Yogurt",
//             serving_unit: "container",
//             serving_qty: 1,
//             nf_calories: 150,
//             nf_protein: 12,
//           },
//           {
//             food_name: "Blueberry Mango Juice",
//             serving_unit: "fl oz",
//             serving_qty: 8,
//             nf_calories: 120,
//             nf_protein: 1,
//           },
//         ];

//         setFoodSuggestions(simulatedResults);
//         setIsLoading(false);
//       }, 500);
//     } catch (error) {
//       console.error("Error fetching food data:", error);
//       setIsLoading(false);
//     }
//   };

//   const handleFoodSelect = (food) => {
//     setSelectedFood(food);
//     setLogData({
//       ...logData,
//       quantity: food.serving_qty,
//       serving_unit: food.serving_unit,
//     });
//   };

//   const handleLogSubmit = (e) => {
//     e.preventDefault();
//     if (!selectedFood) return;

//     // Format data for backend
//     const logEntry = {
//       user_id: "2", // This would be dynamic in a real app
//       meal_name: logData.meal_name,
//       quantity: parseFloat(logData.quantity),
//       serving_unit: logData.serving_unit,
//       nutritional_values: {
//         Calories:
//           selectedFood.nf_calories *
//           (parseFloat(logData.quantity) / selectedFood.serving_qty),
//         ProteinContent:
//           selectedFood.nf_protein *
//           (parseFloat(logData.quantity) / selectedFood.serving_qty),
//         // Add other nutritional values as needed
//       },
//       entry_date: logData.entry_date,
//       type: "diet_log",
//     };

//     console.log("Food log entry:", logEntry);
//     // Reset form
//     setSelectedFood(null);
//     setFoodQuery("");
//     setFoodSuggestions([]);
//   };

//   const handleGoalSubmit = (e) => {
//     e.preventDefault();

//     // Format data for backend
//     const goalData = {
//       user_id: "1", // This would be dynamic in a real app
//       ...Object.fromEntries(
//         Object.entries(nutritionalGoal).map(([key, value]) => [
//           key,
//           parseFloat(value) || 0,
//         ])
//       ),
//       type: "goal",
//     };

//     console.log("Nutritional goal data:", goalData);
//   };

//   const handleGoalChange = (e) => {
//     setNutritionalGoal({
//       ...nutritionalGoal,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleLogDataChange = (e) => {
//     setLogData({
//       ...logData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-6">Track Diet</h2>

//       <div className="mb-6">
//         <div className="flex mb-4 border-b">
//           <button
//             className={`py-2 px-4 ${
//               activeTab === "logFood"
//                 ? "text-indigo-600 border-b-2 border-indigo-600"
//                 : "text-gray-600"
//             }`}
//             onClick={() => setActiveTab("logFood")}
//           >
//             Log Food
//           </button>
//           <button
//             className={`py-2 px-4 ${
//               activeTab === "setGoal"
//                 ? "text-indigo-600 border-b-2 border-indigo-600"
//                 : "text-gray-600"
//             }`}
//             onClick={() => setActiveTab("setGoal")}
//           >
//             Set Nutritional Goals
//           </button>
//         </div>

//         {activeTab === "logFood" ? (
//           <div className="bg-white shadow-md rounded-lg p-6">
//             <h3 className="text-lg font-medium mb-4">Log Your Food</h3>

//             <div className="mb-4">
//               <label className="block text-gray-700 mb-2">Search Food</label>
//               <div className="flex">
//                 <input
//                   type="text"
//                   value={foodQuery}
//                   onChange={(e) => setFoodQuery(e.target.value)}
//                   className="flex-1 px-3 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                   placeholder="e.g. Blueberry Mango Smoothie"
//                 />
//                 <button
//                   onClick={searchFood}
//                   className="bg-indigo-600 text-white px-4 py-2 rounded-r hover:bg-indigo-700 transition-colors"
//                   disabled={isLoading}
//                 >
//                   {isLoading ? "Searching..." : "Search"}
//                 </button>
//               </div>
//             </div>

//             {foodSuggestions.length > 0 && (
//               <div className="mb-4">
//                 <label className="block text-gray-700 mb-2">Food Results</label>
//                 <div className="max-h-48 overflow-y-auto border border-gray-300 rounded">
//                   {foodSuggestions.map((food, index) => (
//                     <div
//                       key={index}
//                       className={`p-3 cursor-pointer hover:bg-gray-100 border-b ${
//                         selectedFood === food ? "bg-indigo-50" : ""
//                       }`}
//                       onClick={() => handleFoodSelect(food)}
//                     >
//                       <p className="font-medium">{food.food_name}</p>
//                       <p className="text-sm text-gray-600">
//                         {food.serving_qty} {food.serving_unit} |{" "}
//                         {food.nf_calories} cal
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {selectedFood && (
//               <form onSubmit={handleLogSubmit} className="mt-4">
//                 <div className="mb-4">
//                   <label className="block text-gray-700 mb-2">Meal Type</label>
//                   <select
//                     name="meal_name"
//                     value={logData.meal_name}
//                     onChange={handleLogDataChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                   >
//                     <option value="Breakfast">Breakfast</option>
//                     <option value="Lunch">Lunch</option>
//                     <option value="Dinner">Dinner</option>
//                     <option value="Snack">Snack</option>
//                   </select>
//                 </div>

//                 <div className="mb-4">
//                   <label className="block text-gray-700 mb-2">Quantity</label>
//                   <input
//                     type="number"
//                     name="quantity"
//                     value={logData.quantity}
//                     onChange={handleLogDataChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                     step="0.1"
//                     min="0.1"
//                     required
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <label className="block text-gray-700 mb-2">
//                     Serving Unit
//                   </label>
//                   <input
//                     type="text"
//                     name="serving_unit"
//                     value={logData.serving_unit}
//                     onChange={handleLogDataChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                     required
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <label className="block text-gray-700 mb-2">Date</label>
//                   <input
//                     type="date"
//                     name="entry_date"
//                     value={logData.entry_date}
//                     onChange={handleLogDataChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                     required
//                   />
//                 </div>

//                 <div className="mb-4 p-3 bg-gray-50 rounded border">
//                   <h4 className="font-medium mb-2">Nutritional Summary</h4>
//                   <p>
//                     Calories:{" "}
//                     {(
//                       selectedFood.nf_calories *
//                       (parseFloat(logData.quantity) / selectedFood.serving_qty)
//                     ).toFixed(1)}
//                   </p>
//                   <p>
//                     Protein:{" "}
//                     {(
//                       selectedFood.nf_protein *
//                       (parseFloat(logData.quantity) / selectedFood.serving_qty)
//                     ).toFixed(1)}
//                     g
//                   </p>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors"
//                 >
//                   Log Food
//                 </button>
//               </form>
//             )}
//           </div>
//         ) : (
//           <div className="bg-white shadow-md rounded-lg p-6">
//             <h3 className="text-lg font-medium mb-4">Set Nutritional Goals</h3>

//             <form onSubmit={handleGoalSubmit}>
//               {Object.keys(nutritionalGoal).map((key) => (
//                 <div key={key} className="mb-4">
//                   <label className="block text-gray-700 mb-2">
//                     {key.replace(/([A-Z])/g, " $1").trim()}
//                   </label>
//                   <input
//                     type="number"
//                     name={key}
//                     value={nutritionalGoal[key]}
//                     onChange={handleGoalChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                     step="0.1"
//                   />
//                 </div>
//               ))}

//               <button
//                 type="submit"
//                 className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors"
//               >
//                 Save Goals
//               </button>
//             </form>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



import React, { useState, useEffect } from "react";
import {
  Search,
  Home,
  Dumbbell,
  PieChart,
  ListPlus,
  Calendar,
  AlertCircle,
  Check,
  X,
} from "lucide-react";

// Main App Component
export default function App() {
  const [activeTab, setActiveTab] = useState("dietRecommendation");
  // Render the active component based on tab selection
  const renderActiveComponent = () => {
    switch (activeTab) {
      case "dietRecommendation":
        return <DietRecommendation />;
      case "customDiet":
        return <CustomDiet />;
      case "exerciseRecommendation":
        return <ExerciseRecommendation />;
      case "trackDiet":
        return <TrackDiet />;
      default:
        return <DietRecommendation />;
    }
  };
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-4">
          <h1 className="text-xl font-bold text-indigo-600">NutriTrack</h1>
        </div>
        <nav className="mt-6">
          <SidebarItem
            icon={<Home size={20} />}
            label="Diet Recommendation"
            active={activeTab === "dietRecommendation"}
            onClick={() => setActiveTab("dietRecommendation")}
          />
          <SidebarItem
            icon={<PieChart size={20} />}
            label="Custom Diet"
            active={activeTab === "customDiet"}
            onClick={() => setActiveTab("customDiet")}
          />
          
          <SidebarItem
            icon={<Calendar size={20} />}
            label="Track Diet"
            active={activeTab === "trackDiet"}
            onClick={() => setActiveTab("trackDiet")}
          />
        </nav>
      </div>
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {renderActiveComponent()}
      </div>
    </div>
  );
}

// Toast Notification Component
function Toast({ message, type, onClose }) {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className={`p-4 rounded-lg shadow-lg flex items-center ${
        type === 'success' ? 'bg-green-100 border-l-4 border-green-500' : 
        type === 'error' ? 'bg-red-100 border-l-4 border-red-500' : 
        'bg-blue-100 border-l-4 border-blue-500'
      }`}>
        <div className="mr-3">
          {type === 'success' ? (
            <Check className="text-green-500" size={20} />
          ) : type === 'error' ? (
            <X className="text-red-500" size={20} />
          ) : (
            <AlertCircle className="text-blue-500" size={20} />
          )}
        </div>
        <div className="text-sm font-medium text-gray-800">{message}</div>
        <button onClick={onClose} className="ml-4 text-gray-500 hover:text-gray-700">
          <X size={16} />
        </button>
      </div>
    </div>
  )
}

// Loading Spinner Component
function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
    </div>
  );
}

// Sidebar Item Component
function SidebarItem({ icon, label, active, onClick }) {
  return (
    <div
      className={`flex items-center px-4 py-3 cursor-pointer transition-colors ${
        active
          ? "bg-indigo-50 text-indigo-600 border-r-4 border-indigo-600"
          : "text-gray-600 hover:bg-gray-100"
      }`}
      onClick={onClick}
    >
      <div className="mr-3">{icon}</div>
      <span className="font-medium">{label}</span>
    </div>
  );
}

// Diet Recommendation Component (Feature 1)


function DietRecommendation() {
  const [formData, setFormData] = useState({
    age: "",
    height: "",
    weight: "",
    gender: "Male",
    activity: "Moderate exercise (3-5 days/wk)",
    weight_loss_plan: "Weight loss",
    meals_per_day: 3,
    ingredient: "", // changed to string since input is a text field
    alergic: ""     // changed to string since input is a text field
  });
  const [loading, setLoading] = useState(false);
  const [recommendationData, setRecommendationData] = useState(null);
  const [toast, setToast] = useState(null);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Convert comma-separated string values into arrays (removing extra spaces and empty items)
    const ingredientArray = formData.ingredient
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
    const allergicArray = formData.alergic
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
    
    try {
      const response = await fetch("http://localhost:8000/diet_recommendation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          age: parseInt(formData.age),
          height: parseInt(formData.height),
          weight: parseInt(formData.weight),
          meals_per_day: parseInt(formData.meals_per_day),
          ingredient_filter: ingredientArray,
          allergic_filter: allergicArray
        }),
      });
      
      if (!response.ok) {
        throw new Error("Failed to get diet recommendation");
      }
      
      const data = await response.json();
      setRecommendationData(data);
      setToast({
        message: "Diet recommendation generated successfully!",
        type: "success"
      });
    } catch (error) {
      console.error("Error fetching diet recommendation:", error);
      setToast({
        message: "Failed to generate diet recommendation. Please try again.",
        type: "error"
      });
    } finally {
      setLoading(false);
    }
  };
  
  const getBmiColorClass = (category) => {
    switch (category) {
      case "Underweight":
        return "text-red-600";
      case "Normal":
        return "text-green-600";
      case "Overweight":
        return "text-yellow-600";
      case "Obese":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  // Format ingredients from the string format provided
  const formatIngredients = (ingredientsString) => {
    if (!ingredientsString) return "No ingredients available";
    
    // Clean up the string: remove c(, ), and quotes
    return ingredientsString
      .replace(/^c\(/, "")
      .replace(/\)$/, "")
      .replace(/"/g, "")
      .split(",")
      .map(ing => ing.trim())
      .join(", ");
  };

  // Format cooking time from ISO duration
  const formatCookingTime = (timeString) => {
    if (!timeString) return "N/A";
    
    // Simple parsing for PT format (ISO 8601 duration)
    let hours = timeString.match(/(\d+)H/);
    let minutes = timeString.match(/(\d+)M/);
    
    let result = "";
    if (hours) result += `${hours[1]} hr `;
    if (minutes) result += `${minutes[1]} min`;
    
    return result.trim() || "N/A";
  };
  
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Diet Recommendation</h2>
      <p className="mb-4">
        Enter your details to get a personalized diet plan.
      </p>
      
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 max-w-md mb-6"
      >
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Height (cm)</label>
          <input
            type="number"
            name="height"
            value={formData.height}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Weight (kg)</label>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Activity Level</label>
          <select
            name="activity"
            value={formData.activity}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="Little/no exercise">Little/no exercise</option>
            <option value="Light exercise">Light exercise</option>
            <option value="Moderate exercise (3-5 days/wk)">Moderate exercise (3-5 days/wk)</option>
            <option value="Very active (6-7 days/wk)">Very active (6-7 days/wk)</option>
            <option value="Extra active (very active & physical job)">
              Extra active (very active & physical job)
            </option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Weight Goal</label>
          <select
            name="weight_loss_plan"
            value={formData.weight_loss_plan}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="Weight loss">Weight loss</option>
            <option value="Weight maintenance">Weight maintenance</option>
            <option value="Weight gain">Weight gain</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Meals per Day</label>
          <select
            name="meals_per_day"
            value={formData.meals_per_day}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="3">3 (Breakfast, Lunch, Dinner)</option>
            <option value="4">4 (With Snack)</option>
            <option value="5">5 (With Multiple Snacks)</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Ingredients Filter</label>
          <input
            type="text"
            name="ingredient"
            value={formData.ingredient}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Allergic Filter</label>
          <input
            type="text"
            name="alergic"
            value={formData.alergic}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors flex justify-center items-center"
          disabled={loading}
        >
          {loading ? "Generating..." : "Get Diet Recommendation"}
        </button>
      </form>
      {loading && <LoadingSpinner />}
      
      {recommendationData && (
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h3 className="text-xl font-bold mb-4">Your Health Profile</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-medium text-gray-700">BMI</h4>
              <p className={`text-2xl font-bold ${getBmiColorClass(recommendationData.bmi_category)}`}>
                {recommendationData.bmi_string}
              </p>
              <p className={`text-sm ${getBmiColorClass(recommendationData.bmi_category)}`}>
                {recommendationData.bmi_category}
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-medium text-gray-700">Calories</h4>
              <p className="text-2xl font-bold text-indigo-600">
                {recommendationData.target_calories} kcal
              </p>
              <p className="text-sm text-gray-600">
                Daily target ({recommendationData.maintenance_calories} kcal maintenance)
              </p>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-4">Meal Recommendations</h3>
          
          {recommendationData.meal_recommendations &&
            Object.keys(recommendationData.meal_recommendations).map((mealType) => (
              <div key={mealType} className="mb-6">
                <h4 className="text-lg font-medium mb-3 capitalize">{mealType}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {recommendationData.meal_recommendations[mealType].map((meal, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="p-4">
                        <h5 className="font-medium text-indigo-600 mb-2">
                          {meal.Name.replace(/&amp;/g, '&')}
                        </h5>
                        
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                            {meal.Calories} kcal
                          </span>
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                            {meal.ProteinContent}g protein
                          </span>
                          <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                            {meal.CarbohydrateContent}g carbs
                          </span>
                          <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                            {meal.FatContent}g fat
                          </span>
                        </div>
                        
                        {meal.PrepTime && (
                          <div className="flex items-center text-sm text-gray-600 mb-2">
                            <span className="mr-2">⏰</span>
                            <span>Prep: {formatCookingTime(meal.PrepTime)}</span>
                            {meal.CookTime && (
                              <span className="ml-2">Cook: {formatCookingTime(meal.CookTime)}</span>
                            )}
                          </div>
                        )}
                        
                        <div className="mt-3">
                          <h6 className="text-sm font-medium text-gray-700 mb-1">Ingredients:</h6>
                          <p className="text-xs text-gray-500">
                            {formatIngredients(meal.RecipeIngredientParts)}
                          </p>
                        </div>
                        
                        {meal.RecipeCategory && (
                          <div className="mt-2">
                            <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                              {meal.RecipeCategory}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      )}
      
      {toast && (
        <Toast 
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}


// Custom Diet Component (Feature 2)


function CustomDiet() {
  const [nutritionValues, setNutritionValues] = useState({
    Calories: "",
    FatContent: "",
    SaturatedFatContent: "",
    CholesterolContent: "",
    SodiumContent: "",
    CarbohydrateContent: "",
    FiberContent: "",
    SugarContent: "",
    ProteinContent: "",
  });
  const [ingredientFilter, setIngredientFilter] = useState("");
  const [ingredientsList, setIngredientsList] = useState([]);
  const [allergicFilter, setAllergicFilter] = useState("");
  const [allergicList, setAllergicList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    setNutritionValues({
      ...nutritionValues,
      [e.target.name]: e.target.value,
    });
  };

  const addIngredient = () => {
    if (ingredientFilter.trim() && !ingredientsList.includes(ingredientFilter.trim())) {
      setIngredientsList([...ingredientsList, ingredientFilter.trim()]);
      setIngredientFilter("");
    }
  };

  const removeIngredient = (ingredient) => {
    setIngredientsList(ingredientsList.filter(item => item !== ingredient));
  };

  const addAllergic = () => {
    if (allergicFilter.trim() && !allergicList.includes(allergicFilter.trim())) {
      setAllergicList([...allergicList, allergicFilter.trim()]);
      setAllergicFilter("");
    }
  };

  const removeAllergic = (item) => {
    setAllergicList(allergicList.filter(i => i !== item));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const payload = {
        ...Object.fromEntries(
          Object.entries(nutritionValues).map(([key, value]) => [
            key,
            parseFloat(value) || 0,
          ])
        ),
        ingredient_filter: ingredientsList,
        allergic_filter: allergicList
      };
      
      const response = await fetch("http://localhost:8000/custom_diet_recommendation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      
      if (!response.ok) {
        throw new Error("Failed to get custom diet recommendation");
      }
      
      const data = await response.json();
      setRecommendations(data);
      setToast({
        message: "Custom diet recommendations generated successfully!",
        type: "success"
      });
    } catch (error) {
      console.error("Error fetching custom diet:", error);
      setToast({
        message: "Failed to generate custom diet. Please try again.",
        type: "error"
      });
    } finally {
      setLoading(false);
    }
  };

  // Function to render recipe ingredients
  const renderIngredients = (recipe) => {
    if (!recipe.RecipeIngredientParts) return null;
    
    let ingredients = [];
    if (typeof recipe.RecipeIngredientParts === 'string') {
      // Handle string format like "c(\"ingredient1\", \"ingredient2\")"
      const match = recipe.RecipeIngredientParts.match(/c\((.+)\)/);
      if (match) {
        ingredients = match[1]
          .split(',')
          .map(item => item.trim().replace(/^"|"$/g, '').replace(/\\"/g, '"'));
      }
    } else if (Array.isArray(recipe.RecipeIngredientParts)) {
      ingredients = recipe.RecipeIngredientParts;
    }
    
    return ingredients.filter(item => item && item !== "NA").join(", ");
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6">Custom Diet Plan</h2>
      <p className="mb-4">
        Enter your desired nutritional values to get a custom diet plan.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-6"
        >
          <h3 className="text-lg font-medium mb-4">Nutritional Targets</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.keys(nutritionValues).map((key) => (
              <div key={key} className="mb-4">
                <label className="block text-gray-700 mb-2">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </label>
                <input
                  type="number"
                  name={key}
                  value={nutritionValues[key]}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  step="0.1"
                />
              </div>
            ))}
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Include Ingredients</label>
            <div className="flex">
              <input
                type="text"
                value={ingredientFilter}
                onChange={(e) => setIngredientFilter(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="e.g. tomato"
              />
              <button
                type="button"
                onClick={addIngredient}
                className="bg-indigo-600 text-white px-4 py-2 rounded-r hover:bg-indigo-700 transition-colors"
              >
                Add
              </button>
            </div>
            {ingredientsList.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {ingredientsList.map((ingredient, idx) => (
                  <span
                    key={idx}
                    className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-sm flex items-center"
                  >
                    {ingredient}
                    <button
                      onClick={() => removeIngredient(ingredient)}
                      className="ml-1 text-indigo-600 hover:text-indigo-800"
                    >
                      <X size={14} />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Allergies & Exclusions</label>
            <div className="flex">
              <input
                type="text"
                value={allergicFilter}
                onChange={(e) => setAllergicFilter(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="e.g. peanut"
              />
              <button
                type="button"
                onClick={addAllergic}
                className="bg-indigo-600 text-white px-4 py-2 rounded-r hover:bg-indigo-700 transition-colors"
              >
                Add
              </button>
            </div>
            {allergicList.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {allergicList.map((item, idx) => (
                  <span
                    key={idx}
                    className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm flex items-center"
                  >
                    {item}
                    <button
                      onClick={() => removeAllergic(item)}
                      className="ml-1 text-red-600 hover:text-red-800"
                    >
                      <X size={14} />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>
          
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors flex justify-center items-center"
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate Custom Diet"}
          </button>
        </form>
        
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-medium mb-4">Custom Diet Recommendations</h3>
          
          {loading && <LoadingSpinner />}
          
          {!loading && recommendations.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <p>Your custom diet recommendations will appear here</p>
            </div>
          )}
          
          {!loading && recommendations.length > 0 && (
            <div className="space-y-6 max-h-fit overflow-y-auto">
              {recommendations.map((mealCategory, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="text-xl font-semibold capitalize border-b pb-2 border-gray-200">
                    {mealCategory.meal}
                  </h3>
                  
                  {mealCategory.recommendations.map((recipe, recipeIndex) => (
                    <div 
                      key={`${index}-${recipeIndex}`} 
                      className="bg-gray-50 p-4 rounded border border-gray-200"
                    >
                      <h4 className="font-medium text-indigo-600">{recipe.Name}</h4>
                      
                      {recipe.Description && (
                        <p className="text-sm text-gray-600 mt-1">{recipe.Description}</p>
                      )}
                      
                      <div className="grid grid-cols-2 gap-2 mt-3">
                        <div className="flex justify-between text-gray-700 text-sm">
                          <span>Calories:</span>
                          <span className="font-medium">{recipe.Calories?.toFixed(1) || "N/A"} kcal</span>
                        </div>
                        <div className="flex justify-between text-gray-700 text-sm">
                          <span>Protein:</span>
                          <span className="font-medium">{recipe.ProteinContent?.toFixed(1) || "N/A"}g</span>
                        </div>
                        <div className="flex justify-between text-gray-700 text-sm">
                          <span>Carbs:</span>
                          <span className="font-medium">{recipe.CarbohydrateContent?.toFixed(1) || "N/A"}g</span>
                        </div>
                        <div className="flex justify-between text-gray-700 text-sm">
                          <span>Fat:</span>
                          <span className="font-medium">{recipe.FatContent?.toFixed(1) || "N/A"}g</span>
                        </div>
                      </div>
                      
                      <div className="mt-3 text-xs text-gray-500">
                        <p className="font-medium mb-1">Ingredients:</p>
                        <p>{renderIngredients(recipe)}</p>
                      </div>
                      
                      <div className="mt-3 text-xs flex">
                        {recipe.RecipeCategory && (
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full mr-2">
                            {recipe.RecipeCategory}
                          </span>
                        )}
                        {recipe.TotalTime && (
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
                            {recipe.TotalTime.replace("PT", "").replace("M", " min")}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {toast && (
        <Toast 
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
// Exercise Recommendation Component (Feature 3)
function ExerciseRecommendation() {
  const [formData, setFormData] = useState({
    age: "",
    height: "",
    weight: "",
    fitnessLevel: "beginner",
    goal: "weight_loss",
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Exercise recommendation data:", formData);
    // Exercise API endpoint would be integrated here
  };
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Exercise Recommendation</h2>
      <p className="mb-4">
        Get personalized exercise recommendations based on your profile.
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 max-w-md"
      >
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Height (cm)</label>
          <input
            type="number"
            name="height"
            value={formData.height}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Weight (kg)</label>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Fitness Level</label>
          <select
            name="fitnessLevel"
            value={formData.fitnessLevel}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Fitness Goal</label>
          <select
            name="goal"
            value={formData.goal}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="weight_loss">Weight Loss</option>
            <option value="muscle_gain">Muscle Gain</option>
            <option value="endurance">Endurance</option>
            <option value="general_fitness">General Fitness</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors"
        >
          Get Exercise Plan
        </button>
      </form>
    </div>
  );
}

// // Track Diet Component (Feature 4)
// function TrackDiet() {
//   const [activeTab, setActiveTab] = useState("logFood");
//   const [foodQuery, setFoodQuery] = useState("");
//   const [foodSuggestions, setFoodSuggestions] = useState([]);
//   const [selectedFood, setSelectedFood] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [userId, setUserId] = useState("1"); // In a real app, this would come from authentication
//   const [dietLogs, setDietLogs] = useState([]);
//   const [toast, setToast] = useState(null);
//   const [nutritionalGoal, setNutritionalGoal] = useState({
//     Calories: "",
//     FatContent: "",
//     SaturatedFatContent: "",
//     CholesterolContent: "",
//     SodiumContent: "",
//     CarbohydrateContent: "",
//     FiberContent: "",
//     SugarContent: "",
//     ProteinContent: "",
//   });
//   const [userGoals, setUserGoals] = useState(null);
//   const [logData, setLogData] = useState({
//     meal_name: "Breakfast",
//     quantity: 1,
//     serving_unit: "serving",
//     entry_date: new Date().toISOString().split("T")[0],
//   });

//   // Fetch user's diet logs on component mount
//   // Track Diet Component (Feature 4) continued
//   useEffect(() => {
//     const fetchDietLogs = async () => {
//       try {
//         const response = await fetch(`http://localhost:8000/diet_log/${userId}`);
//         if (response.ok) {
//           const data = await response.json();
//           setDietLogs(data);
//         }
//       } catch (error) {
//         console.error("Error fetching diet logs:", error);
//       }
//     };

//     const fetchUserGoals = async () => {
//       try {
//         const response = await fetch(`http://localhost:8000/goals/${userId}`);
//         if (response.ok) {
//           const data = await response.json();
//           setUserGoals(data);
//           // Pre-fill the form with existing goals
//           setNutritionalGoal(data);
//         }
//       } catch (error) {
//         console.error("Error fetching user goals:", error);
//       }
//     };

//     fetchDietLogs();
//     fetchUserGoals();
//   }, [userId]);

//   // Search for food using simulated API
//   const searchFood = async () => {
//     if (!foodQuery.trim()) return;
//     setIsLoading(true);
//     try {
//       // Simulated API response
//       setTimeout(() => {
//         const simulatedResults = [
//           {
//             food_name: "Blueberry Mango Smoothie",
//             serving_unit: "cup",
//             serving_qty: 1,
//             nf_calories: 250,
//             nf_protein: 5,
//             nf_total_fat: 3,
//             nf_total_carbohydrate: 52,
//           },
//           {
//             food_name: "Mango Blueberry Yogurt",
//             serving_unit: "container",
//             serving_qty: 1,
//             nf_calories: 150,
//             nf_protein: 12,
//             nf_total_fat: 2,
//             nf_total_carbohydrate: 25,
//           },
//           {
//             food_name: "Blueberry Mango Juice",
//             serving_unit: "fl oz",
//             serving_qty: 8,
//             nf_calories: 120,
//             nf_protein: 1,
//             nf_total_fat: 0,
//             nf_total_carbohydrate: 30,
//           },
//         ];
//         setFoodSuggestions(simulatedResults);
//         setIsLoading(false);
//       }, 500);
//     } catch (error) {
//       console.error("Error fetching food data:", error);
//       setIsLoading(false);
//     }
//   };

//   const handleFoodSelect = (food) => {
//     setSelectedFood(food);
//     setLogData({
//       ...logData,
//       quantity: food.serving_qty,
//       serving_unit: food.serving_unit,
//     });
//   };

//   const handleLogSubmit = async (e) => {
//     e.preventDefault();
//     if (!selectedFood) return;
    
//     setIsLoading(true);
    
//     try {
//       // Format data for backend
//       const logEntry = {
//         user_id: userId,
//         meal_name: logData.meal_name,
//         quantity: parseFloat(logData.quantity),
//         serving_unit: logData.serving_unit,
//         nutritional_values: {
//           Calories: selectedFood.nf_calories * (parseFloat(logData.quantity) / selectedFood.serving_qty),
//           ProteinContent: selectedFood.nf_protein * (parseFloat(logData.quantity) / selectedFood.serving_qty),
//           FatContent: selectedFood.nf_total_fat * (parseFloat(logData.quantity) / selectedFood.serving_qty),
//           CarbohydrateContent: selectedFood.nf_total_carbohydrate * (parseFloat(logData.quantity) / selectedFood.serving_qty)
//         },
//         entry_date: logData.entry_date,
//       };
      
//       const response = await fetch("http://localhost:8000/diet_log", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(logEntry),
//       });
      
//       if (!response.ok) {
//         throw new Error("Failed to log food");
//       }
      
//       // Re-fetch logs to update the list
//       const logsResponse = await fetch(`http://localhost:8000/diet_log/${userId}`);
//       if (logsResponse.ok) {
//         const logsData = await logsResponse.json();
//         setDietLogs(logsData);
//       }
      
//       setToast({
//         message: "Food logged successfully!",
//         type: "success"
//       });
      
//       // Reset form
//       setSelectedFood(null);
//       setFoodQuery("");
//       setFoodSuggestions([]);
//     } catch (error) {
//       console.error("Error logging food:", error);
//       setToast({
//         message: "Failed to log food. Please try again.",
//         type: "error"
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleGoalSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
    
//     try {
//       // Format data for backend
//       const goalData = {
//         user_id: userId,
//         ...Object.fromEntries(
//           Object.entries(nutritionalGoal).map(([key, value]) => [
//             key,
//             parseFloat(value) || 0,
//           ])
//         )
//       };
      
//       const response = await fetch("http://localhost:8000/goals", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(goalData),
//       });
      
//       if (!response.ok) {
//         throw new Error("Failed to save goals");
//       }
      
//       setUserGoals(goalData);
//       setToast({
//         message: "Nutritional goals saved successfully!",
//         type: "success"
//       });
//     } catch (error) {
//       console.error("Error saving goals:", error);
//       setToast({
//         message: "Failed to save goals. Please try again.",
//         type: "error"
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleGoalChange = (e) => {
//     setNutritionalGoal({
//       ...nutritionalGoal,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleLogDataChange = (e) => {
//     setLogData({
//       ...logData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Calculate daily totals from logs
//   const calculateDailyTotals = () => {
//     const today = new Date().toISOString().split('T')[0];
//     const todaysLogs = dietLogs.filter(log => log.entry_date === today);
    
//     const totals = {
//       Calories: 0,
//       ProteinContent: 0,
//       FatContent: 0,
//       CarbohydrateContent: 0
//     };
    
//     todaysLogs.forEach(log => {
//       Object.entries(log.nutritional_values).forEach(([key, value]) => {
//         if (totals[key] !== undefined) {
//           totals[key] += value;
//         }
//       });
//     });
    
//     return totals;
//   };

//   const dailyTotals = calculateDailyTotals();
  
//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-6">Track Diet</h2>
      
//       <div className="mb-6">
//         <div className="flex mb-4 border-b">
//           <button
//             className={`py-2 px-4 ${
//               activeTab === "logFood"
//                 ? "text-indigo-600 border-b-2 border-indigo-600"
//                 : "text-gray-600"
//             }`}
//             onClick={() => setActiveTab("logFood")}
//           >
//             Log Food
//           </button>
//           <button
//             className={`py-2 px-4 ${
//               activeTab === "setGoal"
//                 ? "text-indigo-600 border-b-2 border-indigo-600"
//                 : "text-gray-600"
//             }`}
//             onClick={() => setActiveTab("setGoal")}
//           >
//             Set Nutritional Goals
//           </button>
//           <button
//             className={`py-2 px-4 ${
//               activeTab === "viewLogs"
//                 ? "text-indigo-600 border-b-2 border-indigo-600"
//                 : "text-gray-600"
//             }`}
//             onClick={() => setActiveTab("viewLogs")}
//           >
//             View Logs
//           </button>
//         </div>
        
//         {activeTab === "logFood" && (
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             <div className="bg-white shadow-md rounded-lg p-6">
//               <h3 className="text-lg font-medium mb-4">Log Your Food</h3>
//               <div className="mb-4">
//                 <label className="block text-gray-700 mb-2">Search Food</label>
//                 <div className="flex">
//                   <input
//                     type="text"
//                     value={foodQuery}
//                     onChange={(e) => setFoodQuery(e.target.value)}
//                     className="flex-1 px-3 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                     placeholder="e.g. Blueberry Mango Smoothie"
//                   />
//                   <button
//                     onClick={searchFood}
//                     className="bg-indigo-600 text-white px-4 py-2 rounded-r hover:bg-indigo-700 transition-colors"
//                     disabled={isLoading}
//                   >
//                     {isLoading ? "Searching..." : "Search"}
//                   </button>
//                 </div>
//               </div>
              
//               {foodSuggestions.length > 0 && (
//                 <div className="mb-4">
//                   <label className="block text-gray-700 mb-2">Food Results</label>
//                   <div className="max-h-48 overflow-y-auto border border-gray-300 rounded">
//                     {foodSuggestions.map((food, index) => (
//                       <div
//                         key={index}
//                         className={`p-3 cursor-pointer hover:bg-gray-100 border-b ${
//                           selectedFood === food ? "bg-indigo-50" : ""
//                         }`}
//                         onClick={() => handleFoodSelect(food)}
//                       >
//                         <p className="font-medium">{food.food_name}</p>
//                         <p className="text-sm text-gray-600">
//                           {food.serving_qty} {food.serving_unit} | {food.nf_calories} cal
//                         </p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
              
//               {selectedFood && (
//                 <form onSubmit={handleLogSubmit} className="mt-4">
//                   <div className="mb-4">
//                     <label className="block text-gray-700 mb-2">Meal Type</label>
//                     <select
//                       name="meal_name"
//                       value={logData.meal_name}
//                       onChange={handleLogDataChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                     >
//                       <option value="Breakfast">Breakfast</option>
//                       <option value="Lunch">Lunch</option>
//                       <option value="Dinner">Dinner</option>
//                       <option value="Snack">Snack</option>
//                     </select>
//                   </div>
//                   <div className="mb-4">
//                     <label className="block text-gray-700 mb-2">Quantity</label>
//                     <input
//                       type="number"
//                       name="quantity"
//                       value={logData.quantity}
//                       onChange={handleLogDataChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                       step="0.1"
//                       min="0.1"
//                       required
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label className="block text-gray-700 mb-2">Serving Unit</label>
//                     <input
//                       type="text"
//                       name="serving_unit"
//                       value={logData.serving_unit}
//                       onChange={handleLogDataChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                       required
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label className="block text-gray-700 mb-2">Date</label>
//                     <input
//                       type="date"
//                       name="entry_date"
//                       value={logData.entry_date}
//                       onChange={handleLogDataChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                       required
//                     />
//                   </div>
//                   <div className="mb-4 p-3 bg-gray-50 rounded border">
//                     <h4 className="font-medium mb-2">Nutritional Summary</h4>
//                     <p>
//                       Calories:{" "}
//                       {(
//                         selectedFood.nf_calories *
//                         (parseFloat(logData.quantity) / selectedFood.serving_qty)
//                       ).toFixed(1)}
//                     </p>
//                     <p>
//                       Protein:{" "}
//                       {(
//                         selectedFood.nf_protein *
//                         (parseFloat(logData.quantity) / selectedFood.serving_qty)
//                       ).toFixed(1)}
//                       g
//                     </p>
//                     <p>
//                       Fat:{" "}
//                       {(
//                         selectedFood.nf_total_fat *
//                         (parseFloat(logData.quantity) / selectedFood.serving_qty)
//                       ).toFixed(1)}
//                       g
//                     </p>
//                     <p>
//                       Carbs:{" "}
//                       {(
//                         selectedFood.nf_total_carbohydrate *
//                         (parseFloat(logData.quantity) / selectedFood.serving_qty)
//                       ).toFixed(1)}
//                       g
//                     </p>
//                   </div>
//                   <button
//                     type="submit"
//                     className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors"
//                     disabled={isLoading}
//                   >
//                     {isLoading ? "Logging..." : "Log Food"}
//                   </button>
//                 </form>
//               )}
//             </div>
            
//             <div className="bg-white shadow-md rounded-lg p-6">
//               <h3 className="text-lg font-medium mb-4">Today's Summary</h3>
              
//               {userGoals && (
//                 <div className="mb-6">
//                   <h4 className="text-md text-gray-700 mb-2">Daily Goals</h4>
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="bg-gray-50 p-3 rounded">
//                       <p className="text-sm text-gray-600">Calories</p>
//                       <p className="font-bold">{userGoals.Calories} kcal</p>
//                     </div>
//                     <div className="bg-gray-50 p-3 rounded">
//                       <p className="text-sm text-gray-600">Protein</p>
//                       <p className="font-bold">{userGoals.ProteinContent} g</p>
//                     </div>
//                     <div className="bg-gray-50 p-3 rounded">
//                       <p className="text-sm text-gray-600">Carbs</p>
//                       <p className="font-bold">{userGoals.CarbohydrateContent} g</p>
//                     </div>
//                     <div className="bg-gray-50 p-3 rounded">
//                       <p className="text-sm text-gray-600">Fat</p>
//                       <p className="font-bold">{userGoals.FatContent} g</p>
//                     </div>
//                   </div>
//                 </div>
//               )}
              
//               <h4 className="text-md text-gray-700 mb-2">Today's Consumption</h4>
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="bg-indigo-50 p-3 rounded">
//                   <p className="text-sm text-gray-600">Calories</p>
//                   <p className="font-bold">{dailyTotals.Calories.toFixed(0)} kcal</p>
//                   {userGoals && (
//                     <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
//                       <div 
//                         className="bg-indigo-600 h-2 rounded-full" 
//                         style={{ width: `${Math.min(100, (dailyTotals.Calories / userGoals.Calories) * 100)}%` }}
//                       ></div>
//                     </div>
//                   )}
//                 </div>
//                 <div className="bg-indigo-50 p-3 rounded">
//                   <p className="text-sm text-gray-600">Protein</p>
//                   <p className="font-bold">{dailyTotals.ProteinContent.toFixed(1)} g</p>
//                   {userGoals && (
//                     <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
//                       <div 
//                         className="bg-indigo-600 h-2 rounded-full" 
//                         style={{ width: `${Math.min(100, (dailyTotals.ProteinContent / userGoals.ProteinContent) * 100)}%` }}
//                       ></div>
//                     </div>
//                   )}
//                 </div>
//                 <div className="bg-indigo-50 p-3 rounded">
//                   <p className="text-sm text-gray-600">Carbs</p>
//                   <p className="font-bold">{dailyTotals.CarbohydrateContent.toFixed(1)} g</p>
//                   {userGoals && (
//                     <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
//                       <div 
//                         className="bg-indigo-600 h-2 rounded-full" 
//                         style={{ width: `${Math.min(100, (dailyTotals.CarbohydrateContent / userGoals.CarbohydrateContent) * 100)}%` }}
//                       ></div>
//                     </div>
//                   )}
//                 </div>
//                 <div className="bg-indigo-50 p-3 rounded">
//                   <p className="text-sm text-gray-600">Fat</p>
//                   <p className="font-bold">{dailyTotals.FatContent.toFixed(1)} g</p>
//                   {userGoals && (
//                     <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
//                       <div 
//                         className="bg-indigo-600 h-2 rounded-full" 
//                         style={{ width: `${Math.min(100, (dailyTotals.FatContent / userGoals.FatContent) * 100)}%` }}
//                       ></div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
        
//         {activeTab === "setGoal" && (
//           <div className="bg-white shadow-md rounded-lg p-6 max-w-lg">
//             <h3 className="text-lg font-medium mb-4">Set Nutritional Goals</h3>
            
//             <form onSubmit={handleGoalSubmit}>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {Object.keys(nutritionalGoal).map((key) => (
//                   <div key={key} className="mb-4">
//                     <label className="block text-gray-700 mb-2">
//                       {key.replace(/([A-Z])/g, " $1").trim()}
//                     </label>
//                     <input
//                       type="number"
//                       name={key}
//                       value={nutritionalGoal[key]}
//                       onChange={handleGoalChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                       step="0.1"
//                     />
//                   </div>
//                 ))}
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors"
//                 disabled={isLoading}
//               >
//                 {isLoading ? "Saving..." : "Save Goals"}
//               </button>
//             </form>
//           </div>
//         )}
        
//         {activeTab === "viewLogs" && (
//           <div className="bg-white shadow-md rounded-lg p-6">
//             <h3 className="text-lg font-medium mb-4">Your Diet Log History</h3>
            
//             {isLoading && <LoadingSpinner />}
            
//             {!isLoading && dietLogs.length === 0 && (
//               <div className="text-center py-8 text-gray-500">
//                 <p>No diet logs found. Start logging your meals to see them here.</p>
//               </div>
//             )}
            
//             {!isLoading && dietLogs.length > 0 && (
//               <div className="overflow-x-auto">
//                 <table className="w-full table-auto">
//                   <thead>
//                     <tr className="bg-gray-50">
//                       <th className="px-4 py-2 text-left text-gray-600">Date</th>
//                       <th className="px-4 py-2 text-left text-gray-600">Meal</th>
//                       <th className="px-4 py-2 text-left text-gray-600">Quantity</th>
//                       <th className="px-4 py-2 text-left text-gray-600">Calories</th>
//                       <th className="px-4 py-2 text-left text-gray-600">Protein</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {dietLogs.map((log, index) => (
//                       <tr key={index} className="border-t">
//                         <td className="px-4 py-2">{log.entry_date}</td>
//                         <td className="px-4 py-2">{log.meal_name}</td>
//                         <td className="px-4 py-2">{log.quantity} {log.serving_unit}</td>
//                         <td className="px-4 py-2">{log.nutritional_values.Calories?.toFixed(0) || 0} kcal</td>
//                         <td className="px-4 py-2">{log.nutritional_values.ProteinContent?.toFixed(1) || 0} g</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
      
//       {toast && (
//         <Toast 
//           message={toast.message}
//           type={toast.type}
//           onClose={() => setToast(null)}
//         />
//       )}
//     </div>
//   );
// }

// GPT
// function TrackDiet() {
//   const [activeTab, setActiveTab] = useState("logFood");
//   const [foodQuery, setFoodQuery] = useState("");
//   const [foodSuggestions, setFoodSuggestions] = useState([]);
//   const [selectedFood, setSelectedFood] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [userId, setUserId] = useState("1"); // In a real app, this would come from authentication
//   const [dietLogs, setDietLogs] = useState([]);
//   const [toast, setToast] = useState(null);
//   const [nutritionalGoal, setNutritionalGoal] = useState({
//     Calories: "",
//     FatContent: "",
//     SaturatedFatContent: "",
//     CholesterolContent: "",
//     SodiumContent: "",
//     CarbohydrateContent: "",
//     FiberContent: "",
//     SugarContent: "",
//     ProteinContent: "",
//   });
//   const [userGoals, setUserGoals] = useState(null);
//   const [logData, setLogData] = useState({
//     meal_name: "Breakfast",
//     quantity: 1,
//     serving_unit: "serving",
//     entry_date: new Date().toISOString().split("T")[0],
//   });
//   const [selectedServingOption, setSelectedServingOption] = useState(null);
//   const [availableServingOptions, setAvailableServingOptions] = useState([]);

//   // Fetch user's diet logs and goals on component mount
//   useEffect(() => {
//     const fetchDietLogs = async () => {
//       try {
//         const response = await fetch(`http://localhost:8000/diet_log/${userId}`);
//         if (response.ok) {
//           const data = await response.json();
//           setDietLogs(data);
//         }
//       } catch (error) {
//         console.error("Error fetching diet logs:", error);
//       }
//     };
//     const fetchUserGoals = async () => {
//       try {
//         const response = await fetch(`http://localhost:8000/goals/${userId}`);
//         if (response.ok) {
//           const data = await response.json();
//           setUserGoals(data);
//           // Pre-fill the form with existing goals
//           setNutritionalGoal(data);
//         }
//       } catch (error) {
//         console.error("Error fetching user goals:", error);
//       }
//     };
//     fetchDietLogs();
//     fetchUserGoals();
//   }, [userId]);

//   // Search for food using Nutritionix API
//   const searchFood = async () => {
//     if (!foodQuery.trim()) return;
//     setIsLoading(true);
//     try {
//       const response = await fetch(
//         `https://trackapi.nutritionix.com/v2/search/instant?query=${encodeURIComponent(
//           foodQuery
//         )}`,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             "x-app-id": "your_app_id", // Replace with actual credentials in production
//             "x-app-key": "your_app_key",
//           },
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to fetch food suggestions");
//       }

//       const data = await response.json();

//       // Process the API results
//       const processedSuggestions = [];

//       // Process common foods
//       if (data.common && data.common.length > 0) {
//         data.common.forEach((item) => {
//           processedSuggestions.push({
//             food_name: item.food_name,
//             serving_unit: item.serving_unit,
//             serving_qty: item.serving_qty,
//             photo: item.photo,
//             is_common: true,
//             brand_name: null,
//           });
//         });
//       }

//       // Process branded foods
//       if (data.branded && data.branded.length > 0) {
//         data.branded.forEach((item) => {
//           processedSuggestions.push({
//             food_name: item.food_name,
//             serving_unit: item.serving_unit,
//             serving_qty: item.serving_qty,
//             photo: item.photo,
//             is_common: false,
//             brand_name: item.brand_name,
//           });
//         });
//       }

//       setFoodSuggestions(processedSuggestions);
//     } catch (error) {
//       console.error("Error fetching food data:", error);
//       // Fallback to simulated data for development/demo
//       const simulatedResults = [
//         {
//           food_name: "blueberry smoothie",
//           serving_unit: "fl oz",
//           serving_qty: 20,
//           photo: {
//             thumb:
//               "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
//           },
//           is_common: true,
//           brand_name: null,
//         },
//         {
//           food_name: "blueberry mango yogurt",
//           serving_unit: "container",
//           serving_qty: 1,
//           photo: {
//             thumb:
//               "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
//           },
//           is_common: true,
//           brand_name: null,
//         },
//         {
//           food_name: "blueberry mango juice",
//           serving_unit: "fl oz",
//           serving_qty: 8,
//           photo: {
//             thumb:
//               "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
//           },
//           is_common: true,
//           brand_name: null,
//         },
//       ];
//       setFoodSuggestions(simulatedResults);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Get detailed nutritional information when a food is selected
//   const handleFoodSelect = async (food) => {
//     setIsLoading(true);
//     try {
//       const response = await fetch("https://trackapi.nutritionix.com/v2/natural/nutrients", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "x-app-id": "your_app_id", // Replace with actual credentials in production
//           "x-app-key": "your_app_key",
//         },
//         body: JSON.stringify({
//           query: food.food_name,
//           branded: !food.is_common,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to fetch nutritional information");
//       }

//       const data = await response.json();

//       if (data.foods && data.foods.length > 0) {
//         const foodDetails = data.foods[0];

//         // Map API data to our format
//         const mappedFood = {
//           food_name: foodDetails.food_name,
//           brand_name: foodDetails.brand_name,
//           serving_unit: foodDetails.serving_unit,
//           serving_qty: foodDetails.serving_qty,
//           serving_weight_grams: foodDetails.serving_weight_grams,
//           nf_calories: foodDetails.nf_calories,
//           nf_protein: foodDetails.nf_protein,
//           nf_total_fat: foodDetails.nf_total_fat,
//           nf_saturated_fat: foodDetails.nf_saturated_fat,
//           nf_cholesterol: foodDetails.nf_cholesterol,
//           nf_sodium: foodDetails.nf_sodium,
//           nf_total_carbohydrate: foodDetails.nf_total_carbohydrate,
//           nf_dietary_fiber: foodDetails.nf_dietary_fiber,
//           nf_sugars: foodDetails.nf_sugars,
//           photo: foodDetails.photo,
//           alt_measures: foodDetails.alt_measures || [],
//         };

//         setSelectedFood(mappedFood);

//         // Set up available serving options
//         let servingOptions = [];
//         if (mappedFood.alt_measures && mappedFood.alt_measures.length > 0) {
//           servingOptions = mappedFood.alt_measures.map((measure) => ({
//             serving_unit: measure.measure,
//             serving_qty: measure.qty,
//             serving_weight_grams: measure.serving_weight,
//           }));
//         }

//         // Add the default serving option if not already included
//         const defaultOption = {
//           serving_unit: mappedFood.serving_unit,
//           serving_qty: mappedFood.serving_qty,
//           serving_weight_grams: mappedFood.serving_weight_grams,
//         };

//         if (
//           !servingOptions.some(
//             (option) =>
//               option.serving_unit === defaultOption.serving_unit &&
//               option.serving_qty === defaultOption.serving_qty
//           )
//         ) {
//           servingOptions.unshift(defaultOption);
//         }

//         setAvailableServingOptions(servingOptions);
//         setSelectedServingOption(defaultOption);

//         // Update log data
//         setLogData({
//           ...logData,
//           quantity: defaultOption.serving_qty,
//           serving_unit: defaultOption.serving_unit,
//         });
//       }
//     } catch (error) {
//       console.error("Error fetching nutritional details:", error);

//       // Fallback data for development/demo
//       const fallbackDetails = {
//         food_name: food.food_name,
//         brand_name: food.brand_name,
//         serving_unit: food.serving_unit,
//         serving_qty: food.serving_qty,
//         serving_weight_grams: 100,
//         nf_calories: food.food_name.includes("smoothie") ? 250 : 150,
//         nf_protein: food.food_name.includes("smoothie") ? 5 : 12,
//         nf_total_fat: food.food_name.includes("smoothie") ? 3 : 2,
//         nf_saturated_fat: food.food_name.includes("smoothie") ? 1.5 : 1,
//         nf_cholesterol: food.food_name.includes("smoothie") ? 0 : 10,
//         nf_sodium: food.food_name.includes("smoothie") ? 50 : 80,
//         nf_total_carbohydrate: food.food_name.includes("smoothie") ? 52 : 25,
//         nf_dietary_fiber: food.food_name.includes("smoothie") ? 4 : 2,
//         nf_sugars: food.food_name.includes("smoothie") ? 45 : 20,
//         photo: food.photo,
//         alt_measures: [
//           {
//             serving_weight: food.food_name.includes("smoothie") ? 240 : 170,
//             measure: food.serving_unit,
//             seq: 1,
//             qty: food.serving_qty,
//           },
//           {
//             serving_weight: 100,
//             measure: "g",
//             seq: 2,
//             qty: 100,
//           },
//         ],
//       };

//       setSelectedFood(fallbackDetails);

//       // Set up available serving options for fallback
//       const servingOptions = [
//         {
//           serving_unit: fallbackDetails.serving_unit,
//           serving_qty: fallbackDetails.serving_qty,
//           serving_weight_grams: fallbackDetails.serving_weight_grams,
//         },
//         {
//           serving_unit: "g",
//           serving_qty: 100,
//           serving_weight_grams: 100,
//         },
//       ];

//       setAvailableServingOptions(servingOptions);
//       setSelectedServingOption(servingOptions[0]);

//       setLogData({
//         ...logData,
//         quantity: fallbackDetails.serving_qty,
//         serving_unit: fallbackDetails.serving_unit,
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Handle serving option change
//   const handleServingOptionChange = (e) => {
//     const selectedOption = availableServingOptions.find(
//       (option) =>
//         `${option.serving_qty} ${option.serving_unit}` === e.target.value
//     );

//     if (selectedOption) {
//       setSelectedServingOption(selectedOption);
//       setLogData({
//         ...logData,
//         quantity: selectedOption.serving_qty,
//         serving_unit: selectedOption.serving_unit,
//       });
//     }
//   };

//   const handleLogSubmit = async (e) => {
//     e.preventDefault();
//     if (!selectedFood) return;

//     setIsLoading(true);

//     try {
//       // Calculate weight ratio for accurate nutrition scaling
//       const baseWeightGrams = selectedFood.serving_weight_grams;
//       const selectedWeightGrams = selectedServingOption
//         ? selectedServingOption.serving_weight_grams
//         : baseWeightGrams;

//       const weightRatio =
//         (parseFloat(logData.quantity) * selectedWeightGrams) /
//         (selectedFood.serving_qty * baseWeightGrams);

//       // Format data for backend with all nutritional values
//       const logEntry = {
//         user_id: userId,
//         meal_name: logData.meal_name,
//         quantity: parseFloat(logData.quantity),
//         serving_unit: logData.serving_unit,
//         nutritional_values: {
//           Calories: selectedFood.nf_calories * weightRatio,
//           ProteinContent: selectedFood.nf_protein * weightRatio,
//           FatContent: selectedFood.nf_total_fat * weightRatio,
//           SaturatedFatContent: selectedFood.nf_saturated_fat * weightRatio,
//           CholesterolContent: selectedFood.nf_cholesterol * weightRatio,
//           SodiumContent: selectedFood.nf_sodium * weightRatio,
//           CarbohydrateContent: selectedFood.nf_total_carbohydrate * weightRatio,
//           FiberContent: selectedFood.nf_dietary_fiber * weightRatio,
//           SugarContent: selectedFood.nf_sugars * weightRatio,
//         },
//         entry_date: logData.entry_date,
//       };

//       const response = await fetch("http://localhost:8000/diet_log", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(logEntry),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to log food");
//       }

//       // Re-fetch logs to update the list
//       const logsResponse = await fetch(`http://localhost:8000/diet_log/${userId}`);
//       if (logsResponse.ok) {
//         const logsData = await logsResponse.json();
//         setDietLogs(logsData);
//       }

//       setToast({
//         message: "Food logged successfully!",
//         type: "success",
//       });

//       // Reset form
//       setSelectedFood(null);
//       setFoodQuery("");
//       setFoodSuggestions([]);
//       setAvailableServingOptions([]);
//       setSelectedServingOption(null);
//     } catch (error) {
//       console.error("Error logging food:", error);
//       setToast({
//         message: "Failed to log food. Please try again.",
//         type: "error",
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleGoalSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       // Format data for backend
//       const goalData = {
//         user_id: userId,
//         ...Object.fromEntries(
//           Object.entries(nutritionalGoal).map(([key, value]) => [
//             key,
//             parseFloat(value) || 0,
//           ])
//         ),
//       };

//       const response = await fetch("http://localhost:8000/goals", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(goalData),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to save goals");
//       }

//       setUserGoals(goalData);
//       setToast({
//         message: "Nutritional goals saved successfully!",
//         type: "success",
//       });
//     } catch (error) {
//       console.error("Error saving goals:", error);
//       setToast({
//         message: "Failed to save goals. Please try again.",
//         type: "error",
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleGoalChange = (e) => {
//     setNutritionalGoal({
//       ...nutritionalGoal,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleLogDataChange = (e) => {
//     setLogData({
//       ...logData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Calculate daily totals from logs
//   const calculateDailyTotals = () => {
//     const today = new Date().toISOString().split("T")[0];
//     const todaysLogs = dietLogs.filter((log) => log.entry_date === today);

//     const totals = {
//       Calories: 0,
//       ProteinContent: 0,
//       FatContent: 0,
//       CarbohydrateContent: 0,
//       SaturatedFatContent: 0,
//       CholesterolContent: 0,
//       SodiumContent: 0,
//       FiberContent: 0,
//       SugarContent: 0,
//     };

//     todaysLogs.forEach((log) => {
//       Object.entries(log.nutritional_values).forEach(([key, value]) => {
//         if (totals[key] !== undefined) {
//           totals[key] += value;
//         }
//       });
//     });

//     return totals;
//   };

//   const dailyTotals = calculateDailyTotals();

//   // Calculate nutritional info based on selected serving and quantity
//   const calculateNutrition = () => {
//     if (!selectedFood) return null;

//     const baseWeightGrams = selectedFood.serving_weight_grams;
//     const selectedWeightGrams = selectedServingOption
//       ? selectedServingOption.serving_weight_grams
//       : baseWeightGrams;

//     const weightRatio =
//       (parseFloat(logData.quantity) * selectedWeightGrams) /
//       (selectedFood.serving_qty * baseWeightGrams);

//     return {
//       calories: selectedFood.nf_calories * weightRatio,
//       protein: selectedFood.nf_protein * weightRatio,
//       fat: selectedFood.nf_total_fat * weightRatio,
//       saturatedFat: selectedFood.nf_saturated_fat * weightRatio,
//       cholesterol: selectedFood.nf_cholesterol * weightRatio,
//       sodium: selectedFood.nf_sodium * weightRatio,
//       carbs: selectedFood.nf_total_carbohydrate * weightRatio,
//       fiber: selectedFood.nf_dietary_fiber * weightRatio,
//       sugar: selectedFood.nf_sugars * weightRatio,
//     };
//   };

//   const nutritionValues = selectedFood ? calculateNutrition() : null;

//   // Function to handle Enter key press in search input
//   const handleSearchKeyPress = (e) => {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       searchFood();
//     }
//   };

//   // Component to display loading spinner
//   const LoadingSpinner = () => (
//     <div className="flex justify-center items-center py-8">
//       <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-600"></div>
//     </div>
//   );

//   // Toast notification component
//   const Toast = ({ message, type, onClose }) => {
//     useEffect(() => {
//       const timer = setTimeout(() => {
//         onClose();
//       }, 3000);

//       return () => clearTimeout(timer);
//     }, [onClose]);

//     return (
//       <div
//         className={`fixed bottom-4 right-4 px-4 py-2 rounded-md shadow-lg ${
//           type === "success"
//             ? "bg-green-100 text-green-800 border border-green-200"
//             : "bg-red-100 text-red-800 border border-red-200"
//         }`}
//       >
//         <div className="flex items-center">
//           {type === "success" ? (
//             <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
//               <path
//                 fillRule="evenodd"
//                 d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           ) : (
//             <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
//               <path
//                 fillRule="evenodd"
//                 d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           )}
//           <p>{message}</p>
//           <button onClick={onClose} className="ml-4 text-gray-500 hover:text-gray-700">
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-6">Track Diet</h2>

//       <div className="mb-6">
//         <div className="flex mb-4 border-b">
//           <button
//             className={`py-2 px-4 ${
//               activeTab === "logFood"
//                 ? "text-indigo-600 border-b-2 border-indigo-600"
//                 : "text-gray-600"
//             }`}
//             onClick={() => setActiveTab("logFood")}
//           >
//             Log Food
//           </button>
//           <button
//             className={`py-2 px-4 ${
//               activeTab === "setGoal"
//                 ? "text-indigo-600 border-b-2 border-indigo-600"
//                 : "text-gray-600"
//             }`}
//             onClick={() => setActiveTab("setGoal")}
//           >
//             Set Nutritional Goals
//           </button>
//           <button
//             className={`py-2 px-4 ${
//               activeTab === "viewLogs"
//                 ? "text-indigo-600 border-b-2 border-indigo-600"
//                 : "text-gray-600"
//             }`}
//             onClick={() => setActiveTab("viewLogs")}
//           >
//             View Logs
//           </button>
//         </div>

//         {activeTab === "logFood" && (
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             <div className="bg-white shadow-md rounded-lg p-6">
//               <h3 className="text-lg font-medium mb-4">Log Your Food</h3>
//               <div className="mb-4">
//                 <label className="block text-gray-700 mb-2">Search Food</label>
//                 <div className="flex">
//                   <input
//                     type="text"
//                     value={foodQuery}
//                     onChange={(e) => setFoodQuery(e.target.value)}
//                     onKeyPress={handleSearchKeyPress}
//                     className="flex-1 px-3 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                     placeholder="e.g. Blueberry Mango Smoothie"
//                   />
//                   <button
//                     onClick={searchFood}
//                     className="bg-indigo-600 text-white px-4 py-2 rounded-r hover:bg-indigo-700 transition-colors"
//                     disabled={isLoading}
//                   >
//                     {isLoading ? "Searching..." : "Search"}
//                   </button>
//                 </div>
//               </div>

//               {isLoading && !selectedFood && <LoadingSpinner />}

//               {foodSuggestions.length > 0 && !selectedFood && (
//                 <div className="mb-4">
//                   <label className="block text-gray-700 mb-2">Food Results</label>
//                   <div className="max-h-64 overflow-y-auto border border-gray-300 rounded">
//                     {foodSuggestions.map((food, index) => (
//                       <div
//                         key={index}
//                         className="p-3 cursor-pointer hover:bg-gray-100 border-b flex items-center"
//                         onClick={() => handleFoodSelect(food)}
//                       >
//                         {food.photo && food.photo.thumb && (
//                           <img
//                             src={food.photo.thumb}
//                             alt={food.food_name}
//                             className="w-12 h-12 object-cover rounded mr-3"
//                           />
//                         )}
//                         <div>
//                           <p className="font-medium">{food.food_name}</p>
//                           {food.brand_name && (
//                             <p className="text-xs text-gray-500">{food.brand_name}</p>
//                           )}
//                           <p className="text-sm text-gray-600">
//                             {food.serving_qty} {food.serving_unit}
//                           </p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {selectedFood && (
//                 <form onSubmit={handleLogSubmit} className="mt-4">
//                   <div className="mb-4 flex items-center">
//                     {selectedFood.photo && selectedFood.photo.thumb && (
//                       <img
//                         src={selectedFood.photo.thumb}
//                         alt={selectedFood.food_name}
//                         className="w-16 h-16 object-cover rounded mr-4"
//                       />
//                     )}
//                     <div>
//                       <h4 className="font-medium">{selectedFood.food_name}</h4>
//                       {selectedFood.brand_name && (
//                         <p className="text-sm text-gray-600">{selectedFood.brand_name}</p>
//                       )}
//                     </div>
//                   </div>

//                   <div className="mb-4">
//                     <label className="block text-gray-700 mb-2">Meal Type</label>
//                     <select
//                       name="meal_name"
//                       value={logData.meal_name}
//                       onChange={handleLogDataChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                     >
//                       <option value="Breakfast">Breakfast</option>
//                       <option value="Lunch">Lunch</option>
//                       <option value="Dinner">Dinner</option>
//                       <option value="Snack">Snack</option>
//                     </select>
//                   </div>

//                   <div className="mb-4">
//                     <label className="block text-gray-700 mb-2">Serving Size</label>
//                     <select
//                       value={`${selectedServingOption?.serving_qty} ${selectedServingOption?.serving_unit}`}
//                       onChange={handleServingOptionChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                     >
//                       {availableServingOptions.map((option, index) => (
//                         <option key={index} value={`${option.serving_qty} ${option.serving_unit}`}>
//                           {option.serving_qty} {option.serving_unit} ({option.serving_weight_grams}g)
//                         </option>
//                       ))}
//                     </select>
//                   </div>

//                   <div className="mb-4">
//                     <label className="block text-gray-700 mb-2">Quantity</label>
//                     <input
//                       type="number"
//                       name="quantity"
//                       value={logData.quantity}
//                       onChange={handleLogDataChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                       step="0.1"
//                       min="0.1"
//                       required
//                     />
//                   </div>

//                   <div className="mb-4">
//                     <label className="block text-gray-700 mb-2">Date</label>
//                     <input
//                       type="date"
//                       name="entry_date"
//                       value={logData.entry_date}
//                       onChange={handleLogDataChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                       required
//                     />
//                   </div>

//                   {nutritionValues && (
//                     <div className="mb-4 p-4 bg-gray-50 rounded border">
//                       <h4 className="font-medium mb-3">Nutritional Summary</h4>
//                       <div className="grid grid-cols-2 gap-3">
//                         <div>
//                           <p className="text-sm flex justify-between">
//                             <span>Calories:</span>
//                             <span className="font-medium">{nutritionValues.calories.toFixed(1)}</span>
//                           </p>
//                           <p className="text-sm flex justify-between">
//                             <span>Protein:</span>
//                             <span className="font-medium">{nutritionValues.protein.toFixed(1)}g</span>
//                           </p>
//                           <p className="text-sm flex justify-between">
//                             <span>Total Fat:</span>
//                             <span className="font-medium">{nutritionValues.fat.toFixed(1)}g</span>
//                           </p>
//                         </div>
//                         <div>
//                           <p className="text-sm flex justify-between">
//                             <span>Saturated Fat:</span>
//                             <span className="font-medium">{nutritionValues.saturatedFat.toFixed(1)}g</span>
//                           </p>
//                           <p className="text-sm flex justify-between">
//                             <span>Cholesterol:</span>
//                             <span className="font-medium">{nutritionValues.cholesterol.toFixed(1)}</span>
//                           </p>
//                           <p className="text-sm flex justify-between">
//                             <span>Sodium:</span>
//                             <span className="font-medium">{nutritionValues.sodium.toFixed(1)}</span>
//                           </p>
//                         </div>
//                         <div className="col-span-2">
//                           <p className="text-sm flex justify-between">
//                             <span>Carbs:</span>
//                             <span className="font-medium">{nutritionValues.carbs.toFixed(1)}g</span>
//                           </p>
//                           <p className="text-sm flex justify-between">
//                             <span>Fiber:</span>
//                             <span className="font-medium">{nutritionValues.fiber.toFixed(1)}g</span>
//                           </p>
//                           <p className="text-sm flex justify-between">
//                             <span>Sugar:</span>
//                             <span className="font-medium">{nutritionValues.sugar.toFixed(1)}g</span>
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   )}

//                   <button
//                     type="submit"
//                     className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors flex justify-center items-center"
//                     disabled={isLoading}
//                   >
//                     {isLoading ? "Logging..." : "Log Food"}
//                   </button>
//                 </form>
//               )}
//             </div>
//             <div className="bg-white shadow-md rounded-lg p-6">
//               <h3 className="text-lg font-medium mb-4">Daily Totals</h3>
//               <div className="grid grid-cols-2 gap-3">
//                 <p className="text-sm flex justify-between">
//                   <span>Calories:</span>
//                   <span className="font-medium">{dailyTotals.Calories.toFixed(0)}</span>
//                 </p>
//                 <p className="text-sm flex justify-between">
//                   <span>Protein:</span>
//                   <span className="font-medium">{dailyTotals.ProteinContent.toFixed(0)}g</span>
//                 </p>
//                 <p className="text-sm flex justify-between">
//                   <span>Fat:</span>
//                   <span className="font-medium">{dailyTotals.FatContent.toFixed(0)}g</span>
//                 </p>
//                 <p className="text-sm flex justify-between">
//                   <span>Carbs:</span>
//                   <span className="font-medium">{dailyTotals.CarbohydrateContent.toFixed(0)}g</span>
//                 </p>
//                 <p className="text-sm flex justify-between">
//                   <span>Fiber:</span>
//                   <span className="font-medium">{dailyTotals.FiberContent.toFixed(0)}g</span>
//                 </p>
//                 <p className="text-sm flex justify-between">
//                   <span>Sugar:</span>
//                   <span className="font-medium">{dailyTotals.SugarContent.toFixed(0)}g</span>
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}

//         {activeTab === "setGoal" && (
//           <div className="bg-white shadow-md rounded-lg p-6">
//             <h3 className="text-lg font-medium mb-4">Set Nutritional Goals</h3>
//             <form onSubmit={handleGoalSubmit}>
//               <div className="grid grid-cols-2 gap-4">
//                 {Object.keys(nutritionalGoal).map((key, idx) => (
//                   <div key={idx}>
//                     <label className="block text-gray-700 mb-1">{key}</label>
//                     <input
//                       type="number"
//                       name={key}
//                       value={nutritionalGoal[key]}
//                       onChange={handleGoalChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                       step="0.1"
//                       required
//                     />
//                   </div>
//                 ))}
//               </div>
//               <button
//                 type="submit"
//                 className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors flex justify-center items-center"
//                 disabled={isLoading}
//               >
//                 {isLoading ? "Saving..." : "Save Goals"}
//               </button>
//             </form>
//           </div>
//         )}

//         {activeTab === "viewLogs" && (
//           <div className="bg-white shadow-md rounded-lg p-6">
//             <h3 className="text-lg font-medium mb-4">Your Food Logs</h3>
//             {dietLogs.length > 0 ? (
//               <div className="max-h-64 overflow-y-auto">
//                 {dietLogs.map((log, index) => (
//                   <div key={index} className="border-b py-2">
//                     <p className="text-sm">
//                       <span className="font-medium">{log.meal_name}:</span>{" "}
//                       {log.nutritional_values.Calories.toFixed(0)} kcal,{" "}
//                       {log.nutritional_values.ProteinContent.toFixed(0)}g protein
//                     </p>
//                     <p className="text-xs text-gray-500">{log.entry_date}</p>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p>No logs for today.</p>
//             )}
//           </div>
//         )}
//       </div>

//       {toast && (
//         <Toast
//           message={toast.message}
//           type={toast.type}
//           onClose={() => setToast(null)}
//         />
//       )}
//     </div>
//   );
// }





function TrackDiet() {
  const [activeTab, setActiveTab] = useState("logFood");
  const [foodQuery, setFoodQuery] = useState("");
  const [foodSuggestions, setFoodSuggestions] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUserId] = useState("1");
  const [dietLogs, setDietLogs] = useState([]);
  const [toast, setToast] = useState(null);
  const [nutritionalGoal, setNutritionalGoal] = useState({
    Calories: "",
    FatContent: "",
    SaturatedFatContent: "",
    CholesterolContent: "",
    SodiumContent: "",
    CarbohydrateContent: "",
    FiberContent: "",
    SugarContent: "",
    ProteinContent: "",
  });
  const [userGoals, setUserGoals] = useState(null);
  const [logData, setLogData] = useState({
    meal_name: "Breakfast",
    quantity: 1,
    serving_unit: "serving",
    entry_date: new Date().toISOString().split("T")[0],
  });
  const [selectedServingOption, setSelectedServingOption] = useState(null);
  const [availableServingOptions, setAvailableServingOptions] = useState([]);

  useEffect(() => {
    const fetchDietLogs = async () => {
      try {
        const response = await fetch(`http://localhost:8000/diet_log/${userId}`);
        if (response.ok) {
          const data = await response.json();
          setDietLogs(data);
        }
      } catch (error) {
        console.error("Error fetching diet logs:", error);
      }
    };
    const fetchUserGoals = async () => {
      try {
        const response = await fetch(`http://localhost:8000/goals/${userId}`);
        if (response.ok) {
          const data = await response.json();
          setUserGoals(data);
          setNutritionalGoal(data);
        }
      } catch (error) {
        console.error("Error fetching user goals:", error);
      }
    };
    fetchDietLogs();
    fetchUserGoals();
  }, [userId]);

  const searchFood = async () => {
    if (!foodQuery.trim()) return;
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://trackapi.nutritionix.com/v2/search/instant?query=${encodeURIComponent(foodQuery)}`,
        {
          headers: {
            "Content-Type": "application/json",
            "x-app-id": "91e1d6a6",
            "x-app-key": "33294ccd17dd4b21f70e1e5b03aba711",
          },
        }
      );
      if (!response.ok) throw new Error("Failed to fetch food suggestions");
      const data = await response.json();
      const processedSuggestions = [];
      if (data.common) {
        data.common.forEach((item) => {
          processedSuggestions.push({
            food_name: item.food_name,
            serving_unit: item.serving_unit,
            serving_qty: item.serving_qty,
            photo: item.photo,
            is_common: true,
            brand_name: null,
          });
        });
      }
      if (data.branded) {
        data.branded.forEach((item) => {
          processedSuggestions.push({
            food_name: item.food_name,
            serving_unit: item.serving_unit,
            serving_qty: item.serving_qty,
            photo: item.photo,
            is_common: false,
            brand_name: item.brand_name,
          });
        });
      }
      setFoodSuggestions(processedSuggestions);
    } catch (error) {
      console.error("Error fetching food data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFoodSelect = async (food) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://trackapi.nutritionix.com/v2/natural/nutrients",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-app-id": "91e1d6a6",
            "x-app-key": "33294ccd17dd4b21f70e1e5b03aba711",
          },
          body: JSON.stringify({
            query: food.food_name,
          }),
        }
      );
      if (!response.ok) throw new Error("Failed to fetch nutritional information");
      const data = await response.json();
      if (data.foods && data.foods.length > 0) {
        const foodDetails = data.foods[0];
        const mappedFood = {
          food_name: foodDetails.food_name,
          brand_name: foodDetails.brand_name,
          serving_unit: foodDetails.serving_unit,
          serving_qty: foodDetails.serving_qty,
          serving_weight_grams: foodDetails.serving_weight_grams,
          nf_calories: foodDetails.nf_calories,
          nf_protein: foodDetails.nf_protein,
          nf_total_fat: foodDetails.nf_total_fat,
          nf_saturated_fat: foodDetails.nf_saturated_fat,
          nf_cholesterol: foodDetails.nf_cholesterol,
          nf_sodium: foodDetails.nf_sodium,
          nf_total_carbohydrate: foodDetails.nf_total_carbohydrate,
          nf_dietary_fiber: foodDetails.nf_dietary_fiber,
          nf_sugars: foodDetails.nf_sugars,
          photo: foodDetails.photo,
          alt_measures: foodDetails.alt_measures || [],
        };
        setSelectedFood(mappedFood);
        let servingOptions = mappedFood.alt_measures.map((measure) => ({
          serving_unit: measure.measure,
          serving_qty: measure.qty,
          serving_weight_grams: measure.serving_weight,
        }));
        const defaultOption = {
          serving_unit: mappedFood.serving_unit,
          serving_qty: mappedFood.serving_qty,
          serving_weight_grams: mappedFood.serving_weight_grams,
        };
        if (!servingOptions.some((opt) => opt.serving_qty === defaultOption.serving_qty && opt.serving_unit === defaultOption.serving_unit)) {
          servingOptions.unshift(defaultOption);
        }
        setAvailableServingOptions(servingOptions);
        setSelectedServingOption(defaultOption);
        setLogData({ ...logData, quantity: defaultOption.serving_qty, serving_unit: defaultOption.serving_unit });
        setFoodSuggestions([]);
      }
    } catch (error) {
      console.error("Error fetching nutritional details:", error);
      const fallbackDetails = {
        food_name: food.food_name,
        brand_name: food.brand_name,
        serving_unit: food.serving_unit,
        serving_qty: food.serving_qty,
        serving_weight_grams: 100,
        nf_calories: 150,
        nf_protein: 12,
        nf_total_fat: 2,
        nf_saturated_fat: 1,
        nf_cholesterol: 10,
        nf_sodium: 80,
        nf_total_carbohydrate: 25,
        nf_dietary_fiber: 2,
        nf_sugars: 20,
        photo: food.photo,
        alt_measures: [],
      };
      setSelectedFood(fallbackDetails);
      const servingOptions = [{ serving_unit: "serving", serving_qty: 1, serving_weight_grams: 100 }];
      setAvailableServingOptions(servingOptions);
      setSelectedServingOption(servingOptions[0]);
      setLogData({ ...logData, quantity: 1, serving_unit: "serving" });
      setFoodSuggestions([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleServingOptionChange = (e) => {
    const selectedOption = availableServingOptions.find(
      (option) => `${option.serving_qty} ${option.serving_unit}` === e.target.value
    );
    if (selectedOption) {
      setSelectedServingOption(selectedOption);
      setLogData({ ...logData, quantity: selectedOption.serving_qty, serving_unit: selectedOption.serving_unit });
    }
  };

  const calculateNutrition = () => {
    if (!selectedFood) return null;
    const baseWeightGrams = selectedFood.serving_weight_grams;
    const selectedWeightGrams = selectedServingOption ? selectedServingOption.serving_weight_grams : baseWeightGrams;
    const weightRatio = (parseFloat(logData.quantity) * selectedWeightGrams) / baseWeightGrams;
    return {
      calories: selectedFood.nf_calories * weightRatio,
      protein: selectedFood.nf_protein * weightRatio,
      fat: selectedFood.nf_total_fat * weightRatio,
      saturatedFat: selectedFood.nf_saturated_fat * weightRatio,
      cholesterol: selectedFood.nf_cholesterol * weightRatio,
      sodium: selectedFood.nf_sodium * weightRatio,
      carbs: selectedFood.nf_total_carbohydrate * weightRatio,
      fiber: selectedFood.nf_dietary_fiber * weightRatio,
      sugar: selectedFood.nf_sugars * weightRatio,
    };
  };




  const handleLogSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFood) return;
    setIsLoading(true);
    try {
      const baseWeightGrams = selectedFood.serving_weight_grams;
      const selectedWeightGrams = selectedServingOption ? selectedServingOption.serving_weight_grams : baseWeightGrams;
      const weightRatio = (parseFloat(logData.quantity) * selectedWeightGrams) / baseWeightGrams;
      const logEntry = {
        user_id: userId,
        meal_name: logData.meal_name,
        food_name: selectedFood.food_name,
        quantity: parseFloat(logData.quantity),
        serving_unit: logData.serving_unit,
        nutritional_values: {
          Calories: selectedFood.nf_calories * weightRatio,
          ProteinContent: selectedFood.nf_protein * weightRatio,
          FatContent: selectedFood.nf_total_fat * weightRatio,
          SaturatedFatContent: selectedFood.nf_saturated_fat * weightRatio,
          CholesterolContent: selectedFood.nf_cholesterol * weightRatio,
          SodiumContent: selectedFood.nf_sodium * weightRatio,
          CarbohydrateContent: selectedFood.nf_total_carbohydrate * weightRatio,
          FiberContent: selectedFood.nf_dietary_fiber * weightRatio,
          SugarContent: selectedFood.nf_sugars * weightRatio,
          
        },
        entry_date: logData.entry_date,
      };
      const response = await fetch("http://localhost:8000/diet_log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(logEntry),
      });
      if (!response.ok) throw new Error("Failed to log food");
      const logsResponse = await fetch(`http://localhost:8000/diet_log/${userId}`);
      if (logsResponse.ok) {
        const logsData = await logsResponse.json();
        setDietLogs(logsData);
      }
      setToast({ message: "Food logged successfully!", type: "success" });
      setSelectedFood(null);
      setFoodQuery("");
      setFoodSuggestions([]);
      setAvailableServingOptions([]);
      setSelectedServingOption(null);
    } catch (error) {
      console.error("Error logging food:", error);
      setToast({ message: "Failed to log food. Please try again.", type: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  const nutritionValues = calculateNutrition();


  // Calculate daily nutritional totals for the current day
  const calculateDailyTotals = () => {
    const today = "2025-04-16"; // Hardcoded for this example; use new Date().toISOString().split("T")[0] in production
    const todaysLogs = dietLogs.filter(log => log.entry_date === today && log.user_id === userId);
    const totals = {
      Calories: 0,
      ProteinContent: 0,
      FatContent: 0,
      SaturatedFatContent: 0,
      CholesterolContent: 0,
      SodiumContent: 0,
      CarbohydrateContent: 0,
      FiberContent: 0,
      SugarContent: 0,
    };

    todaysLogs.forEach(log => {
      Object.entries(log.nutritional_values).forEach(([key, value]) => {
        if (totals[key] !== undefined) {
          totals[key] += value;
        }
      });
    });
    return totals;
  };

  const dailyTotals = calculateDailyTotals();

  // Handle goal input changes
  const handleGoalChange = (e) => {
    setNutritionalGoal({
      ...nutritionalGoal,
      [e.target.name]: e.target.value,
    });
  };

  // Handle goal form submission
  const handleGoalSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const goalData = { user_id: userId, ...nutritionalGoal };
      const response = await fetch("http://localhost:8000/goals", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(goalData),
      });
      if (response.ok) {
        setUserGoals(goalData);
        setToast({ message: "Goals saved successfully!", type: "success" });
      } else {
        throw new Error("Failed to save goals");
      }
    } catch (error) {
      console.error("Error saving goals:", error);
      setToast({ message: "Failed to save goals", type: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="tabs mb-4">
        <button
          className={`mr-2 px-4 py-2 ${activeTab === "logFood" ? "bg-indigo-500 text-white" : "bg-gray-200"} rounded`}
          onClick={() => setActiveTab("logFood")}
        >
          Log Food
        </button>
        <button
          className={`mr-2 px-4 py-2 ${activeTab === "todaySummary" ? "bg-indigo-500 text-white" : "bg-gray-200"} rounded`}
          onClick={() => setActiveTab("todaySummary")}
        >
          Today's Summary
        </button>
        <button
          className={`px-4 py-2 ${activeTab === "setGoals" ? "bg-indigo-500 text-white" : "bg-gray-200"} rounded`}
          onClick={() => setActiveTab("setGoals")}
        >
          Set Goals
        </button>
      </div>

      {activeTab === "logFood" && (
        <div>
          <h2 className="text-xl font-bold mb-4">Log Your Food</h2>
          <div className="mb-4 relative">
            <input
              type="text"
              value={foodQuery}
              onChange={(e) => {
                setFoodQuery(e.target.value);
                searchFood();
              }}
              placeholder="Search for a food..."
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {foodSuggestions.length > 0 && (
              <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded mt-1 max-h-60 overflow-auto">
                {foodSuggestions.map((food, index) => (
                  <li
                    key={index}
                    onClick={() => handleFoodSelect(food)}
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                  >
                    <img src={food.photo?.thumb} alt={food.food_name} className="w-8 h-8 mr-2" />
                    {food.food_name} {food.brand_name ? `(${food.brand_name})` : ""}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {isLoading && <p>Loading...</p>}

          {selectedFood && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold">{selectedFood.food_name}</h3>
              <div className="flex items-center mb-4">
                <img src={selectedFood.photo?.thumb} alt={selectedFood.food_name} className="w-16 h-16 mr-4" />
                <div>
                  <p>Serving Size: {selectedFood.serving_qty} {selectedFood.serving_unit}</p>
                  <p>Weight: {selectedFood.serving_weight_grams}g</p>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Meal Name</label>
                <select
                  value={logData.meal_name}
                  onChange={(e) => setLogData({ ...logData, meal_name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  <option value="Breakfast">Breakfast</option>
                  <option value="Lunch">Lunch</option>
                  <option value="Dinner">Dinner</option>
                  <option value="Snack">Snack</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Serving Size</label>
                <select
                  value={`${selectedServingOption?.serving_qty} ${selectedServingOption?.serving_unit}`}
                  onChange={handleServingOptionChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  {availableServingOptions.map((option, index) => (
                    <option key={index} value={`${option.serving_qty} ${option.serving_unit}`}>
                      {option.serving_qty} {option.serving_unit} ({option.serving_weight_grams}g)
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Quantity</label>
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  value={logData.quantity}
                  onChange={(e) => setLogData({ ...logData, quantity: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              {nutritionValues && (
                <div className="mb-4">
                  <h4 className="text-md font-semibold">Nutritional Summary</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-sm flex justify-between">
                        <span>Calories:</span>
                        <span className="font-medium">{nutritionValues.calories.toFixed(1)}</span>
                      </p>
                      <p className="text-sm flex justify-between">
                        <span>Protein:</span>
                        <span className="font-medium">{nutritionValues.protein.toFixed(1)}g</span>
                      </p>
                      <p className="text-sm flex justify-between">
                        <span>Total Fat:</span>
                        <span className="font-medium">{nutritionValues.fat.toFixed(1)}g</span>
                      </p>
                      <p className="text-sm flex justify-between">
                        <span>Saturated Fat:</span>
                        <span className="font-medium">{nutritionValues.saturatedFat.toFixed(1)}g</span>
                      </p>
                      <p className="text-sm flex justify-between">
                        <span>Cholesterol:</span>
                        <span className="font-medium">{nutritionValues.cholesterol.toFixed(1)}mg</span>
                      </p>
                    </div>
                    <div>
                      <p className="text-sm flex justify-between">
                        <span>Sodium:</span>
                        <span className="font-medium">{nutritionValues.sodium.toFixed(1)}mg</span>
                      </p>
                      <p className="text-sm flex justify-between">
                        <span>Carbohydrates:</span>
                        <span className="font-medium">{nutritionValues.carbs.toFixed(1)}g</span>
                      </p>
                      <p className="text-sm flex justify-between">
                        <span>Fiber:</span>
                        <span className="font-medium">{nutritionValues.fiber.toFixed(1)}g</span>
                      </p>
                      <p className="text-sm flex justify-between">
                        <span>Sugar:</span>
                        <span className="font-medium">{nutritionValues.sugar.toFixed(1)}g</span>
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <button
                onClick={handleLogSubmit}
                className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600"
                disabled={isLoading}
              >
                {isLoading ? "Logging..." : "Log Food"}
              </button>
            </div>
          )}
        </div>
      )}

      {/* Today's Summary Tab */}
      {activeTab === "todaySummary" && (
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-medium mb-4">Today's Summary (2025-04-16)</h3>
            {dietLogs.length > 0 && userGoals ? (
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(dailyTotals).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span>{key.replace('Content', '')}:</span>
                    <span>
                      {value.toFixed(1)} / {userGoals[key] || 0} {key === "Calories" ? "" : key.includes("Cholesterol") || key.includes("Sodium") ? "mg" : "g"}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p>No data available for today or goals not set.</p>
            )}
          </div>
        )}

        {/* Set Goals Tab */}
        {activeTab === "setGoals" && (
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-medium mb-4">Set Nutritional Goals</h3>
            <div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {Object.keys(nutritionalGoal).map((key) => (
                  <div key={key}>
                    <label className="block text-gray-700 mb-1">
                      {key.replace('Content', '')} {key === "Calories" ? "" : key.includes("Cholesterol") || key.includes("Sodium") ? "(mg)" : "(g)"}
                    </label>
                    <input
                      type="number"
                      name={key}
                      value={nutritionalGoal[key]}
                      onChange={handleGoalChange}
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                      placeholder="Enter amount"
                      step="0.1"
                      min="0"
                    />
                  </div>
                ))}
              </div>
              <button
                onClick={handleGoalSubmit}
                className={`w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={isLoading}
              >
                {isLoading ? "Saving..." : "Save Goals"}
              </button>
            </div>
          </div>
        )}

      {toast && (
        <div className={`fixed bottom-4 right-4 p-4 rounded text-white ${toast.type === "success" ? "bg-green-500" : "bg-red-500"}`}>
          {toast.message}
          <button onClick={() => setToast(null)} className="ml-2">✕</button>
        </div>
      )}
    </div>
  );
}
