import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';

import logo from '../../img/logo.jpg';
import { logoutUser } from '../../actions/authActions';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: '',
      currentLink: ''
    };
  };

  onLogoutClick(e) {
    e.preventDefault();
    this.onChangeLink("");
    this.props.logoutUser(this.props.history);
  };

  onChangeLink(name) {
    this.setState({ currentLink: name });
  };

  profile() {
    const { user } = this.props.auth;
    this.props.history.push(`/profile/${user.id}`);
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
          <Link
            to={`/profile/${user.id}`}
            className={classnames("nav-link font-italic",
              this.state.currentLink === 'profile' ? 'active' : null
            )}
            onClick={() => this.onChangeLink("profile")}>
            Profile
          </Link>
        </li>
        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
          <Link
            to="/addDeal"
            className={classnames("nav-link font-italic",
              this.state.currentLink === 'addDeal' ? 'active' : null
            )}
            onClick={() => this.onChangeLink("addDeal")}>
            Add Deal
          </Link>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        {/* <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
          <Link
            to="/login"
            className={classnames("nav-link font-italic",
              this.state.currentLink === 'login' ? 'active' : null
            )}
            onClick={() => this.onChangeLink("login")}>
            Login
          </Link>
        </li> */}
      </ul>
    );

    const getStarted = (
      <Link to="/register" className="btn btn-primary">
        Get Started
      </Link>
    );

    const logout = (
      <Link to="/" onClick={this.onLogoutClick.bind(this)} className="btn btn-primary">
        Logout
      </Link>
    );

    return (
      <nav className="navbar navbar-expand-sm navbar-light btn-light sticky-top">
        <div className="container">
          <Link to="/" onClick={() => this.onChangeLink("")}>
            <img src={logo} alt="logo" className="logo" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item nav-link">
                {isAuthenticated ? authLinks : guestLinks}
              </li>
            </ul>
            <ul className="navbar-nav text-right">
              <li className="nav-item text-left" data-toggle="collapse" data-target=".navbar-collapse.show">
                <Link
                  to="/new-form"
                  className={classnames("nav-link",
                    this.state.currentLink === 'forms' ? 'active' : null
                  )}
                  onClick={() => this.onChangeLink("forms")}>
                  Forms
                </Link>
              </li>

              <li className="nav-item text-left" data-toggle="collapse" data-target=".navbar-collapse.show">
                <Link
                  to="/templates"
                  className={classnames("nav-link",
                    this.state.currentLink === 'templates' ? 'active' : null
                  )}
                  onClick={() => this.onChangeLink("templates")}>
                  Templates
                </Link>
              </li>
              
              <li className="nav-item text-left" data-toggle="collapse" data-target=".navbar-collapse.show">
                <Link
                  to="/howItWorks"
                  className={classnames("nav-link",
                    this.state.currentLink === 'howItWorks' ? 'active' : null
                  )}
                  onClick={() => this.onChangeLink("howItWorks")}>
                  How it works
                </Link>
              </li>



              {/* <li className="nav-item text-left" data-toggle="collapse" data-target=".navbar-collapse.show">
                <Link
                  to="/membership"
                  className={classnames("nav-link",
                    this.state.currentLink === 'membership' ? 'active' : null
                  )}
                  onClick={() => this.onChangeLink("membership")}>
                  Membership
                </Link>
              </li> */}
              <li className="nav-item text-left" data-toggle="collapse" data-target=".navbar-collapse.show">
                <Link
                  to="/feedback"
                  className={classnames("nav-link",
                    this.state.currentLink === 'feedback' ? 'active' : null
                  )}
                  onClick={() => this.onChangeLink("feedback")}>
                  Feedback
                </Link>
              </li>
              <li className="nav-item text-left" data-toggle="collapse" data-target=".navbar-collapse.show">
                <Link
                  to="/contact-us"
                  className={classnames("nav-link",
                    this.state.currentLink === 'contact-us' ? 'active' : null
                  )}
                  onClick={() => this.onChangeLink("contact-us")}>
                  Contact
                </Link>
              </li>
              <li className="text-left" data-toggle="collapse" data-target=".navbar-collapse.show">
                {isAuthenticated ? logout : getStarted}
              </li>
            </ul>
          </div>

        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default withRouter(connect(mapStateToProps, { logoutUser })(Navbar));

