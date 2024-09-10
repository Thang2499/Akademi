import React, { useState,useContext } from 'react'
import QuickView from '../img/Quick View.svg'
import Wishlist from '../img/Wishlist.svg'
import context from '../Context/context'
const BestSelling = ({ items }) => {
  const { productName, salePrice, price, image } = items
  const [isWishlistActive, setIsWishlistActive] = useState(false);
  
  const [quantity, setQuantity] = useState(1)
  const { productDetail, orderTemplate, setOrderTemplate } = useContext(context)


  const addToCart = (item) => {
      const product = {
          productid: item.id,
          name: item.productName,
          price: item.salePrice,
          quantity: quantity,
          image: item.image
      };
  
      setOrderTemplate(prevOrder => {
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

  const toggleWishlist = () => {
    setIsWishlistActive(!isWishlistActive);
  };
  return (
    <div className='flex flex-col w-68 ml-4 relative group'>
      <div className='grey-bg h-56 w-56'>
        <img className=' w-24 h-48 ml-16 pt-12 pb-5' src={image} alt="" />
      </div>
      <div className='font-medium'>{productName}</div>
      <div className='flex'>
        <span className='red-text font-sans font-medium'>${salePrice}</span>
        {price == "" ?"" :<span className='ml-5 font-sans grey-text line-through'>${price}</span> }
      </div>
      <img className='absolute bg-white right-2 top-10 p-1 rounded-2xl' src={QuickView} alt="" />
      <img
        className={` absolute bg-white right-2 top-1  rounded-xl  cursor-pointer ${isWishlistActive ? 'bg-teal-500 filter-white' : 'bg-white'
          }`}
        src={Wishlist}
        alt="Wishlist"
        onClick={toggleWishlist}
      />
      <button
      onClick={()=>addToCart(items)}
        className='bg-black text-white text-center absolute bottom-12 w-56 h-8 pt-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out'
      >
        Add to cart
      </button>
    </div>

  )
}

export default BestSelling