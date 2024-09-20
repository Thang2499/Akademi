import React, { useContext, useState, useEffect } from 'react'
import context from '../Context/context'
import { Link, useParams } from 'react-router-dom'
import productData from '../data/products'
const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1)
  const { productDetail, setOrderTemplate } = useContext(context)
  
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setProduct(productData.fetchProductById(id))
  }, [id]);
  if (!product) {
    return <div className='text-5xl text-center h-96 pt-44'>Product not found</div>;
  }
  
  console.log(product)
  // useEffect(() => {
  //     setSubtotal(product.salePrice * quantity);
  // }, [quantity, product.salePrice]);
  const addToCart = () => {
    const products = {
      productid: product.id,
      name: product.productName,
      price: product.salePrice,
      quantity: quantity,
      image: product.image
    };
    setOrderTemplate(prevOrder => {
      const existingProductIndex = prevOrder.orderItems.findIndex(item => item.productid === product.id);
      if (existingProductIndex !== -1) {
        const updatedOrderItems = [...prevOrder.orderItems];
        updatedOrderItems[existingProductIndex].quantity += quantity
        return {
          ...prevOrder,
          orderItems: updatedOrderItems,
          total: prevOrder.total + (product.price * quantity),
        };
      } else {
        return {
          ...prevOrder,
          orderItems: [...prevOrder.orderItems, products],
          total: prevOrder.total + (product.price * quantity),
        };
      }
    });
    // alert('Sản phẩm đã được thêm vào giỏ hàng!');
  };
  return (
    <div key={product.id} className='flex ml-32 mt-28 heigh-productDetail mb-12'>
      <div key={product.id} className='flex flex-col  '>
        {product.imageDetail.map(image => <img className='bg-grey w-32 h-32 p-2 mt-1 ' src={image} />)}
      </div>
      <div className='bg-grey ml-4 h-full w-1/2 '>
        <img className=' h-4/5 w-1/2 mt-24 ml-40 pb-12 ' src={product.image} alt="" />
      </div>
      <div className='ml-16'>
        <h1 className='text-xl font-bold'>{product.productName}</h1>
        <span className='text-xl red-text'>${product.salePrice}</span>
        {product.price == "" ? <span></span> :
          <span className='text-xl line-through ml-4'>${product.price}</span>}
        <p className='w-96 mt-8'>{product.description}</p>
        <hr className='mt-8' />
        <div className='flex justify-between mt-8'>
          <div className='flex border border h-8'>
            <button disabled={quantity === 1} onClick={() => setQuantity(quantity - 1)} className='w-8 text-3xl'>-</button>
            <input value={quantity} className='w-16 h-8 border border-x-2 text-center text-xl' type="text" />
            <button onClick={() => setQuantity(quantity + 1)} className='bg-red-500 hover:bg-red-700 w-8 text-3xl'>+</button>
          </div>
          <Link to="/checkout">
            <button onClick={addToCart} className='bg-red-500 hover:bg-red-700 text-white w-32 h-10'>
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </div>
    // <div>Detail : {product.productName}</div>
  )
}
export default ProductDetail