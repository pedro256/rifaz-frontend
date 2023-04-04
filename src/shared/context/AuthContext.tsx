import React, { createContext, ReactNode, useEffect, useState } from "react";
import { setCookie ,parseCookies } from "nookies";
import { StatusCode } from 'status-code-enum'
import {GetApiClient} from "@/services/api/api.service";
import env from "@/environment/env";

type Props = {
    children?: ReactNode
}
type ISignIn = {
    username: string,
    password: string
}
type ISignInResponse = {
    ok:boolean,
    message?:string
}
type IAuthContext = {
    isAutheticated: boolean,
    signIn: (data: ISignIn) => Promise<ISignInResponse>
}


export const AuthContext = createContext<IAuthContext>({} as IAuthContext);


export function AuthContextProvider({ children }: Props) {

    const [isAutheticated,setIsAuthenticated] = useState(false);



    useEffect(() => {
        const { 'nextauth.token': token } = parseCookies()
        if (token) {
            setIsAuthenticated(true);
        }
      }, [])

    async function signIn({ username, password }: ISignIn) :Promise<ISignInResponse>{

        try {
            let ok=false;
            let message="";

            const response = await fetch(env.backendUrl+"/auth", {
                method: 'POST',
                body: JSON.stringify({
                    username,
                    password
                }),
                headers: { "Content-Type": "application/json" }
            });

            if (response.status == StatusCode.SuccessOK) {
                const {token}= await response.json();
                setCookie(undefined, 'nextauth.token', token, {
                    maxAge: 3600, // 1 hour
                })
                ok = true;
                setIsAuthenticated(true);
                GetApiClient().defaults.headers['Authorization'] = `Bearer ${token}`;

            }else if (response.status == StatusCode.ClientErrorForbidden) {
                message = "Usuario não autenticado !"
            }else{
                message = "Algo deu errado !"
            }

            return {
                ok,
                message
            }
            
        } catch (error) {
            return {
                ok:false,
                description:error
            } as ISignInResponse;
        }


    }

    return (
        <AuthContext.Provider value={{ isAutheticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}