import { BougthRaffleCard } from "@/components/card/raffle/bougth";
import { MainHeader } from "@/components/headers/main-header";
import { SecundaryPageNavItem } from "@/components/headers/nav-items/navItem";


export default function BougthRaffle() {
    return(
        <>
            <MainHeader
                navItem={SecundaryPageNavItem}
            />
            <section>
                <div className="flex justify-center pt-10">
                    <div className="w-full mt-5 m-3 md:m-1 md:mt-6 md:max-w-screen-lg">


                        <BougthRaffleCard
                        status={1}
                        title="Teste"
                        description="teste descriotop"
                        acquired={10}
                        drawDate={new Date("2023-03-14 13:30")}
                        id={1}
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