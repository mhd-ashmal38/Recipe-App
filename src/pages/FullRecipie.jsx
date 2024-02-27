import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RenderStars from "../components/RenderStars";

const API_URL = "https://dummyjson.com/recipes"

function FullRecipie() {

  const [category, setCategory] = useState([])
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {

    axios.get(API_URL)
      .then(response => {
        // console.log(response.data);
        setCategory(response.data.recipes);
        setFilteredRecipes(response.data.recipes);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

  }, [])

  // Function to handle changes in the search input
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    filterRecipes(event.target.value);
  };

  // Function to filter recipes based on the search query
  const filterRecipes = (query) => {
    const filtered = category.filter((recipe) =>
      recipe.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredRecipes(filtered);
  };


  return (
    <div className="p-10 justify-center">
      <input
          type="text"
          placeholder="Search recipe..."
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="p-2 border mb-5 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-400 w-full md:w-80"
        />
      <div className='md:grid gap-3 grid-cols-4'>
      
        {
          filteredRecipes.map((reciReq) => (


            <div key={reciReq.id} class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-3">
                <img class="rounded-t-lg" src={reciReq.image} alt="" />
              <div class="p-5">
                  <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{reciReq.name}</h5>
                  <p className="font-semibold">Rating : {RenderStars(reciReq.rating)}</p>
                
                <Link to={`/recipe/${reciReq.id}`}>
                <button type="button" class="my-5 inline-flex items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-4 py-2 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Explore Now
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </button>
                </Link>
                
              </div>
            </div>


          ))
        }
      </div>

    </div>
  )
}

export default FullRecipie