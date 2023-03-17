import RaffleStatusEnum from "@/shared/models/enum/RaffleStatusEnum";
import { MoneyParserService } from "@/shared/utils/currency-format.service";
import { TimeFormatService } from "@/shared/utils/time-format.service";
import { RaffleCardBase } from "../base";
import styleBase from '../base/style.module.css'
import { Button } from "@/components/button";

interface IProps {
    id: number,
    title: string,
    description: string,
    drawDate: Date,
    prizesDescription?: Array<string>,
    unitValue: number,
    totalValue:number
    acquired: number,
    status: RaffleStatusEnum
}

export function BougthRaffleCard(props: IProps) {

    const timeFormatService = new TimeFormatService();
    const moneyParserService = new MoneyParserService();

    const getFormatedDate = () => {
        return timeFormatService.DateTimeToFormatedText(props.drawDate);
    }
    const getStatus = (status: number = 0) => {
        switch (status) {
            case RaffleStatusEnum.ACTIVE:
                return (<p className={styleBase.textSttActive}>Ativo</p>);
            case RaffleStatusEnum.CANCELED:
                return (<p className={styleBase.textSttCanceled}>Cancelado</p>);
            case RaffleStatusEnum.FINISHED:
                return (<p className={styleBase.textSttFinished}>Finalizado</p>)
            default:
                return (<div>...</div>)
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
                        {/* <small className="italic font-bold">{howMuchTime()}</small> */}
                    </div>
                    <div className="flex mt-5">
                        <p className="w-20">
                            <b>
                                status:
                            </b>
                        </p>
                        <span>{getStatus(props.status)}</span>
                    </div>
                </div>
                <div className="mb-4">

                    <div>
                        
                    <div className="flex items-center">
                            <div className="w-40">
                                <p>
                                    Valor:
                                </p>

                            </div>
                            <div>
                                <p className="font-bold text-lg">
                                    {moneyParserService.TextToFormatedMoney(props.unitValue)}
                                </p>
                            </div>

                        </div>
                        <div className="flex items-center">
                            <div className="w-40">
                                <p>
                                    Total:
                                </p>

                            </div>
                            <div>
                                <p className="font-bold text-lg">
                                    {moneyParserService.TextToFormatedMoney(props.totalValue)}
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="mb-4 text-center p-2">
                    <div>
                        <p className="text-xl">{props.acquired}</p>
                        <p className="text-xs">compradas</p>
                    </div>

                </div>
            </div>
            <div>
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <Button value="Mais Detalhes"  />
                    </div>
                    <div>
                        <Button value="Resultado" type="primary"/>
                    </div>

                </div>
            </div>
        </RaffleCardBase>
    )
}