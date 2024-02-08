import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Nav from './components/Nav'
import HomePage from './pages/HomePage'
import FullRecipie from './pages/FullRecipie'
import RecipeDetail from './components/RecipeDetail'
import EachCategory from './components/EachCategory'

function App() {


  return (
    <>
      <Nav/>

        <div className=''>

          <BrowserRouter>

            <Routes>
              <Route path='/' element={<HomePage/>} />
              <Route path='/recipes' element={<FullRecipie/>} />
              <Route path="/recipe/:id" element={<RecipeDetail/>} />
              <Route path='/recipe/:cuisine' element={<EachCategory/>}/>
            </Routes>

          </BrowserRouter>

        </div>

      <Footer/>
    </>
  )
}

export default App
