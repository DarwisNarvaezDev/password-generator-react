import React, { useRef, useState } from 'react'
import classes from './form.module.css'

const SignInPage = () => {

    const [inputTypeState, setInputTypeState] = useState('password');

    const passwordRef = useRef(null);

    const visible = process.env.PUBLIC_URL + '/resources/visible.png'

    const passwordGenerator = () => {

        let length = 12 ,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;

    }

    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
            <form>
                <label htmlFor='Password'>Password: </label>
                <input ref={passwordRef} type={inputTypeState}></input>
                <img 
                src={visible} 
                alt="Visible Password" 
                onMouseOver={() => {
                    setInputTypeState('text');
                }} 
                onMouseOut={() => {
                    setInputTypeState('password');
                }}></img>
                <button type='button' onClick={() => {
                    passwordRef.current.value = passwordGenerator();
                }}>Fill Password</button>
            </form>
            </div>
        </div>
    )
}

export default SignInPage
