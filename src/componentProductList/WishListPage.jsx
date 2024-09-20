import React, { useContext } from 'react'
import context from '../Context/context'
import FavoritesItem from '../componentChild/FavoritesItem'

const WishListPage = () => {
  const { favorites,setFavorites } = useContext(context)
  const delateItemFromwishList = (item)=>{{
     const deleteItemWishLish = favorites.filter(id => id.id !== item.id )
     setFavorites(deleteItemWishLish)
  }}
  return (
    <>
      {favorites.length > 0 ?
      <div className=' mb-20'>

      <div className='flex justify-between ml-24 mr-20 mt-16 '>
        <span className=' mt-2 text-xl font-medium'>Wishlist({favorites.length})</span>
        <button className='border-2 px-6 py-2'>Move All To Bag</button>
      </div>
        <div className='grid grid-cols-5 gap-y-10 mt-12 ml-24 ' >
          {favorites.map(item => <div className='' key={item.id}> <FavoritesItem item={item} delateItemFromwishList={delateItemFromwishList} /></div>)}
        </div>
      </div>
        :
        <div className='text-7xl text-center mt-32 mb-32'>No Favorites Found</div>
      }
    </>
  )
}

export default WishListPage