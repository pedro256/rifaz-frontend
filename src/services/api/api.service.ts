import axios, { AxiosHeaders } from 'axios';
import {parseCookies} from 'nookies';

export function GetApiClient(context?:any){

    const { 'nextauth.token': token } = parseCookies(context)

    const api = axios.create({
        baseURL: process.env.BACKEND_URL
    })
    if(token){
        api.defaults.headers.post['Authorization'] = `Bearer ${token}`;
    }
    return api;
}
