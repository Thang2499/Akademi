import React, { useContext, useEffect, useState } from 'react'
import context from '../Context/context'
import ExploreItems from '../componentChild/ExploreItems';
import productData from '../data/products'
const ExploreOurProducts = () => {
  const productsList = useContext(context);
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const exploreItems = productsList.product.filter(item => item.salePrice == null)
  //   setProducts(exploreItems)
  // }, [])


  return (
    <div className='ml-28 mt-20 width-cate border-t-2'>
      <div className='flex mt-8'>
        <div className='w-5 h-10 general-color-red rounded'></div>
        <p className='red-text ml-4 pt-2 font-semibold'>Our Products</p>
      </div>
      <div className='flex gap-x-10 '>
        <div className='font-semibold text-3xl mt-5'>Explore Our Products</div>
      </div>
      {
        <div className='grid grid-cols-4 gap-5 mt-8'>
          {
            productData.getProducts(8).map(item => <ExploreItems key={item.id} item={item}/>)
          }
        </div>
      }

    </div>
  )
}

export default ExploreOurProducts