import React, { useContext, useState } from 'react'
import context from '../Context/context'
import { Link } from 'react-router-dom'

const ProductDetail = () => {
    const [quantity, setQuantity] = useState(1)
    const { productDetail, orderTemplate, setOrderTemplate } = useContext(context)
 
    const addToCart = () => {
        const product = {
            productid: productDetail.id,
            name: productDetail.productName,
            price: productDetail.salePrice,
            quantity: quantity,
            image: productDetail.image
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
    

    console.log('check', productDetail)
    return (
        <div className='flex ml-32 mt-28 heigh-productDetail mb-12'>
            <div className='flex flex-col  '>
                {productDetail.imageDetail.map(image => <img className='bg-grey w-32 h-32 p-2 mt-1 ' src={image} />)}
            </div>
            <div className='bg-grey ml-4 h-full w-1/2 '>
                <img className=' h-4/5 w-1/2 mt-24 ml-40 pb-12 ' src={productDetail.image} alt="" />
            </div>
            <div className='ml-16'>
                <h1 className='text-xl font-bold'>{productDetail.productName}</h1>
                <span className='text-xl red-text'>${productDetail.salePrice}</span>
                <span className='text-xl line-through ml-4'>${productDetail.price}</span>
                <p className='w-96 mt-8'>{productDetail.description}</p>
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
    )
}

export default ProductDetail