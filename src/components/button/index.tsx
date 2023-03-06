import style from './index.module.css'

interface Props{
    name?:string,
    id?:string,
    value:any,
    type?:string

}
export function Button(props:Props){

    const getStyle = ():string=>{
        let stl = style.btnStyle+" "
        switch(props.type){
            case "primary":
                stl += style.btnStylePrimary;
                break;
            case "primaryBlack":
                stl += style.btnStylePrimaryBlack;
                break;
            case "secondary":
                stl += style.btnStyleSecondary;
                break;
            
        }

        return  stl;
    }

    return (
        <button
        className={getStyle()}
        name={props.name}
        id={props.id}
        >
            {props.value}
        </button>
    )
}