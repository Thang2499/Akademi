import './App.css'
import Flashsale from './Home/Flashsale'
import Header from './Home/Header'
import NavPage from './Home/NavPage'
import products from '../src/data/products.json'
import context from './Context/context'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Body from './Home/Body'
function App() {
  const [product, setProduct] = useState(products)
  return (
    <>
      <context.Provider
        value={{ product, setProduct }}>
        <div className='font-serif'>
          <Header />   
          <Routes>
            <Route path='/' element={<Body/>}></Route>
          </Routes>
        </div>
      </context.Provider>
    </>
  )
}

export default App
