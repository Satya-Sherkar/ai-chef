export default function IngredientsList(props) {
    const ingredientEl = props.ingredients.map((ingredient) => <li>{ingredient}</li>);

    return (
      <section className="ingredient-list">
        <h2>Ingredients on hand:</h2>
        <ul className="list-items">{ingredientEl}</ul>
        {props.ingredients.length > 3 && (
          <div className="get-recipe-container">
            <div>
              <h3>Ready For a recipe?</h3>
              <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button onClick={props.getRecipe}>Get a recipe</button>
          </div>
        )}
      </section>
    );
}