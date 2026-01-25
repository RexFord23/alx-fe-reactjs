import { useRecipeStore } from "../store/recipeStore";

const RecipeList = () => {
    const recipes = useRecipeStore((state) => state.recipes);

    return (
        <div>
           <h2>Recipes</h2>
           {recipes.lenght === 0 && <p>No Recipes yet.</p>}

           {recipes.map((recipe) => (
            <div key={recipe.id}>
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
            </div>
           ))}
        </div>
    );
};

export default RecipeList;