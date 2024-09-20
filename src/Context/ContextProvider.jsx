import React, { useState } from 'react';
import context from './context';

export const ContextProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([])
    const [productDetail, setproductDetail] = useState([])
    // const createOrderModel = () => {
    //   return {
    //     orderItems: [],
    //     total: 0,          
    //     userDetail: {
    //       name: "",        
    //       phone: "",      
    //       address: "",    
    //       email: ""      
    //     },
    //     Time: Date.now(),        
    //     status: "Pending"
    //   };
    // }
    const [orderTemplate, setOrderTemplate] = useState({
      orderItems: [],
      total: 0,          
      userDetail: {
        name: "",        
        phone: "",      
        address: "",    
        email: ""      
      },
      Time: Date.now(),        
      status: "Pending"
    });
  
    localStorage.setItem("favorites", JSON.stringify(favorites))
    const toggleWishlist = (productId) => {
      setFavorites(prevFavorites => {
        if (prevFavorites.includes(productId)) {
          return prevFavorites.filter(id => id !== productId)
        } else {
          return [...prevFavorites, productId]
        }
      })
    };

  return (
    <context.Provider  value={{favorites, setFavorites, toggleWishlist,productDetail,setproductDetail,orderTemplate,setOrderTemplate}}>
      {children}
    </context.Provider>
  );
};
