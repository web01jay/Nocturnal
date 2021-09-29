import React, { Component } from "react";
import { connect } from "react-redux"
import { getUserUsingToken } from '../lib/apis/auth';

let userAuth = function (ComposedComponent) {
  class UserAuth extends Component {

    async componentWillMount() {
      if (this.props.isAuthenticated !== true && localStorage.getItem('access_token')) {
        await this.GetTokenUser();
      } else {
        this.CheckRole();
      }
    }

    async GetTokenUser() {
      this.props.getUserUsingToken({}).then((response) => {
        this.CheckRole();
      })
        .catch((error, statusCode, message, e) => {
          this.props.history.push(`${process.env.PUBLIC_URL}`);
        });
    }

    async CheckRole() {
      this.props.history.push(`${process.env.PUBLIC_URL}`);
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => {
    return {
      currentUser: state.auth.currentUser,
      isAuthenticated: state.auth.isAuthenticated
    }
  }

  return connect(mapStateToProps, { getUserUsingToken })(UserAuth);
}

export default userAuth;
