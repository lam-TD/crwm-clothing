import React from "react";
import {
  CartItemContainer,
  CartItemImage,
  CartItemDeatails,
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item" />
    <CartItemDeatails>
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x ${price}
      </span>
    </CartItemDeatails>
  </CartItemContainer>
);

export default CartItem;
