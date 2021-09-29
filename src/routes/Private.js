import React, { Suspense } from 'react';
import { Route, Redirect } from 'react-router-dom';
import loaderImg from '../assets/images/loader.gif';

{/* <div id="loading">
                        <div className="loader-content position-relative text-center">
                            <img src={loaderImg} className="loading-image" alt="" />
                        </div>
                    </div> */}
export const PrivateRoutes = ({ component: Component, ...rest }) => (
    <>
        <Route {...rest} render={props => (
            localStorage.getItem('access_token')
                ?
                <Suspense fallback={
                    <div class="d-flex justify-content-center">
                        
                            <img src={loaderImg} className="loading-image" alt="loading" />
                        
                    </div>
                }>
                    <Component {...props} />
                </Suspense>
                : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )} />
    </>
)
export default PrivateRoutes;