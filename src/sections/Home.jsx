import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {

    const navigate = useNavigate()

    const handleNavigate = () => {

        navigate('/recipes')
    }

    return (
        <div className='home flex justify-center items-center h-screen '>
            <div className='max-w-4xl mx-auto px-6 py-12 rounded-lg bg-white shadow-xl'>
                <div className='md:flex'>
                    <div className='md:w-1/2'>
                        <img className='w-full h-auto rounded-lg' src='https://images.unsplash.com/photo-1556911261-6bd341186b2f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Delicious Food" />
                    </div>
                    <div className='md:w-1/2 md:pl-10'>
                        <h2 className='flex justify-center text-4xl md:text-5xl text-gray-900 font-bold'>Welcome to</h2>
                        <h2 className='flex justify-center text-4xl md:text-5xl text-red-600 font-bold mb-4'>Eatsy</h2>
                        <p className='lg:text-lg text-justify text-gray-800 mb-6'>Explore a world of culinary delights! Discover mouth-watering recipes and step into the kitchen with our curated collection of dishes.</p>
                        <div className='flex justify-center'><button onClick={handleNavigate} type="button" className="text-white bg-red-600 border border-transparent focus:outline-none hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-full text-lg px-8 py-3 shadow-md">Explore Now</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
