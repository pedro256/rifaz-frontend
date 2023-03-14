import { Button } from "@/components/button"
import moment from "moment";
import { RaffleCardBase } from "../base"
import style from './index.module.css';
import styleBase from '../base/style.module.css'
import { useMemo } from "react";
import RaffleStatusEnum from "@/shared/models/enum/RaffleStatusEnum";


interface IProps {
    id: number,
    title: string,
    description: string,
    drawDate: Date,
    prizesDescription?: Array<string>,
    unitValue: number,
    totalValue: number,
    acquired: number,
    amount: number,
    status: RaffleStatusEnum
}

export function MyRaffleCard(props: IProps) {

    //const moneyParserService = new MoneyParserService();
    
    const getFormatedDate = (): string => {
        return moment(props.drawDate).format("DD/MM/YYYY") + " ás " + moment(props.drawDate).format("HH:mm")
    }
    const memorizedIsCurrentDay = useMemo((): boolean => {
        const isDay = (moment(props.drawDate).format("DD/MM/YYYY") == moment(new Date()).format("DD/MM/YYYY"));
        return isDay;
    }, [props.drawDate]);

    const howMuchTime = () => {
        //props.drawDate.setHours(9);
        let agora = new Date();
        console.log("agora", agora);
        console.log("sorteio as ", props.drawDate)
        if (memorizedIsCurrentDay) {

            var ms = moment(props.drawDate, "DD/MM/YYYY HH:mm:ss").diff(moment(agora, "DD/MM/YYYY HH:mm:ss"));

            var horas = moment.duration(ms).asHours();
            var minutosStr = moment.utc(ms).format("mm");
            if (Math.floor(horas) == 0) {
                if (minutosStr != "00") {
                    return minutosStr + " minutos (aproximadamente)";
                }
                return "Agora !"
            }
            var s = Math.floor(horas) + "h" + minutosStr + "m";

            return "Faltam " + s + " (aproximadamente)";
        }
        return "Ainda não é dia !"
    }

    const getStatus = (status:number = 0)=>{
        switch(status){
            case RaffleStatusEnum.ACTIVE:
                return (<p className={styleBase.textSttActive}>Ativo</p>);
            case RaffleStatusEnum.CANCELED:
                return (<p className={styleBase.textSttCanceled}>Cancelado</p>);
            case RaffleStatusEnum.FINISHED:
                return (<p className={styleBase.textSttFinished}>Finalizado</p>)
            default:
                return(<div>...</div>)
        }
    }

    return (
        <RaffleCardBase>
            <div className="md:flex md:justify-between">
                <div className="mb-4">
                    <h1 className="text-xl font-semibold">{props.title}</h1>
                    <div className="w-full md:w-60">
                        <p className="text-sm">{props.description}</p>
                    </div>
                    <div className="mt-5">
                        <p className="font-semibold">Data de Sorteio: {getFormatedDate()}</p>
                        <small className="italic font-bold">{howMuchTime()}</small>
                    </div>
                    <div className="flex mt-5">
                        <p className="w-20">
                            <b>
                                status:
                            </b>
                        </p>
                        <span>{getStatus(props.status)}</span>
                    </div>
                    <div>
                        <div className="flex items-center">
                            <div className="w-40">
                                <p>
                                    Rifas Vendidas:
                                </p>

                            </div>
                            <div>
                                R$ 100,90
                            </div>

                        </div>
                        <div className="flex items-center">
                            <div className="w-40">
                                <p>
                                    Valor da Rifas:
                                </p>

                            </div>
                            <div>
                                R$ 00,90
                            </div>

                        </div>
                    </div>


                </div>
                <div className="mb-4 text-center">
                    <div>
                        <p className="text-xl">10/100</p>
                        <p className="text-xs">vendidas/disponiveis</p>
                    </div>
                    <div>
                        <Button value="detalhes" type="blank" />
                    </div>


                </div>
            </div>
            <div>
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <Button value="Editar" type="black" />
                    </div>
                    <div>
                        <button
                            className={style.btnCardSort}
                            type="button"
                        >
                            Sortear
                        </button>
                    </div>

                </div>
            </div>

        </RaffleCardBase>
    )
}