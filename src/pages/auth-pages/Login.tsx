// import { decrement, increment, reset } from "../../zustand-store/useCounterStore";
import Button from '@mui/material/Button';
import styles from "../../shared/styles/pages/login.module.scss"; 
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import z from 'zod';
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export function Login() {
    const navigate = useNavigate();

    const schema = z.object({
        username: z.string().min(1, "Login is required"),
        password: z.string().min(1, "Password is required")
    })

    type FormFields = z.infer<typeof schema>;

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormFields>({
        defaultValues: {
            username: '',
            password: ''
        },
        resolver: zodResolver(schema)
    })

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        const res = await new Promise((resolve) => {
            setTimeout(() => {
                return resolve(data);
            }, 3000)
        })
        if (res) {
            console.log(res);
            navigate("/home");
        }
    }
    
    return (
        // <>
        //     <button onClick={increment}>+</button>
        //     <button onClick={decrement}>-</button>
        //     <button onClick={reset}>reset</button>
        //     <span>Login</span>
        // </>

        <div className={styles.login_wrapper}>
            <div className={styles.login_content}>
                <div className={styles.login_title}>Project ONE</div>
            </div>
            <form className={styles.login_form} onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    {...register('username')} 
                    size='small' 
                    sx={{ width: '90%'}} 
                    id="outlined-basic" 
                    label="Login" 
                    variant="outlined"
                    error={!!errors.username}
                    helperText={errors.username?.message}
                />
                <TextField
                    {...register('password')}
                    size='small' 
                    sx={{ width: '90%'}} 
                    id="outlined-password-input" 
                    label="Password" 
                    type="password" 
                    autoComplete="current-password"
                    error={!!errors.password}
                    helperText={errors.password?.message}
                />
                <Button type='submit' variant="outlined" sx={{ width: '90%'}} disabled={isSubmitting}>
                    {isSubmitting ? 'Loading' : 'Enter'}
                </Button>
                <div className={styles.register_container}>
                    <span className={styles.dont_have_account}>Dont have account?</span>
                    <Link to="/register" className={`${styles.register} ${isSubmitting ? styles.disable : ''}`}>Register</Link>
                </div>
            </form>
        </div>
    )
}