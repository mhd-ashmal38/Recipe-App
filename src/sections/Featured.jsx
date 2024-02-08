import React, { useEffect, useState } from 'react'
import FeatureCard from '../components/FeatureCard'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const API_URL = "https://dummyjson.com/recipes"

function Featured() {

    const navigate = useNavigate()

    const handleNavigate = () => {

        navigate('/recipes')
    }


    const [recipe, setRecipe] = useState([])

    useEffect(() => {

        axios.get(API_URL)
            .then(response => {
                // console.log(response.data);
                setRecipe(response.data.recipes);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

    }, [])




    return (
        <div className='p-10 '>
            <h1 className='text-3xl text-center pb-12 md:text-[50px]  '>Culinary Delights</h1>

            <div className='md:grid gap-3 grid-cols-2'>

                {
                    recipe.slice(4, 10).map((reciReq) => (
                        <Link to={`/recipe/${reciReq.id}`}>
                            <FeatureCard key={reciReq.id} {...reciReq}/>
                        </Link>
                    ))
                }
            </div>

            <div className='flex justify-center items-center pt-10'>
                <button onClick={handleNavigate} type="button" class="my-5 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-4 py-2 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Explore More</button>
            </div>

        </div>




    )
}

export default Featured