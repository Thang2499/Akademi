import React, { useContext, useState } from 'react'
import context from '../Context/context'
import { Link } from 'react-router-dom'
import trash from '../img/trash.svg'
const FavoritesItem = ({ item ,delateItemFromwishList}) => {
  const { id, productName, salePrice, price, discount, image } = item
  const [quantity, setQuantity] = useState(1)
 const {setOrderTemplate,setproductDetail,favorites } = useContext(context)
//  const getProductDetail = (item) =>{
//   setproductDetail(item)
//  }
 const addToCart = (item) => {
  const product = {
      productid: item.id,
      name: item.productName,
      price: item.salePrice,
      quantity: quantity,
      image: item.image,
      // subtotal:price * quantity
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
const handleDelete = () =>{
  delateItemFromwishList(item)
}
  return (
    <>
      <div className='flex flex-col w-52  relative group'>
        <div className='grey-bg h-52 relative'>
          <img onClick={()=>handleDelete(item.id)} src={trash} className='w-6 absolute right-2 top-2' alt="" />
          <img className=' w-28 h-44 ml-12 pt-12 pb-5' src={image} alt="" />
        </div>
        <Link to={`/productDetail/${id}`}><div className='font-medium'>{productName}</div></Link>
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
            <div className='font-sans absolute general-color-red text-white text-center rounded-md text-xs w-12 h-5 left-4 top-3'>-{discount}%</div>
            : ''
        }
        <div className=' absolute right-2 top-2 p-1 '>
        </div>
        <button
      className='bg-black text-white text-center absolute bottom-12 w-52 h-8 pt-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out'
 onClick={()=>addToCart(item.id)}
      >
        Add to cart
        </button>
      </div>
    </>
  )
}

export default FavoritesItem