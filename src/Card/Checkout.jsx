import React, { useContext } from 'react';
import context from '../Context/context';

const Checkout = () => {
    const { orderTemplate } = useContext(context);
    const { orderItems, total, userDetail } = orderTemplate;

    return (
        <div className='checkout-container'>
            <h1 className='text-2xl font-bold'>Thanh toán</h1>
            <div className='checkout-details'>
                {orderItems.map((item, index) => (
                    <div key={index} className='checkout-item'>
                        <h2>{item.name}</h2>
                        <img src={item.image} alt={item.name} className='product-image' />
                        <p>Số lượng: {item.quantity}</p>
                        <p>Giá: ${item.price}</p>
                    </div>
                ))}

                <h3>Tổng cộng: ${total}</h3>
            </div>
            {/* Nhập thông tin người dùng */}
            {/* <div className='user-info'>
                <h2 className='text-xl'>Thông tin giao hàng:</h2>
                <p>Tên: {userDetail.name}</p>
                <p>Điện thoại: {userDetail.phone}</p>
                <p>Địa chỉ: {userDetail.address}</p>
                <p>Email: {userDetail.email}</p>
            </div> */}

            <button className='checkout-button'>Xác nhận đơn hàng</button>
        </div>
    );
};

export default Checkout;
