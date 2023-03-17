import RaffleStatusEnum from "@/shared/models/enum/RaffleStatusEnum";
import { TimeFormatService } from "@/shared/utils/time-format.service";
import { RaffleCardBase } from "../base";


interface IProps {
    id: number,
    title: string,
    description: string,
    drawDate: Date,
    prizesDescription?: Array<string>,
    unitValue: number,
    acquired: number,
    status: RaffleStatusEnum
}

export function BougthRaffleCard(props: IProps) {

    const timeFormatService = new TimeFormatService();

    const getFormatedDate = ()=>{
        return timeFormatService.DateTimeToFormatedText(props.drawDate);
    }
    return(
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
                                    Vendidas:
                                </p>

                            </div>
                            <div>
                                <p className="font-bold text-lg">
                                    {moneyParserService.TextToFormatedMoney(props.totalValue)}
                                </p>
                            </div>

                        </div>
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