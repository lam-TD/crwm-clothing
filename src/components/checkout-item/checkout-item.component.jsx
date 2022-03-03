import React from "react";
import { connect } from "react-redux";
import {
  addItem,
  removeItemFromCart,
  clearItemFromCart,
} from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div onClick={() => removeItem(cartItem)} className="arrow">
          &#10094;
        </div>
        {quantity}
        <div onClick={() => addItem(cartItem)} className="arrow">
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div onClick={() => clearItem(cartItem)} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  removeItem: (item) => dispatch(removeItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
