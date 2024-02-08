import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CategoryCard from '../components/CategoryCard';
import { Link } from 'react-router-dom';

const API_URL = "https://dummyjson.com/recipes";

function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(API_URL)
            .then(response => {
                setCategories(response.data.recipes);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className='p-16'>
            <h1 className='text-[50px] text-center pb-12'>Explore by Category</h1>
            <div className='grid gap-4 grid-cols-4'>
                {categories.slice(1, 5).map(category => (
                    <CategoryCard key={category.id}  category={category}/>
                    // image={category.image} cuisine={category.cuisine}
                ))}
            </div>
        </div>
    );
}

export default Categories;