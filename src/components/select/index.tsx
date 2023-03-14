
import style from './index.module.css';

export interface IOption{
    id?:string
    value:string,
    label:string
}
interface Props{
    name?:string,
    id?:string,
    defaultText?:string,
    defaultValue?:string,
    value:any,
    setValue:any,
    options:Array<IOption>

}
export function Select(props:Props){

    return (
        <select
        className={style.selectStyle}
        name={props.name}
        id={props.id}
        value={props.value}
        onChange={(e)=>{props.setValue(e.target.value)}}
        >
            <option value={props.defaultValue || "0"} label={props.defaultText || "Selecione Algum Item !"} />
            {
                props.options.map((o,index) =>(
                    <option key={index+1} value={o.value} label={o.label} />
                ))
            }
        </select>
    )
}