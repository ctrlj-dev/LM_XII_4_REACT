import { Container, Grid } from '@mui/material';
import React from 'react';

interface Props {
    children?: React.ReactNode;
}

const containerStyles = {
    textAlign: "center",
    minHeight: "98vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}

export const AppLayout: React.FC<Props> = props => {
    const { children } = props
    return (
        <Container maxWidth={"lg"} sx={containerStyles}>
            <Grid >
                {children}
            </Grid>
        </Container>
    );
};
