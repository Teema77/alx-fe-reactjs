import { useState, useEffect } from "react";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/src/data.json") // Load local JSON file
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-12 py-6">
      {/* Page Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-blue-700">
        Recipe Sharing Platform
      </h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image */}
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-md mb-4 transition-transform duration-300 hover:scale-105"
            />
            {/* Title */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2 hover:text-blue-500 transition-colors duration-200">
              {recipe.title}
            </h2>
            {/* Summary */}
            <p className="text-gray-600 text-sm sm:text-base">{recipe.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
