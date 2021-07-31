import react from 'react';
import {Link} from 'react-router-dom';
import classes from './Signup.module.css'

const Signup=()=>{
    return (
        <div className={classes.signupdiv}>
            <form className={classes.form}>
            <h1 className={classes.signup}>Sign up</h1>
            <Link className={classes.link} to ='/login'>Have an account?</Link>
            <input className={classes.inputsignup} type='text' placeholder='Username'/>
            <input className={classes.inputsignup}type='text' placeholder='Email'/>
            <input className={classes.inputsignup}type='text' placeholder='Password'/>
            <button className={classes.btnsignup}>Sign up</button>
            </form>
        </div>
    )
};
export default Signup;