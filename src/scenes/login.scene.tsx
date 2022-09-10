import React from "react";
import { LoginForm } from "../components/login-form.component";
import { AppLayout } from "../layout/app-layout";

export const LoginPage: React.FC = () => {
    return (
        <AppLayout>
            <LoginForm title="Bienvenido" />
        </AppLayout>
    );
};
