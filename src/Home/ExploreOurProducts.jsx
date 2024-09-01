import React, { useContext, useEffect, useState } from 'react'
import context from '../Context/context'
import ExploreItems from '../componentChild/ExploreItems';
import camera from '../img/ExploreProduct/camera.png'
import CarKids from '../img/ExploreProduct/CarKids.png'
import cleanser from '../img/ExploreProduct/cleanser.png'
import controller from '../img/ExploreProduct/controller.png'
import dogfood from '../img/ExploreProduct/dogfood.png'
import jacket from '../img/ExploreProduct/jacket.png'
import laptop from '../img/ExploreProduct/laptop.png'
import soccershoes from '../img/ExploreProduct/soccershoes.png'
const ExploreOurProducts = () => {
  const productsList = useContext(context);
  const [products, setProducts] = useState([]);

  const images = {
    "dogfood": dogfood,
    "camera": camera,
    "laptop": laptop,
    "cleanser": cleanser,
    "CarKids": CarKids,
    "soccershoes": soccershoes,
    "controller": controller,
    "jacket": jacket
  }
  useEffect(() => {
    const exploreItems = productsList.product.filter(item => item.salePrice == null)
    setProducts(exploreItems)
  }, [])


  return (
    <div className='ml-28 mt-20 width-cate border-t-2 '>
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
            products.map(item => <ExploreItems key={item.id} item={{...item, image: images[item.image]}}/>)
          }
        </div>
      }

    </div>
  )
}

export default ExploreOurProducts