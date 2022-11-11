import React, { Component } from 'react';
import ProductCard from '../components/ProductCard';

export default class Carrinho extends Component {
  state = {
    cart: [],
  };

  componentDidMount() {
    this.getCartLocalStorage();
  }

  getCartLocalStorage = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    this.setState({
      cart,
    });
  };

  render() {
    const { cart } = this.state;
    return (
      <div>
        {
          !cart ? (
            <p
              data-testid="shopping-cart-empty-message"
            >
              Seu carrinho está vazio
            </p>)
            : (
              cart.map((item) => (
                <ProductCard
                  { ...item }
                  key={ item.id }
                />
              ))
            )
        }
      </div>

    );
  }
}
