import { HTMLInputTypeAttribute } from 'react'
import { InputType } from 'zlib'
import style from './index.module.css'

interface Props{
    name?:string,
    id?:string,
    placeholder?:string,
    value:any,
    setValue:any,
    type?:HTMLInputTypeAttribute,
    onChangeValue?:Function

}
export function Input(props:Props){

    const onChange =(v:any)=>{
        props.setValue(v);
        if(props.onChangeValue){
            props.onChangeValue();
        }
        
    }
    return (
        <input
        className={style.inputStyle}
        name={props.name}
        id={props.id}
        type={props.type || "text"}
        placeholder={props.placeholder || "..."}
        value={props.value}
        onChange={(e)=>{onChange(e.target.value)}}
        >
        </input>
    )
}