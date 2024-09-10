import React from 'react'

const FavoritesItem = ({ item }) => {
  const { id, productName, salePrice, price, discount, image } = item
  return (
    <>
      <div className='flex flex-col w-52  relative group'>
        <div className='grey-bg h-52'>
          <img className=' w-28 h-44 ml-12 pt-12 pb-5' src={image} alt="" />
        </div>
        <div className='font-medium'>{productName}</div>
        <div className='flex'>
          <span className='red-text font-sans font-medium'>${salePrice}</span>
          {
            salePrice !== null ?
              <span className='ml-5 font-sans grey-text line-through'>${price}</span>
              : ''
          }
        </div>
        {
          discount !== null ?
            <div className='font-sans absolute general-color-red text-white w-12 text-center rounded-md text-xs w-14 h-5 left-4 top-3'>-{discount}%</div>
            : ''
        }
        <div className=' absolute right-2 top-2 p-1 '>
        </div>
        <div className='bg-black text-white text-center absolute bottom-12 w-52 h-8 pt-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out'>Add To Card</div>
      </div>
    </>
  )
}

export default FavoritesItem