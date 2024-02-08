import React from 'react'

const API_URL = "https://dummyjson.com/recipes";

function EachCategory() {
  return (
    <div>

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img class="rounded-t-lg" src="" alt="" />
              <div class="p-5">
                  <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">name</h5>
                  <p className="font-semibold">Rating :</p>
                
                <a >
                <button type="button" class="my-5 inline-flex items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-4 py-2 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Explore Now
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </button>
                </a>
                
              </div>
            </div>

    </div>
  )
}

export default EachCategory