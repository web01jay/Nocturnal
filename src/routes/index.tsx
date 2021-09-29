// import libs
import React, { lazy } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

// import components
import PrivateRoute from './Private';
import PublicRoute from './Public';
import AuthRoute from './Auth';
import Layout from "../components/Layout";
import Header from "../global/Header";
import Footer from "../global/Footer";
import UserAuth from './UserAuth';

const Home = lazy(() =>
    import("../Pages/Home/index"));


const Routes = (props: any) => (
    <Router>
        <Header {...props} />
        <main className="main_page">
            <Layout>
                <Switch>
                    {/* Auth
                    
                    <AuthRoute path={`${process.env.PUBLIC_URL}/login`}
                        component={Login} />

                    <AuthRoute path={`${process.env.PUBLIC_URL}/reset-password/:email?/:token?`}
                        component={Resetpassword} />

                    <AuthRoute path={`${process.env.PUBLIC_URL}/reset-password/:email?/:token?`}
                        component={Resetpassword} />

                    <AuthRoute path={`${process.env.PUBLIC_URL}/forgot`}
                        component={Forgot} />
                    
                    */}

                    {/* Public */}
                    <PublicRoute exact path={`${process.env.PUBLIC_URL}/`}
                        component={Home} />

                    {/*<PublicRoute exact path={`${process.env.PUBLIC_URL}/verify/:email?/:activation_hash?`}
                        component={Home} />

                    <PublicRoute exact path={`${process.env.PUBLIC_URL}/home`}
                        component={Home} />

                    <PublicRoute exact path={`${process.env.PUBLIC_URL}/about`}
                        component={AboutUs} />

                    <PublicRoute exact path={`${process.env.PUBLIC_URL}/blog`}
                        component={Blog} />

                    <PublicRoute exact path={`${process.env.PUBLIC_URL}/blog-detail`}
                        component={BlogDetail} />

                    <PublicRoute exact path={`${process.env.PUBLIC_URL}/success-stories`}
                        component={SuccessStories} />

                    <PublicRoute exact path={`${process.env.PUBLIC_URL}/programs`}
                        component={Programs} />

                    <PublicRoute exact path={`${process.env.PUBLIC_URL}/program-detail`}
                        component={ProgramDetail} />

                    <PublicRoute exact path={`${process.env.PUBLIC_URL}/recipies`}
                        component={Recipies} />

                    <PublicRoute exact path={`${process.env.PUBLIC_URL}/recipies/detail`}
                        component={RecipieDetail} />

                    <PublicRoute exact path={`${process.env.PUBLIC_URL}/privacy`}
                        component={Privacy} />

                    <PublicRoute exact path={`${process.env.PUBLIC_URL}/terms`}
                        component={Terms} />

                    <PublicRoute exact path={`${process.env.PUBLIC_URL}/contact-us`}
                        component={ContactUS} />
                    
                    */}

                    {/* User 
                    <PrivateRoute path={`${process.env.PUBLIC_URL}/profile`}
                        component={UserAuth(Profile)} />
                    */}
                </Switch>
            </Layout>
        </main>
        <Footer  {...props} />
    </Router>
)

export default Routes
