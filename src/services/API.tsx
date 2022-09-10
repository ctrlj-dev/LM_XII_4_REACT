import axios from "axios";

//const BASEURL = process.env.BASEAPI;

const BASEURL = "https://api.github.com/"

export const API = () => {
  return axios.create({
    baseURL: BASEURL,
   });
};

