import { NextComponentType, NextPageContext } from "next";
import { AppProps } from "next/app";

interface IMainAppComponent{
    Component:NextComponentType<NextPageContext, any, any>,
    pageProps:any,
    test?:string
}


export default function MainAppComponent(props:any){

    //{/* <Component {...pageProps} /> */}
    //<Login/>
    return(
        <>
        <h1>{props.test}</h1>
        <h1>Teste</h1>
        </>
    )

    

}


export async  function getServerSideProps(){

  return {
    props:{
        test:"Objetivo ..."
    }
    
  };
}
