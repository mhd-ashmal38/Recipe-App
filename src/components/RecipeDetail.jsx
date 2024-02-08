import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const API_URL = "https://dummyjson.com/recipes";

function RecipeDetail() {

    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        axios
            .get(`${API_URL}/${id}`)
            .then((response) => {
                setRecipe(response.data);
            })
            .catch((error) => {
                console.error('Error fetching recipe details:', error);
            });
    }, [id]);

    if (!recipe) {
        return <div>Loading...</div>;
    }


    return (
        <div className='px-5 md:px-10 py-5'>
            <h1 className='text-2xl text-center pb-8 md:text-[40px]  '>{recipe.name}</h1>

            <div className="flex flex-col md:flex-row items-center md:items-start">
                
                <div><img src={recipe.image} alt="" width={600} className="mb-2" /></div>
                <div className='px-10'>
                    <h3 className="font-bold mb-2">Ingredients:</h3>
                    <ul className='list-disc pb-3'>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    
                    <h3 className="font-bold mb-2">Instructions:</h3>
                    <ul className='li list-decimal'>
                        {recipe.instructions.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                        ))}
                    </ul>

                    
                </div>
                

            </div>
            
        </div>
    )
}

export default RecipeDetail