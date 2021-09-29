import React, { Suspense } from 'react';
import { Route, Redirect } from 'react-router-dom';
import loaderImg from '../assets/images/loader.gif';

export const AuthRoutes = ({ component: Component, ...rest }) => (
    <>
        <Route {...rest} render={props => (
            (localStorage.getItem('access_token') === null || localStorage.getItem('access_token') === undefined || localStorage.getItem('access_token') === '')
                ?
                <Suspense fallback={
                    <div class="d-flex justify-content-center">                        
                        <img src={loaderImg} className="loading-image" alt="loading" />
                    </div>}>
                    <Component {...props} />
                </Suspense>
                : <Redirect to={{ pathname: '/' }} />
        )} />
    </>
)
export default AuthRoutes;