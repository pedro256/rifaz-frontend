import style from './style.module.css'

interface IProps{
    children:any
}

export function RaffleCardBase(props:IProps) {

    return (
        <div className={style.cardRaffle}>
            <div className={style.cardContent}>
                {props.children}
            </div>
        </div>
    )
}