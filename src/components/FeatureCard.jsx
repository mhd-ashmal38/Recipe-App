import React from 'react'

function FeatureCard({ image, name, rating }) {
    return (
        <div>


            <div className='ml-6 max-md:py-5 overflow-hidden md:max-w-2xl'>
                <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="h-48 rounded w-full object-cover md:h-full md:w-48" src={image} alt="" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                        <p class="mb-3 font-semibold text-gray-700 dark:text-gray-400">Rating : {rating}</p>
                    </div>
                </a>
            </div>

            {/* object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg */}
        </div>
    )
}

export default FeatureCard