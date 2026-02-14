import { useState, useEffect } from "react";
import recipesData from "src/data.json";
import { Link } from "react-router-dom";

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        setRecipes(recipesData);
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                Recipe Sharing Platform
            </h1>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {recipes.map((recipe) => (
                    <div
                        key={recipe.id}
                        className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
                    <img src="{recipe.image}" alt="{recipe.title}" className="w-full h-48 object-cover" />

                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2 text-gray-800">
                            {recipe.title}
                        </h2>

                        <p className="text-gray-600 text-sm mb-4">
                            {recipe.summary}
                        </p>

                        <Link to={`/recipe/${recipe.id}`}
                            className="text-indigo-600 font-medium hover:underline"> 
                            View Recipe →
                        </Link>

                    <div className="text-center mb-6">
                        <Link to="/add-recipe"
                              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">
                                + Add New Recipe
                        </Link>
                    </div>


                    </div>        

                    </div>
                ))}

            </div>

        </div>
    )
}
export default HomePage;