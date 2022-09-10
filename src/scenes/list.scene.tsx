import React from "react";
import { ListComponents } from "../components/list.component";
import { AppLayout } from "../layout/app-layout";

export const ListPage: React.FC = () => {
    return (
        <AppLayout>
            <ListComponents />
        </AppLayout>
    );
};
