import { useState } from "react";
import IngredientsList from "./IngredientsList";
import Recipe from "./Recipe";
import { generateRecipe } from "../../ai";

export default function Home() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState(false);

  async function getRecipe() {
    const recipeMarkdown = await generateRecipe(ingredients);
    setRecipe(recipeMarkdown); 
  }

  function handleSubmit(formData) {
    const newIngrdient = formData.get("ingredient");
    setIngredients((prev) => [...prev, newIngrdient]);
  }

  return (
    <main>
      <form action={handleSubmit} className="form">
        <input
          type="text"
          placeholder="e.g Eggs, Oregano"
          aria-label="Add Ingredients"
          name="ingredient"
        />
        <button>+ Add Ingredient</button>
      </form>
      {ingredients.length > 0 && (
        <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
      )}
      {recipe && <Recipe recipe={recipe} />}
    </main>
  );
}
