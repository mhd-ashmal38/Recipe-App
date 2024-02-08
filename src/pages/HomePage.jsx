import React from 'react'
import Nav from '../components/Nav'
import Categories from '../sections/Categories'
import Featured from '../sections/Featured'
import Home from '../sections/Home'

function HomePage() {
    return (
        <div>
            <Home />
            <Featured />
            <Categories />

        </div>
    )
}

export default HomePage