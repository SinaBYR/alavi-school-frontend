import { useState } from 'react';
import classes from './Auth.module.css';

const Auth = props => {
    const [page, setPage] = useState('');
    return (
        <div className={classes.Auth}>
            <div className={classes.Wrapper}>
                
            </div>
        </div>
    )
}

export default Auth;