// import { decrement, increment, reset } from "../../zustand-store/useCounterStore";
import Button from '@mui/material/Button';
import loginStyles from "../../shared/styles/pages/login.module.scss"; 
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';

export function Login() {
    const [showLogin, setShowLogin] = useState<boolean>(false);

    const navigate = useNavigate();

    const onLogin = () => {
        // some api call logic
        navigate("/home");
    }
    
    return (
        // <>
        //     <button onClick={increment}>+</button>
        //     <button onClick={decrement}>-</button>
        //     <button onClick={reset}>reset</button>
        //     <span>Login</span>
        // </>

        <div className={loginStyles.login_page_wrapper}>
            <div className={loginStyles.login_content}>
                <div className={loginStyles.login_title}>
                    Project ONE
                    {!showLogin && <Button variant="contained" size="small" onClick={() => setShowLogin(true)}>Enter</Button>}
                </div>
            </div>
            {
                showLogin && 
                (
                    <div className={loginStyles.login_form}>
                        <TextField size='small' sx={{ width: '90%'}} id="outlined-basic" label="Login" variant="outlined" />
                        <TextField size='small' sx={{ width: '90%'}} id="outlined-password-input" label="Password" type="password" autoComplete="current-password" />
                        <Button variant="outlined" sx={{ width: '90%'}} onClick={onLogin}>Login</Button>
                        <div className={loginStyles.register_container}>
                            <span className={loginStyles.dont_have_account}>Dont have account?</span>
                            <Link to="/register" className={loginStyles.register}>Register</Link>
                        </div>
                    </div>
                ) 
            }
        </div>
    )
}