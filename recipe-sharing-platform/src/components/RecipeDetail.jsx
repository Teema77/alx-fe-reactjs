import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import recipes from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipes.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="text-center mt-10">Recipe not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h1 className="text-3xl font-bold text-blue-800 mt-6">{recipe.title}</h1>
      <p className="text-gray-600 mt-2">{recipe.summary}</p>

      {/*Ingredients */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-700">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
        <p className="text-gray-700 leading-relaxed">{recipe.instructions}</p>
      </div>
    </div>
  );
}

export default RecipeDetail;
