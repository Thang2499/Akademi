import React, { useState } from 'react'
import QuickView from '../img/Quick View.svg'
import Wishlist from '../img/Wishlist.svg'
const ExploreItems = ({item}) => {
  const {productName,price,image} = item
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
     
      <span className=' font-sans red-text'>${price}</span>
    </div>
 <div className=' absolute right-2 top-2 p-1 '>
    <img
          className={` rounded-3xl cursor-pointer ${
            isWishlistActive ? 'bg-cyan-400 filter-white' : 'bg-white'
          }`}
          src={Wishlist}
          alt="Wishlist"
          onClick={toggleWishlist}
        />
    <img className=' bg-white p-1 mt-1 rounded-2xl' src={QuickView} alt="" />
 </div>
    <div  className='bg-black text-white text-center absolute bottom-12 w-52 h-8 pt-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out'>Add To Card</div>
  </div>
  )
}

export default ExploreItems