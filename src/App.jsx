import './App.css'
import Header from './Home/Header'
// import {products} from './data/products'
import productData from './data/products'
import context from './Context/context'
import { useState } from 'react'
import { Routes, Route, json } from 'react-router-dom';
import Body from './Home/Body'
import Footer from './Home/Footer'
import SignUp from './signup-login/SignUp'
import LogIn from './signup-login/LogIn'
import WishListPage from './componentProductList/WishListPage'
import CardProduct from './Card/CardProduct'
import ProductDetail from './componentProductList/ProductDetail'
import Checkout from './Card/Checkout'
function App() {
  const [product, setProduct] = useState([])
  const [favorites, setFavorites] = useState([])
  const [productDetail, setproductDetail] = useState([])


  const createOrderModel = () => {
    return {
      orderItems: [],
      total: 0,          
      userDetail: {
        name: "",        
        phone: "",      
        address: "",    
        email: ""      
      },
      Time: Date.now(),        
      status: "Pending"
    };
  }
  const [orderTemplate, setOrderTemplate] = useState(createOrderModel());

  localStorage.setItem("favorites", JSON.stringify(favorites))
  const toggleWishlist = (productId) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(productId)) {
        return prevFavorites.filter(id => id !== productId)
      } else {
        return [...prevFavorites, productId]
      }
    })
  };

  return (
    <>
      <context.Provider
        value={{  setProduct, favorites, setFavorites, toggleWishlist,productDetail,setproductDetail,orderTemplate,setOrderTemplate}}>
        <div className='font-serif'>
          <Header />
          <Routes>
            <Route path='/' element={<Body/>}></Route>
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/login' element={<LogIn/>} />
            <Route path='/wishlist' element={<WishListPage/>} />
            <Route path='/productDetail' element={<ProductDetail/>}/>
            <Route path='/card' element={<CardProduct/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
          <Footer />
        </div>
      </context.Provider>
    </>
  )
}

export default App
