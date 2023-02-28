import { HTMLInputTypeAttribute } from 'react'
import { InputType } from 'zlib'
import style from './index.module.css'

interface Props{
    name?:string,
    id?:string,
    placeholder?:string,
    value:any,
    setValue:any,
    type?:HTMLInputTypeAttribute

}
export function Input(props:Props){

    return (
        <input
        className={style.inputStyle}
        name={props.name}
        id={props.id}
        type={props.type || "text"}
        placeholder={props.placeholder || "..."}
        value={props.value}
        onChange={(e)=>{props.setValue(e.target.value)}}
        >
        </input>
    )
}