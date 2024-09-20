import React, { useContext } from 'react';
import context from '../Context/context';
import { Link } from 'react-router-dom';
import trash from '../img/trash.svg'
const Checkout = () => {
    const { orderTemplate ,setOrderTemplate} = useContext(context);
    const { orderItems, total} = orderTemplate;

    const increaseQuantity = (index) => {
        const updatedOrderItems = [...orderItems];
        updatedOrderItems[index].quantity += 1;
        updatedOrderItems[index].subtotal = updatedOrderItems[index].quantity * updatedOrderItems[index].price;

        setOrderTemplate({
            ...orderTemplate,
            orderItems: updatedOrderItems,
            total: updatedOrderItems.reduce((acc, item) => acc + item.subtotal, 0),
        });
    };

    // Hàm giảm số lượng sản phẩm
    const decreaseQuantity = (index) => {
        const updatedOrderItems = [...orderItems];
        if (updatedOrderItems[index].quantity > 1) {
            updatedOrderItems[index].quantity -= 1;
            updatedOrderItems[index].subtotal = updatedOrderItems[index].quantity * updatedOrderItems[index].price;

            setOrderTemplate({
                ...orderTemplate,
                orderItems: updatedOrderItems,
                total: updatedOrderItems.reduce((acc, item) => acc + item.subtotal, 0),
            });
        }
    };
    // const delateItemsFromCheckout = (id) => {
    //     const updatedOrderItems = orderItems.filter(item => item.id !== id);
    //     setOrderTemplate({
    //         ...orderTemplate,
    //         orderItems: updatedOrderItems,
    //      total: updatedOrderItems.reduce((acc, item) => acc + item.subtotal, 0) 
    //     });
    // };
    return (
        <>
            <div className=' flex justify-between items-center  mr-28 ml-32 mt-12 h-20 shadow-md'>
                <div className='pl-4'>Product</div>
                <div>Price</div>
                <div>Quantity</div>
                <div className='pr-8'>Subtotal</div>
            </div>
            <div className='flex'>
                <div className=' ml-32 mr-28 mt-12 w-full '>
                    {orderItems.map((item, index) => (
                        <div key={index} className='flex mb-8 border h-20 p-4 shadow-md'>
                            <img src={item.image} alt={item.name} className='w-12' />
                            <h2 className='text-sm w-44 pt-3'>{item.name}</h2>
                            <img src={trash} className='w-6' alt="Trash icon" />
                            <p className='ml-40 text-center w-12 pt-2 '>${item.price}</p>
                            <div className='w-96 justify-center ml-44 flex'>

                            <button
                                    className='px-2 h-8 mt-1 bg-gray-300 '
                                    onClick={() => decreaseQuantity(index)}
                                    disabled={item.quantity === 1}
                                    >
                                    -
                                </button>
                            <p className=' text-center text-xl pt-1 w-8'> {item.quantity}</p>
                            <button
                                    className='px-2  h-8 mt-1 bg-gray-300'
                                    onClick={() => increaseQuantity(index)}
                                    >
                                    +
                                </button>
                                    </div>
                                <p className='ml-44 pt-2'>${(item.quantity * item.price).toFixed(2)}</p>
                        </div>
                    ))}
                </div>
                {/* Nhập thông tin người dùng */}
                {/* <div className='user-info'>
                <h2 className='text-xl'>Thông tin giao hàng:</h2>
                <p>Tên: {userDetail.name}</p>
                <p>Điện thoại: {userDetail.phone}</p>
                <p>Địa chỉ: {userDetail.address}</p>
                <p>Email: {userDetail.email}</p>
            </div> */}               
            </div>
            <div className='flex justify-between mr-32 ml-32 mt-16'>
                <Link to='/'><button className='border-2 p-2 px-5 rounded'>Return To Shop</button></Link>
                <button className='border-2 p-2 px-5 rounded'> Update Cart</button>
            </div>
            <div className='flex justify-between ml-32 mt-16 mb-24 w-10/12'>
                <div>
                    <input className='border-2 py-2 px-4 rounded' placeholder='Coupon Code' type="text" />
                    <button className='bg-red-600 text-white w-40 h-11 ml-3 rounded'>Apply Coupon</button>
                </div>
                <div className='w-5/12 border-2 p-5'>
                    <h1 className='text-xl mt-3'>Cart Total</h1>
                    <div className='flex justify-between mt-4'>
                        <p>Subtotal</p>
                        <p>${total}</p>
                    </div>
                    <hr className='mt-1 mb-2'/>
                    <div className='flex justify-between'>
                        <p>Shipping</p>
                        <p>Free</p>
                    </div>
                    <hr className='mt-1 mb-2'/>
                    <div className='flex justify-between mb-2'>
                        <p>Total</p>
                        <p>${total}</p>
                    </div>
                    <div className='text-center'>

                    <Link to='/card'><button className='bg-red-600 text-white w-48 h-12 rounded'>Procees to checkout</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;
