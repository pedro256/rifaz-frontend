import { Button } from "@/components/button"
import { MoneyParserService } from "@/shared/utils/currency-format.service"
import { RaffleCardBase } from "../base"


interface IProps {
    title: string
    description: string,
    prizesDescription?: Array<string>,
    value: number,
    acquired:number,
    amount:number,
}

export function ShowCaseRaffleCard(props: IProps) {

    const moneyParserService = new MoneyParserService();

    return (
        <RaffleCardBase>
            <div className="md:flex md:justify-between">
                <div className="mb-4">
                    <h1 className="text-xl font-semibold">{props.title}</h1>
                    <div className="w-full md:w-60">
                        <p className="text-sm">{props.description}</p>
                    </div>
                    
                </div>
                <div className="mb-4">
                    <h2 className="text-lg font-semibold text-stone-800">Prêmios:</h2>
                    <ul>
                        {
                            props.prizesDescription?.map(
                                pr => (<li className="italic">{pr}</li>)
                            )
                        }
                    </ul>
                </div>
                <div className="mb-4 text-center">
                    <div>
                        <h2 className="text-xl font-semibold">
                            {
                                moneyParserService.TextToFormatedMoney(props.value)
                            }
                        </h2>

                    </div>
                    <div>
                        <p className="text-xl">10/100</p>
                        <p className="text-xs">vendidas/disponiveis</p>
                    </div>
                </div>
            </div>
            <div>
                <Button type="primary" value="Comprar" />
                <Button type="primaryBlack" value="Mais Detalhes" />
            </div>

        </RaffleCardBase>
    )
}