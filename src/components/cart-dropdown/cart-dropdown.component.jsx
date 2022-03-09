import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { useNavigate } from "react-router-dom";

import {
  CartItemsContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartDropdownContainer,
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, dispatch }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(toggleCartHidden());
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>Cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>

      <CartDropdownButton onClick={handleClick} inverted>
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

// const mapStateToProps = (state) => ({
//   cartItems: selectCartItems(state),
// });

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
