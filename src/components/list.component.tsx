import { Alert, AlertTitle, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";
import { AppLayout } from "../layout/app-layout";
import { IMembers } from "../models/IMembers";
import { getMembers } from "../services/getMembers";

//test

export const ListComponents: React.FC = () => {
    const [members, setMembers] = React.useState<IMembers[]>([]);
    const [org, setOrg] = React.useState<string>('lemoncode')
    const [loading, setLoading] = React.useState<boolean>(true);
    const [apiError, setApiError] = React.useState<boolean>(false);

    const getOrgsMembers = (org) => {
        getMembers(org).then((data) => setMembers(data)).catch((error) => {
            setApiError(true);
        }).finally(() => { setLoading(false) })
    }

    React.useEffect(() => {
        getOrgsMembers(org)
    }, []);

    console.log(loading)


    return (
        <>
            {apiError &&
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        This is an error alert — <strong>check it out!</strong>
                    </Alert>
                </Stack>
            }
            <AppLayout>
                <h2>Hello from List page</h2>
                {loading ? <Typography>Cargando</Typography> :
                    <div className="list-user-list-container">
                        <span className="list-header">Avatar</span>
                        <span className="list-header">Id</span>
                        <span className="list-header">Name</span>
                        {
                            members.map((member) => (
                                <div key={member.id}>
                                    <img src={member.avatar_url} />
                                    <span>{member.id}</span>
                                    <Link to={`/detail/${member.login}`}>{member.login}</Link>
                                </div>
                            ))
                        }
                    </div>
                }
                <Link to="/detail">Navigate to detail page</Link>
            </AppLayout>
        </>
    );
};

