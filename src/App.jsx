import './App.css'
import Header from './Home/Header'
import { Routes, Route } from 'react-router-dom';
import Body from './Home/Body'
import Footer from './Home/Footer'
import SignUp from './signup-login/SignUp'
import LogIn from './signup-login/LogIn'
import WishListPage from './componentProductList/WishListPage'
import CardProduct from './Card/CardProduct'
import ProductDetail from './componentProductList/ProductDetail'
import Checkout from './Card/Checkout'
import ErrorPage from './Home/ErrorPage';
import { ContextProvider } from './Context/ContextProvider';
import ScrollToTop from './hook/ScrollToTop';
function App() {
 
  return (
    <>
      <ContextProvider>
          <ScrollToTop/>
        <div className='font-serif'>
          <Header />
          <Routes>
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/login' element={<LogIn/>} />
            <Route path='/wishlist' element={<WishListPage/>} />
            <Route path='/productDetail/:id' element={<ProductDetail/>}/>
            
            <Route path='/card' element={<CardProduct/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/:rest' element={<ErrorPage/>}/>
            <Route path='/' element={<Body/>} exact></Route>
          </Routes>
          <Footer />
        </div>
      </ContextProvider>
    </>
  )
}

export default App
