import classes from './Auth.module.css';
import { useEffect, useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Register from './Register/Register';
import Footer from '../../Footer/Footer';

const Auth = props => {

    return (
        <>
            <div className={classes.Auth}>
                <Switch>
                    <Route exact path="/school/auth">
                        <div className={classes.Wrapper}>
                            <Link to="/school/auth/login" className={classes.Login}>
                            ورود به پنل کابری
                            </Link>
                            <Link to="/school/auth/register" className={classes.Register}>
                                پیش ثبت نام
                            </Link>
                        </div>
                    </Route>
                    <Route path="/school/auth/register" component={Register}/>
                    {/* <Route path="/school/auth/login" component={}/> */}
                </Switch>
            </div>
            <Footer />
        </>        
    )
}

export default Auth;