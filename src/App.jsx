import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Nav from './components/Nav'
import HomePage from './pages/HomePage'
import FullRecipie from './pages/FullRecipie'
import RecipeDetail from './components/RecipeDetail'

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
            </Routes>

          </BrowserRouter>

        </div>

      <Footer/>
    </>
  )
}

export default App
