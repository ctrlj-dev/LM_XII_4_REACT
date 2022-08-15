import { Container, Grid } from "@mui/material";
import React from "react";
import { LoginForm } from "../components/login-form.component";

const containerStyles = {
    textAlign: "center",
    height: "98vh",
    display: "flex",
    alignItems: "center"
}

export const LoginPage: React.FC = () => {
    return (
        <Container maxWidth="xs" sx={containerStyles}>
            <Grid >
                <LoginForm title="Bienvenido" />
            </Grid>
        </Container>
    );
};
