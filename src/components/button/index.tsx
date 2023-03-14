import style from './index.module.css'

interface Props{
    name?:string,
    id?:string,
    value:any,
    type?:'primary' | 'primaryBlack' | 'secondary'|'black'|'blank' | undefined,
    typeButtom?: 'submit' | 'reset' | 'button' | undefined;
    className?:string
    onClick?:Function

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
            case "black":
                stl += style.btnStyleBlack;
                break;
            case "blank":
                stl += style.btnStyleBlank;
                break;
        }

        return  stl;
    }

    return (
        <button
        className={getStyle()}
        name={props.name}
        id={props.id}
        onClick={()=> props.onClick? props.onClick() : null}
        type={props.typeButtom || "button"}
        >
            {props.value}
        </button>
    )
}