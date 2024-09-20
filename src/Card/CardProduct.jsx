import React, { useContext, useState } from 'react';
import context from '../Context/context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import momo from '../img/momo.png'
const CardProduct = () => {
  const { orderTemplate, setOrderTemplate } = useContext(context);
  const { orderItems, total } = orderTemplate;
  const [formData, setFormData] = useState({
    firstName: '',
    companyName: '',
    streetAddress: '',
    apartment: '',
    city: '',
    phoneNumber: '',
    email: ''
  });
  const [errors, setErrors] = useState({}); 
  const [error, setError] = useState('');
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit =  (e) => {
    e.preventDefault();
    let formErrors = {};
    if (!formData.firstName) formErrors.firstName = 'First Name is required';
    if (!formData.streetAddress) formErrors.streetAddress = 'Street Address is required';
    if (!formData.city) formErrors.city = 'Town/City is required';
    if (!formData.phoneNumber) formErrors.phoneNumber = 'Phone Number is required';
    if (!formData.email) formErrors.email = 'Email Address is required';

    if (orderItems.length === 0) {
      toast.error('Giỏ hàng của bạn đang trống. Vui lòng thêm sản phẩm trước khi đặt hàng.');
      return;
    }
    if (Object.keys(formErrors).length === 0) {
      toast.success("Payment successful! Thank you for your order.");
      // setPaymentSuccess(true);
      const orderDetails = {
        orderItems,
        total,
        customerDetails: formData
      };
      localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
      setFormData({
        firstName: '',
        companyName: '',
        streetAddress: '',
        apartment: '',
        city: '',
        phoneNumber: '',
        email: ''
      });
      setOrderTemplate({
        orderItems: [],
        total: 0
      });
    } else {
      setErrors(formErrors);
    }
  };

  const handlePayment = async () => {
  try {
    const response = await axios.get('https://api.exchangeratesapi.io/v1/latest', {
      params: {
        access_key: '70c3de1f9a9e9d343d81e4043945d5bc', 
        symbols: 'USD,VND',
      },
    });

    const exchangeRate = response.data.rates.VND;
    const convertedAmount = total * exchangeRate; 
    const amountPayment = Math.floor(convertedAmount);
      const responsePayment = await axios.post('/payment', {
        amountPayment,
      });

      if (responsePayment.data && responsePayment.data.payUrl) {
        window.location.href = responsePayment.data.payUrl;
      } else {
        toast.error('Error initiating payment');
      }
    }catch (error) {
      console.error('Error occurred: ', error);
      toast.error('Payment failed');
    }
  };
  
  return (
    <div className='flex justify-between ml-32 mt-8 mb-12 scroll-smooth'>
      <div>
        <h1 className='text-3xl'>Billing Details</h1>
        <form onSubmit={handleSubmit}>
          <p className='text-sm grey-text mt-4'>First Name <span className='red-text'>*</span></p>
          <input
            className={`bg-grey w-96 h-10 ${errors.firstName && 'border-red-500'}`}
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          {errors.firstName && <p className='text-red-500'>{errors.firstName}</p>}
          <p className='text-sm grey-text mt-4'>Company Name</p>
          <input
            className='bg-grey w-96 h-10'
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
          />
          <p className='text-sm grey-text mt-4 '>Street Address <span className='red-text'>*</span></p>
          <input
            className={`bg-grey  w-96 h-10 `}
            type="text"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleInputChange}
          />
          {errors.streetAddress && <p className='text-red-500'>{errors.streetAddress}</p>}
          <p className='text-sm grey-text mt-4'>Apartment, floor, etc. (optional)</p>
          <input
            className='bg-grey w-96 h-10'
            type="text"
            name="apartment"
            value={formData.apartment}
            onChange={handleInputChange}
          />
          <p className='text-sm grey-text mt-4'>Town/City <span className='red-text'>*</span></p>
          <input
            className='bg-grey w-96 h-10'
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          />
          {errors.city && <p className='text-red-500'>{errors.city}</p>}
          <p className='text-sm grey-text mt-4'>Phone Number <span className='red-text'>*</span></p>
          <input
            className='bg-grey w-96 h-10'
            type="number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
          {errors.phoneNumber && <p className='text-red-500'>{errors.phoneNumber}</p>}
          <p className='text-sm grey-text mt-4'>Email Address <span className='red-text'>*</span></p>
          <input
            className='bg-grey w-96 h-10'
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <p className='text-red-500'>{errors.email}</p>}
          <button className='bg-red-600 text-white w-40 h-11 mt-4 rounded' type="submit">Place Order</button>
        </form>
        {/* {paymentSuccess && <p className='text-green-500 mt-4'>Payment successful! Thank you for your order.</p>} */}
      </div>
      <div className='ml-32 mr-28 mt-12 w-1/2'>
        {orderItems.length > 0 ? (
          orderItems.map((item, index) => (
            <div key={index} className='flex h-20 p-4'>
              <img src={item.image} alt={item.name} className='w-16' />
              <h2 className='text-sm mt-3 ml-4 w-44'>{item.name}</h2>
              <div className='ml-32'>
                <p className='text-center text-lg pt-1 w-8'> x{item.quantity}</p>
              </div>
              <p className='pt-2 ml-8'>${(item.quantity * item.price)}</p>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
        <div className='w-4/5 p-5'>
          <div className='flex justify-between mt-4'>
            <p>Subtotal</p>
            <p>${total}</p>
          </div>
          <hr className='mt-1 mb-2' />
          <div className='flex justify-between'>
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <hr className='mt-1 mb-2' />
          <div className='flex justify-between mb-2'>
            <p>Total</p>
            <p>${total}</p>
          </div>
        </div>
        <div>
          <div className='flex mb-8 ml-6'>
            <span>Phương thức thanh toán: </span>
      <img onClick={handlePayment}  className='w-8 ' src={momo} alt="" />
          </div>

    </div>
        <div className='ml-4'>
          <input className='border-2 py-2 px-4 rounded' placeholder='Coupon Code' type="text" />
          <button className='bg-red-600 text-white w-40 h-11 ml-3 rounded'>Apply Coupon</button>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
/>  
    </div>
  )
};

export default CardProduct;
