import React from 'react'

function Home() {
    return (
        <div className='md:flex justify-between items-center p-10 gap-5'>

            <div className=''>
                <h2 className='py-5 text-[45px] md:text-[45px] font-bold'>Welcome to <span className='text-red-600 '>Eatsy</span></h2>
                <p className='text-justify'>Explore a world of culinary delights! Discover mouth-watering recipes and step into the kitchen with our curated collection of dishes.</p>
                <button type="button" class="my-5 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-4 py-2 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Explore Now</button>

            </div>
                
            <div className='mt-5 w-full lg:w-4/5'>
            <img className='w-full rounded-2xl' src='https://images.unsplash.com/photo-1556911261-6bd341186b2f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" />
            </div>

        </div>
    )
}

export default Home