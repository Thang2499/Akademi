import React, {useState} from 'react'
import QuickView from '../img/Quick View.svg'
import Wishlist from '../img/Wishlist.svg'
const BestSelling = ({items}) => {
    const {productName,salePrice,price,image} = items
    const [isWishlistActive, setIsWishlistActive] = useState(false);
    const toggleWishlist = () => {
      setIsWishlistActive(!isWishlistActive);
    };
  return (
    <div className='flex flex-col w-68 ml-4 relative'>
    <div className='grey-bg h-56 w-56'>
      <img className=' w-24 h-48 ml-16 pt-12 pb-5' src={image} alt="" />
    </div>
    <div className='font-medium'>{productName}</div>
    <div className='flex'>
      <span className='red-text font-sans font-medium'>${salePrice}</span>
      <span className='ml-5 font-sans grey-text line-through'>${price}</span>
    </div>
    <img className='absolute bg-white right-2 top-10 p-1 rounded-2xl' src={QuickView} alt="" />
    <img
          className={` absolute bg-white right-2 top-1  rounded-xl  cursor-pointer ${
            isWishlistActive ? 'bg-cyan-400 filter-white' : 'bg-white'
          }`}
          src={Wishlist}
          alt="Wishlist"
          onClick={toggleWishlist}
        />
  </div>

  )
}

export default BestSelling