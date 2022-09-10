import { IMembers } from "../models/IMembers";
import { API } from "./API";

/**
 * Returns members list from github
 * @param org string - Defines the github org.,
 **/

export const getMembers = (org) =>
    new Promise<{ Members: IMembers[] }>((resolve, reject) => {
        API()
            .get(`orgs/${org}/members`)
            .then((res) => {
                resolve(res.data);
            })
            .catch((error) => {
                reject(error);
            });
    });