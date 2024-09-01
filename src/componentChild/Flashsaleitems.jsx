import React from 'react'
import '../App.css'
import QuickView from '../img/Quick View.svg'
import Wishlist from '../img/Wishlist.svg'
import { useState } from 'react'
const Flashsaleitems = ({ items }) => {
  const { productName, image, salePrice, price, discount } = items
  const [isWishlistActive, setIsWishlistActive] = useState(false);

  const toggleWishlist = () => {
    setIsWishlistActive(!isWishlistActive);
  };

  return (
    <div className='flex flex-col w-52 ml-8 relative group'>
      <div className='grey-bg h-52'>
        <img className=' w-28 h-44 ml-12 pt-12 pb-5' src={image} alt="" />
      </div>
      <div className='font-medium'>{productName}</div>
      <div className='flex'>
        <span className='red-text font-sans font-medium'>${salePrice}</span>
        <span className='ml-5 font-sans grey-text line-through'>${price}</span>
      </div>
      <div className='font-sans absolute general-color-red text-white w-12 text-center rounded-md text-xs w-14 h-5 left-4 top-3'>-{discount}%</div>
      <img
          className={` absolute bg-white right-2 top-1 rounded-xl  cursor-pointer ${
            isWishlistActive ? 'bg-cyan-400 filter-white' : 'bg-white'
          }`}
          src={Wishlist}
          alt="Wishlist"
          onClick={toggleWishlist}
        />
      <img className='absolute bg-white right-2 top-10 p-1 rounded-2xl' src={QuickView} alt="" />
      <div  className='bg-black text-white text-center absolute bottom-12 w-52 h-8 pt-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out'>Add To Card</div>
    </div>

  )
}

export default Flashsaleitems