/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './ProductsCart.scss';

function ProductsCart() {
  return (
    <div className="component">
      <div className="boxes">
        <h3 className="title">Shopping Cart</h3>
        <div className="productBox">
          <div className="productGraphic">
            <img src="/images/x-img.png" />
            <img src="/images/headphones.png" />
          </div>
          <div className="productInfo">
            <p>Product Name</p>
            <p>Headphones</p>
          </div>
          <div className="productPrice">
            <p>Unit Price</p>
            <p>$11.90</p>
          </div>
          <div className="productQty">
            <p>Qty</p>
            <div>
              -2+
            </div>
          </div>
          <div className="updateButton">
            <button>Update Shopping</button>
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
            <p>$23.80</p>
          </div>
          <div className="grandTotal">
            <p>Grand Total</p>
            <p>$23.80</p>
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