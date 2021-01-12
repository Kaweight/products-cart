import React from 'react';
import ProductsCart from './components/ProductsCart/ProductsCart';
import products from './data/products';

function App() {
  return (
    <ProductsCart product={products[0]}/>
  );
}

export default App;
