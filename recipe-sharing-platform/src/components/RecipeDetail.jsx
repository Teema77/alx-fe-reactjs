import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = data.find((item) => item.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <p className="text-center text-gray-500 mt-10">Recipe not found.</p>
    );
  }

  return (
    <div className="max-w-3xl mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold text-blue-800 mb-4">
        {recipe.title}
      </h1>
      <p className="text-gray-700 mb-6">{recipe.summary}</p>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Ingredients</h2>
      <ul className="list-disc pl-6 mb-6 text-gray-600">
        {recipe.ingredients?.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Instructions</h2>
      <ol className="list-decimal pl-6 text-gray-600 mb-6">
        {recipe.steps?.map((step, index) => (
          <li key={index} className="mb-2">
            {step}
          </li>
        ))}
      </ol>

      {/* 🔹 Back to Home Button */}
      <div className="mt-6">
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default RecipeDetail;
