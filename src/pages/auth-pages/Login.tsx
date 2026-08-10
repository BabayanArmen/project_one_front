// import { decrement, increment, reset } from "../../zustand-store/useCounterStore";
import loginStyles from "../../shared/styles/pages/login.module.scss"; 

export function Login() {
    
    return (
        // <>
        //     <button onClick={increment}>+</button>
        //     <button onClick={decrement}>-</button>
        //     <button onClick={reset}>reset</button>
        //     <span>Login</span>
        // </>

        <div className={loginStyles.login_page_wrapper}>
            <div className={loginStyles.login_content}>
                <div className={loginStyles.login_title}>Project ONE</div>
            </div>
            <div className={loginStyles.login_form}>login form</div>
        </div>
    )
}