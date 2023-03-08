
import style from './index.module.css'

interface Props{
    name?:string,
    id?:string,
    placeholder?:string,
    value:any,
    setValue:any

}
export function TextArea(props:Props){

    return (
        <textarea
        rows={2}
        className={style.inputStyle}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder || "..."}
        value={props.value}
        onChange={(e)=>{props.setValue(e.target.value)}}
        >
        </textarea>
    )
}