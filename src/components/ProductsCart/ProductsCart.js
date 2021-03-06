/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './ProductsCart.scss';
import AddProductToCart from '../AddProductToCart/AddProductToCart';
import products from '../../data/products';

const ProductsCart = ({product}) => {
  return (
    <div className="component">
      <div className="boxes">
        <h3 className="title">Shopping Cart</h3>
        <div className="productBox">
          <div className="productGraphic">
            <img src="/images/x-img.png" />
            <img src={product.image} />
          </div>
          <div className="productInfo">
            <p>Product Name</p>
            <p>{product.name}</p>
          </div>
          <div className="productPrice">
            <p>Unit Price</p>
            <p>${product.price}</p>
          </div>
          <div className="productQty">
            <p>Qty</p>
            <AddProductToCart />
          </div>
          <div className="updateButton">
            <button>Update Shopping Cart</button>
          </div>
        </div>
      </div>
      <div className="boxes">
        <div className="btnCheckout1">
          <button>Proceed to checkout</button>
        </div>
        <div className="shipping">
          <p>SHIPPING</p>
          <p>$23.80</p>
        </div>
        <div className="orderBox">
          <div className="cartTotals">
            <p>CART TOTALS</p>
          </div>
          <div className="subtotal">
            <p>Subtotal</p>
            <p>${product.price}</p>
          </div>
          <div className="grandTotal">
            <p>Grand Total</p>
            <p>${product.price + 23.80}</p>
          </div>
          <div className="btnCheckout2">
            <button>Proceed to checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsCart;