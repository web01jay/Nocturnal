import React, { Component } from 'react';
import { withRouter, Link } from "react-router-dom";
import { language } from '../lib/store/global/action';
import { connect } from 'react-redux'
import * as languageActions from '../lib/store/intl/actions';
import SignIn from '../Pages/SignIn/index'

import logo from '../assets/images/Logo.png';

class Header extends Component<any, any>{
  constructor(props: any) {
    super(props);
    this.state = {
      language: (localStorage.getItem('language') !== undefined && localStorage.getItem('language') !== '') ? localStorage.getItem('language') : 'en',
      showNavbar: false,
    }
  }

  toggleNavbar = () => {
    // console.log("object called");
    if (this.state.showNavbar === false) {
      this.setState({
        showNavbar: true,
      });
    } else {
      this.setState({
        showNavbar: false,
      });
    }
  };

  handleLanguageChange = (lang: any) => {
    this.props.dispatch(languageActions.updateLanguage(lang));
    localStorage.setItem('language', lang);
    this.setState({ language: lang });
    this.props.dispatch(language(lang));
  }

  componentDidMount() {
    window.scroll(0,0)
    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > 8) {
        document.getElementsByClassName("custom-header")[0].classList.add('sticky');
      }
      else {
        document.getElementsByClassName("custom-header")[0].classList.remove('sticky');
      }
    })
    setTimeout(() => {
      let pageContent:any = document.getElementsByClassName("page-content")[0];
      // console.log(pageContent.classList)
      if(pageContent.classList.contains('home-page')){
        document.getElementsByClassName('custom-header')[0].classList.add('position-absolute')
      }
    },500)
    console.log('Header Component DID MOUNT!')
  }
  
  componentDidUpdate(prevProps: any, prevState: any) {
    window.scroll(0,0)
    console.log('Header Component DID UPDATE!')
  }
  componentWillUnmount() {
    console.log('Header Component WILL UNMOUNT!')
  }

  render() {
    return (
      <>
        <header id="header" className="custom-header">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-sticky px-0 border-0">
              <div className="navbar-brand">
                <Link to="/" className="d-inline-block">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
              <div className="d-lg-none">
                <button
                  type="button"
                  id="hamburger-1"
                  onClick={this.toggleNavbar}
                  className={
                    (this.state.showNavbar === true
                      ? " open "
                      : " collapsed ") + " navbar-toggle hamburger"
                  }
                  // data-bs-toggle="collapse"
                  // data-bs-target="#navbar-navigation"
                  // area-control="navbar-navigation"
                  // aria-label="Toggle navigation"
                >
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                </button>
              </div>
              <div
                // className="navbar-collapse collapse"
                className={
                  (this.state.showNavbar === true ? "show " : "hide ") +
                  "navbar-collapse collapse"
                }
                // className="navbar-collapse collapse"
                id="navbar-navigation"
              >
                <ul className=" p-0 nav navbar-nav align-items-baseline ms-auto mt-2 mt-lg-0 align-items-md-baseline align-items-lg-center">
                  <li className="nav-item float-right mx-lg-1 mx-xl-3  my-2 my-lg-0">
                    <Link
                      to="/about"
                      className="navbar-nav-link font-medium"
                    >
                      About us
                    </Link>
                  </li>

                  <li className="nav-item float-right mx-lg-1 mx-xl-3  my-2 my-lg-0 dropdown">
                  {/* <a class="nav-link dropdown-toggle" href="#" > */}
                    <Link
                      to="/programs"
                      className="navbar-nav-link font-medium dropdown-toggle"
                      id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                    >
                      Programs
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><Link to="/program-detail" className="dropdown-item">Weight Loss Program</Link></li>
                      <li><Link to="/program-detail" className="dropdown-item">Weight Gain Program</Link></li>
                      <li><Link to="/program-detail" className="dropdown-item">Health Management Program</Link></li>
                      <li><Link to="/programs" className="dropdown-item-link">View More</Link></li>
                    </ul>

                  </li>

                  <li className="nav-item float-right mx-lg-1 mx-xl-3  my-2 my-lg-0">
                    <Link
                      to="/success-stories"
                      className="navbar-nav-link font-medium"
                    >
                      Success Stories
                    </Link>
                  </li>

                  <li className="nav-item float-right mx-lg-1 mx-xl-3  my-2 my-lg-0">
                    <a href=" "
                      onClick={(e) => { e.preventDefault() }}
                      className="navbar-nav-link font-medium"
                    >
                      How we work
                    </a>
                  </li>

                  <li className="nav-item float-right mx-lg-1 mx-xl-3  my-2 my-lg-0">
                    <a href=" "
                      onClick={(e) => { e.preventDefault() }}
                      className="navbar-nav-link font-medium"
                    >
                      Meet Komal
                    </a>
                  </li>

                  <li className="nav-item float-right mx-lg-1 mx-xl-3  my-2 my-lg-0 dropdown">
                    <Link
                      to="/recipies"
                      className="navbar-nav-link font-medium dropdown-toggle"
                      id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                    >
                      Recipes
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><Link to="/recipies/detail" className="dropdown-item">Strawberry Smoothie</Link></li>
                      <li><Link to="/recipies/detail" className="dropdown-item">Yogurt With Mixed Berries</Link></li>
                      <li><Link to="/recipies/detail" className="dropdown-item">Oatmeal</Link></li>
                      <li><Link to="/recipies" className="dropdown-item-link">View More</Link></li>
                    </ul>
                  </li>

                  <li className="nav-item float-right mx-lg-1 mx-xl-3  my-2 my-lg-0 dropdown">
                    <Link
                      to="/blog"
                      className="navbar-nav-link font-medium dropdown-toggle"
                      id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                    >
                      Health Reads
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><Link to="/blog-detail" className="dropdown-item">Why Selfcare</Link></li>
                      <li><Link to="/blog-detail" className="dropdown-item">Healthy Life</Link></li>
                      <li><Link to="/blog-detail" className="dropdown-item">Healthy Gluten Free Cookie</Link></li>
                      <li><Link to="/blog" className="dropdown-item-link">View More</Link></li>
                    </ul>
                  </li>

                  <li className="nav-item float-right mx-lg-1 mx-xl-3  my-2 my-lg-0">
                    <a href=" "
                      onClick={(e) => { e.preventDefault() }}
                      className="navbar-nav-link font-medium"
                      data-bs-toggle="modal" 
                      data-bs-target="#exampleModal"
                    >
                      Login
                    </a>
                  </li>

                </ul>
              </div>
            </nav>
          </div>
        </header>
        <SignIn />
      </>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    currentUser: state.auth.currentUser,
  }
}
export default connect(mapStateToProps)(withRouter(Header));
