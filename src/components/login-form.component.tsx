import { Box, Button, css, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";


interface LoginForm {
    username: string;
    password: string;
}

interface Props {
    title: string
}

export const LoginForm: React.FC<Props> = (props) => {

    const { title } = props;

    const navigate = useNavigate();
    const [loginForm, setLoginForm] = React.useState<LoginForm>({ username: "", password: "" });
    const [error, setError] = React.useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (loginForm.username.toLowerCase() === "admin" && loginForm.password === "test") {
            navigate("/list");
        } else {
            setError(true)
        }
    };

    const handleChange = (field: keyof LoginForm) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginForm({ ...loginForm, [field]: e.target.value })
        setError(false);
    }

    return (
        <>
            <Typography component="h1" variant="h5" sx={{mb: 4}}>
               {title}
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Usuario"
                    name="username"
                    value={loginForm.username}
                    autoComplete="username"
                    onChange={handleChange('username')}
                    helperText={error && 'Pss....admin'}
                    autoFocus
                    error={error}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    label="Contraseña"
                    name="password"
                    type="password"
                    value={loginForm.password}
                    autoComplete="password"
                    onChange={handleChange('password')}
                    helperText={error && 'Pss....test'}
                    autoFocus
                    error={error}
                />
                <Button sx={{ mt: 2 }} variant="contained" type="submit">Login</Button>
            </Box>
        </>
    )
}