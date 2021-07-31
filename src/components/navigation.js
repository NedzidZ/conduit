import react from 'react';
import classes from './navigation.module.css';
import {Link} from 'react-router-dom';

const Navigation=()=>{
    return (<div className={classes.navigation}>
        <div className={classes.conduit}>
        <Link className={classes.conduitlink} to='/'>conduit</Link>
        </div>
        <div className={classes.home}>
        <Link  className={classes.homelink}to='/'>Home</Link>
        </div>
        <div className={classes.login}>
        <Link className={classes.loginlink} to='/login'>Sign in</Link>
        </div>
        <div className={classes.signup}>
        <Link className={classes.signuplink} to='/signup'>Sign up</Link>
        </div>
    </div>)
};
export default Navigation;