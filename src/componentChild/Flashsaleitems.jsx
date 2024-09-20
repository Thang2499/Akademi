import React, { useContext,useEffect } from 'react'
import '../App.css'
import QuickView from '../img/Quick View.svg'
import Wishlist from '../img/Wishlist.svg'
import { useState } from 'react'
import context from '../Context/context'
import { Link } from 'react-router-dom'
const Flashsaleitems = ({ item }) => {
  const { id, productName, salePrice, price, discount, image } = item
  const [isWishlistActive, setIsWishlistActive] = useState(false);
  const { favorites, toggleWishlist, setFavorites } = useContext(context)

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isFavorited = storedFavorites.some((favItem) => favItem.id === id);
    if (isFavorited) {
      setIsWishlistActive(true);
    }
  }, [id]);

  const addToWishList = (item) => {
    setIsWishlistActive(!isWishlistActive);
    toggleWishlist(item)
  }

  const removeFromWishList = (id) => {
    setIsWishlistActive(!isWishlistActive);
    const updatedFavorites = favorites.filter(i => i.id !== id);
    setFavorites(updatedFavorites);
  }

 const [quantity, setQuantity] = useState(1)
 const {orderTemplate,setOrderTemplate } = useContext(context)

 const addToCart = (item) => {
     const product = {
         productid: item.id,
         name: item.productName,
         price: item.salePrice,
         quantity: quantity,
         image: item.image
     };
 
     setOrderTemplate(prevOrder => {
      console.log("SetOrder ")
         const existingProductIndex = prevOrder.orderItems.findIndex(item => item.productid === product.productid);
         if (existingProductIndex !== -1) {  
             const updatedOrderItems = [...prevOrder.orderItems];
             updatedOrderItems[existingProductIndex].quantity += quantity;
             return {
                 ...prevOrder,
                 orderItems: updatedOrderItems,
                 total: prevOrder.total + (product.price * quantity)
             };
         } else {
             return {
                 ...prevOrder,
                 orderItems: [...prevOrder.orderItems, product],
                 total: prevOrder.total + (product.price * quantity)
             };
         }
     });
     // alert('Sản phẩm đã được thêm vào giỏ hàng!');
   
 };
  return (
    <div className='flex flex-col w-52 ml-8 relative group'>
      <div className='grey-bg h-52'>
        <img className=' w-28 h-44 ml-12 pt-12 pb-5' src={image} alt="" />
      </div>
     <Link to={`/productDetail/${id}`}> <div className='font-medium' >{productName}</div></Link>
      <div className='flex'>
        {salePrice === null ? "":<span className='red-text font-sans font-medium'>${salePrice}</span>}
        {price === null ? "":<span className='ml-5 font-sans grey-text line-through'>${price}</span>}
      </div>
      <div className='font-sans absolute general-color-red text-white w-12 text-center rounded-md text-xs w-14 h-5 left-4 top-3'>-{discount}%</div>
      <img
        className={` absolute right-2 top-1 rounded-xl  cursor-pointer ${isWishlistActive || favorites.includes(id) ? '!bg-cyan-400 filter-white' : 'bg-white'}`}
        src={Wishlist}
        alt="Wishlist"
        onClick={() => isWishlistActive ? removeFromWishList(id) : addToWishList(item)}
      />

      <img className='absolute bg-white right-2 top-10 p-1 rounded-2xl' src={QuickView} alt="" />
      <button
      className='bg-black text-white text-center absolute bottom-12 w-52 h-8 pt-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out'
 onClick={()=>addToCart(item)}
      >
        Add to cart
        </button> 
    </div>

  )
}

export default Flashsaleitems