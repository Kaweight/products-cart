import React from 'react';
import './AddProductToCart.scss';
import products from '../../data/products';

class AddProductToCart extends React.Component {
  state = {
    avalibleProducts: 8,
    shoppingCart: 1,
  }

  handleRemoveFromCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart - 1,
    })
  }

  handleAddFromCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart + 1,
    })
  }

  render() {
    const {shoppingCart, avalibleProducts} = this.state

    return (
      <div className="quantinity">
        <button 
        disabled={shoppingCart ? false : true}
        onClick={this.handleRemoveFromCart}
        >-</button>
        <span
        style={shoppingCart === 0 ? { opacity: 0.3 } : {}}
        > {shoppingCart} </span>
        <button
        disabled={shoppingCart === avalibleProducts ? true : false}
        onClick={this.handleAddFromCart}
        >+</button>
        <img src="/images/edit-img.png" />
      </div>
    );
  }
}

export default AddProductToCart;