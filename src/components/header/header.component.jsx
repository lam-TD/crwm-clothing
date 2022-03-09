import React from "react";
import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../assets/nobugs.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv,
} from "./header.styles";

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer className="header">
      <LogoContainer to="/home">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">Shop</OptionLink>
        <OptionLink to="/contact">Contact</OptionLink>

        {currentUser ? (
          <OptionDiv onClick={() => auth.signOut()}>Sign Out</OptionDiv>
        ) : (
          <OptionLink to="/signin">Sign In</OptionLink>
        )}

        {currentUser ? (
          <OptionDiv onClick={() => auth.signOut()}>
            {currentUser.displayName}
          </OptionDiv>
        ) : null}

        <OptionDiv className="option">
          <CartIcon />
        </OptionDiv>

        {hidden ? null : <CartDropdown />}
      </OptionsContainer>
    </HeaderContainer>
  );
};

// const mapStateToProps = (state) => ({
//   currentUser: selectCurrentUser(state),
//   hidden: selectCartHidden(state),
// });

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
