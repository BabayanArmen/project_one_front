import { useNavigate } from "react-router-dom";
import styles from "../../shared/styles/pages/register.module.scss";
import Button from '@mui/material/Button';
import z from "zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import { zodResolver } from "@hookform/resolvers/zod";

export function Register() {
    const navigate = useNavigate();

    const schema = z.object({
        username: z.string().min(1, "User Name is required"),
        email: z.email("Enter valid email").min(1, "Email is required"),
        password: z.string().min(1, "Password is required"),
        confirmPassword: z.string().min(1, "Confirm Passwrod is required"),
        isOrganization: z.boolean().optional(),
        organizationName: z.string().optional()
    })
    .refine(
       (data) => !(data.isOrganization && (!data.organizationName || data.organizationName.trim() == "" || data.organizationName == undefined)),
       {
        message: "Organization name is required",
        path: ["organizationName"]
       }  
    ).refine(
        (data) => data.password == data.confirmPassword,
        {
            message: "Password do not match",
            path: ["confirmPassword"]
        }
    )

    type FormFields = z.infer<typeof schema>;

    const { register, handleSubmit, formState: { errors, isSubmitting }, watch, } = useForm<FormFields>({
        defaultValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            isOrganization: false,
            organizationName: ''
        },
        resolver: zodResolver(schema)
    })

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        const res = await new Promise((resolve) => {
            setTimeout(() => {
                resolve(data)
            }, 3000)
        })
        if (res) {
            console.log(res);
            navigate("/")
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <Button variant="outlined" sx={{color: 'white', ml: 2, mt: 1}} onClick={() => navigate("/")} >Back</Button>
            </div>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <TextField {...register("username")} error={!!errors.username} helperText={errors.username?.message} id="outlined-basic" label="Username" variant="outlined" size="small" sx={{width: '90%'}} />
                <TextField {...register("email")} error={!!errors.email} helperText={errors.email?.message} id="outlined-basic" label="Email" variant="outlined" size="small" sx={{width: '90%'}}/>
                <TextField {...register("password")} error={!!errors.password} helperText={errors.password?.message} id="outlined-basic" label="Password" variant="outlined" size="small" sx={{width: '90%'}}/>
                <TextField {...register("confirmPassword")} error={!!errors.confirmPassword} helperText={errors.confirmPassword?.message} id="outlined-basic" label="Confirm Password" variant="outlined" size="small" sx={{width: '90%'}}/>
                <Box sx={{width: '90%', textAlign: 'start'}}>
                    <FormControlLabel control={<Checkbox defaultChecked={false} {...register("isOrganization")} />} label="Is Organization" />
                </Box>
                {watch('isOrganization') && (
                    <TextField {...register("organizationName")} error={!!errors.organizationName} helperText={errors.organizationName?.message} id="outlined-basic" label="Organization Name" variant="outlined" size="small" sx={{width: '90%'}}/>
                )}
                <Button type="submit" variant="outlined" sx={{width: '90%', color: '#bbcbd4', borderColor: '#507890'}} disabled={isSubmitting}>
                    {isSubmitting ? "Loading" : "Enter"}
                </Button>
            </form>
        </div>
    )
}