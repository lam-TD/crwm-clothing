import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import SignIn from "../../components/sign-in/sign-in.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import "./sign-in.styles.scss";

const SignInPage = ({ currentUser }) => {
  return !currentUser ? (
    <div className="container">
      <SignIn />
    </div>
  ) : (
    <Navigate to="/" />
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(SignInPage);
