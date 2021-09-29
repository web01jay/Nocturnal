import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import loaderImg from '../assets/images/loader.gif';

export const PublicRoutes = ({ component: Component, ...rest }) => (
    <>
        <Route {...rest} render={props => {
            return (
                <Suspense fallback={
                    <div id="loading">
                        <div className="loader-content position-relative">
                            <img src={loaderImg} className="loading-image" alt="" />
                        </div>
                    </div>}>
                    <Component {...props} />
                </Suspense>
            )
        }} />
    </>
)
export default PublicRoutes;