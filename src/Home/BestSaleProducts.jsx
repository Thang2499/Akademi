import React, { useContext } from 'react'
import context from '../Context/context'
import BestSelling from '../componentChild/BestSelling';
import bag from '../img/bestselling/bag.png'
import gammaxx from '../img/bestselling/gammaxx.png'
import Gucci from '../img/bestselling/Gucci.png'
import table from '../img/bestselling/table.png'
import loudspeaker from '../img/bestselling/Frame694.png'
const BestSaleProducts = () => {
  const products = useContext(context);
  const filteredProducts = products.product.filter(item => item.discount === null && item.salePrice !== null);
  console.log(filteredProducts)
  const images = {
    "bag": bag,
    "gammaxx": gammaxx,
    "Gucci": Gucci,
    "table": table
  }
  return (
    <div className='ml-28 mt-20 width-cate'>
      <div className='flex'>
        <div className='w-5 h-10 general-color-red rounded'></div>
        <p className='red-text ml-4 pt-2 font-semibold'>This Month</p>
      </div>
      <div className='flex gap-x-10 justify-between'>
        <div className='font-semibold text-3xl mt-5'>Best Selling Products</div>

        <div className='float-right pl-44 ml-96 pt-2'>
          <div className='text-center general-color-red text-white w-44 pt-2 pb-2 rounded hover-bt'>View All</div>
        </div>
      </div>
      <div className='flex justify-between mt-12'>
        {
          filteredProducts.map(items => <BestSelling key={items.id} items={{ ...items, image: images[items.image] }} />)
        }
      </div>
      <div className=" mt-16 flex  px-12 py-12 bg-black text-white">
    <div className=" flex flex-col w-6/12 ">
        <div className="text-green-400 text-lg mb-4">Categories</div>
        <div className="text-5xl font-bold mb-8">Enhance Your Music Experience</div>
        <div className="flex space-x-8 mb-8">
            <div className="text-center">
                <span className="block text-4xl font-bold">23</span>
                <span className="text-sm">Hours</span>
            </div>
            <div className="text-center">
                <span className="block text-4xl font-bold">05</span>
                <span className="text-sm">Days</span>
            </div>
            <div className="text-center">
                <span className="block text-4xl font-bold">59</span>
                <span className="text-sm">Minutes</span>
            </div>
            <div className="text-center">
                <span className="block text-4xl font-bold">35</span>
                <span className="text-sm">Seconds</span>
            </div>
</div>
        <button className="bg-green-500 hover:bg-green-600 text-black font-bold py-4 px-8 rounded-lg w-40">Buy Now!</button>
        </div>
<div className=" ">
        <img src={loudspeaker} alt=""/>
    </div>
</div>
    </div>
  )
}

export default BestSaleProducts