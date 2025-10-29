import { useState } from "react";
import IngredientsList from "./IngredientsList";
import Recipe from "./Recipe";
import { generateRecipe } from "../../ai";

export default function Home() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState(false);
  const [loading, setLoading] = useState(false);

  async function getRecipe() {
    setLoading(true);
    const recipeMarkdown = await generateRecipe(ingredients);
    setRecipe(recipeMarkdown);
    setLoading(false);
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
      <div className="directions">
        <h3>Add at least 4 ingredients</h3>
      </div>
      {ingredients.length > 0 && (
        <IngredientsList
          ingredients={ingredients}
          getRecipe={getRecipe}
          loading={loading}
          recipe={recipe}
        />
      )}
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        recipe && <Recipe recipe={recipe} />
      )}
    </main>
  );
}
