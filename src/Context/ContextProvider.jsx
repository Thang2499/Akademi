// import React, { useState } from 'react';
// import context from './context';
// import products from '../data/products.json';

// export const ContextProvider = ({ children }) => {
//   const [product, setProduct] = useState(products);
//   const [favorites, setFavorites] = useState([]);

//   const toggleWishlist = (productId) => {
//     setFavorites((prevFavorites) => {
//       if (prevFavorites.includes(productId)) {
//         return prevFavorites.filter(id => id !== productId);
//       } else {
//         return [...prevFavorites, productId];
//       }
//     });
//   };

//   return (
//     <context.Provider value={{ product, setProduct, favorites, setFavorites, toggleWishlist }}>
//       {children}
//     </context.Provider>
//   );
// };
