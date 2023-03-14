import { MyRaffleCard } from "@/components/card/raffle/my"
import { MainHeader } from '@/components/headers/main-header'
import { SecundaryPageNavItem } from "@/components/headers/nav-items/navItem"

export default function MyRaffle() {
    return (

        <>
            <MainHeader
                navItem={SecundaryPageNavItem}
            />
            <section>
                <div className="flex justify-center pt-10">
                    <div className="w-full mt-5 m-3 md:m-1 md:mt-6 md:max-w-screen-lg">


                        <MyRaffleCard
                        status={1}
                        title="Teste"
                        description="teste descriotop"
                        acquired={10}
                        amount={2039}
                        drawDate={new Date("2023-03-14 13:30")}
                        id={1}
                        totalValue={83992}
                        unitValue={2}
                        prizesDescription={
                            [
                                "Twtete",
                                "justify"
                            ]
                        }
                        />

                    </div>
                </div>
            </section>
        </>
    )
}