import React, { lazy, Suspense } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Header from '../components/header.js';

  const home = lazy(() => import('../App.js'))
  const about = lazy(() => import('../pages/about'))

const index = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Suspense fallback="Loading...">
                        <Header />
                        <Route path="/" component={home} exact="true" />
                        <Route path="/about" component={about} exact="true" />
                    </Suspense>
                </Switch>    
            </Router>   
        </>
    )
}

export default index
