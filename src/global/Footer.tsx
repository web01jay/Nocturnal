import React, { Component } from 'react';
import { withRouter, Link } from "react-router-dom";
import { connect } from 'react-redux';

import logo from '../assets/images/Logo.png';

import fbIcon from '../assets/icons/facebook.svg'
import twIcon from '../assets/icons/twitter.svg'
import gpIcon from '../assets/icons/google.svg'
import igIcon from '../assets/icons/instagram.svg'

class Footer extends Component<any, any>{
	constructor(props: any) {
		super(props);
		this.state = {
			language: localStorage.getItem('language'),
		}
	}
	componentWillMount() {
		console.log('Footer Component WILL MOUNT!')
	}
	componentDidMount() {
		console.log('Footer Component DID MOUNT!')
	}
	componentWillReceiveProps(newProps: any) {
		console.log('Footer Component WILL RECIEVE PROPS!')
	}
	shouldComponentUpdate(newProps: any, newState: any) {
		return true;
	}
	componentWillUpdate(nextProps: any, nextState: any) {
		console.log('Footer Component WILL UPDATE!');
	}
	componentDidUpdate(prevProps: any, prevState: any) {
		console.log('Footer Component DID UPDATE!')
	}
	componentWillUnmount() {
		console.log('Footer Component WILL UNMOUNT!')
	}
	render() {
		return (
			<>
				<footer className="custom-footer">
					<div className="container">

						<div className="footer-logo-section text-center my-3">
							<span className="">
								<Link to="/">
									<img src={logo} alt="logo" />
								</Link>
							</span>
						</div>

						<div className="footer-data py-lg-4 py-3">
							<div className="row">

								<div className="d-none d-xl-block col-xl-1"></div>
								<div className="col-sm-6 col-lg-3 col-xl-2">
									<div className="block-content text-center text-sm-start mt-3 mt-lg-0">
										<p className="font-weight-semi-bold">
											About Studio
										</p>
										<Link to="/about" className="text-grey d-block">
											About
										</Link>
										<Link to="/success-stories" className="text-grey d-block">
											Succcess Stories
										</Link>
										<a href=" " onClick={(e) => { e.preventDefault() }} className="text-grey d-block">
											How We Work
										</a>
										<a href=" " onClick={(e) => { e.preventDefault() }} className="text-grey d-block">
											Meet Komal
										</a>
									</div>
								</div>

								<div className="col-sm-6 col-lg-3 col-xl-2">
									<div className="block-content text-center text-sm-start mt-3 mt-lg-0">
										<p className="font-weight-semi-bold d-none d-lg-block">
											&nbsp;
										</p>
										<Link to="/recipies" className="text-grey d-block">
											Recipes
										</Link>
										<Link to="/contact-us" className="text-grey d-block">
											Contact Us
										</Link>
										<a href=" " onClick={(e) => { e.preventDefault() }} className="text-grey d-block">
											FAQ
										</a>
									</div>
								</div>

								<div className="col-sm-6 col-lg-3 col-xl-2">
									<div className="block-content text-center text-sm-start mt-3 mt-lg-0">
										<p className="font-weight-semi-bold">
											Programs
										</p>
										<Link to="/program-detail" className="text-grey d-block">
											Weight Loss
										</Link>
										<Link to="/program-detail" className="text-grey d-block">
											Weight Gain
										</Link>
										<Link to="/program-detail" className="text-grey d-block">
											Health Management
										</Link>
									</div>
								</div>

								<div className="col-sm-6 col-lg-3 col-xl-2">
									<div className="block-content text-center text-sm-start mt-3 mt-lg-0">
										<p className="font-weight-semi-bold">
											Healthy Reads
										</p>
										<Link to="/blog-detail" className="text-grey d-block">
											Diet
										</Link>
										<Link to="/blog-detail" className="text-grey d-block">
											Health
										</Link>
										<Link to="/blog-detail" className="text-grey d-block">
											Inspiration
										</Link>
									</div>
								</div>

								<div className="col-xl-2">
									<div className="d-block d-md-flex d-xl-block align-items-center justify-content-center text-center text-xl-start">
										<p className="font-weight-semi-bold mb-2 mb-md-0 mb-xl-3 me-0 me-md-2 me-xl-0">
											Follow Us on
										</p>
										<div className="social-link d-flex align-items-center justify-content-center justify-content-md-start">
											<a className="me-2 d-block" href=" " onClick={(e) => { e.preventDefault() }}>
												<img src={igIcon} alt="ig icon" />
											</a>
											<a className="me-2 d-block" href=" " onClick={(e) => { e.preventDefault() }}>
												<img src={fbIcon} alt="fb icon" />
											</a>
											<a className="me-2 d-block" href=" " onClick={(e) => { e.preventDefault() }}>
												<img src={twIcon} alt="tw icon" />
											</a>
											<a className="me-2 d-block" href=" " onClick={(e) => { e.preventDefault() }}>
												<img src={gpIcon} alt="gp icon" />
											</a>
										</div>
									</div>
								</div>
								<div className="d-none d-xl-block col-xl-1"></div>
							</div>
						</div>
					</div>

					<div className="all-rights-section bg-red py-2">
						<div className="container">
							<div className="d-md-flex align-items-center justify-content-center">
								<p className="text-white mb-md-0 text-center text-md-start">
									All Rights Reserved &copy; Diet Studion 2021.
								</p>
								<p className="ms-0 ms-md-2 mb-md-0 text-center text-md-start">
									<Link to="/privacy" className="text-white">
										Privacy Policy
									</Link>
								</p>
								<p className="ms-0 ms-md-2 mb-md-0 text-center text-md-start">
									<Link to="/terms" className="text-white">
										Terms
									</Link>
								</p>
							</div>
						</div>
					</div>

				</footer>
			</>
		)
	}
}

const mapStateToProps = (state: any) => {
	return {
		currentUser: state.auth.currentUser,
	}
}

export default connect(mapStateToProps)(withRouter(Footer));

