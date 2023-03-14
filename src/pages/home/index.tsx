import { MainHeader } from "@/components/headers/main-header"
import { useState } from 'react'
import { ShowCaseRaffleCard } from "@/components/card/raffle/showcase"
import { Footer } from "@/components/footer";
import { HomePageNavItem } from "@/components/headers/nav-items/navItem";

export default function Home() {
    const [search, setSearch] = useState<string>("");
 

    return (
        <>
            <MainHeader
            habSearcher={true}
            search={search} 
            setSearch={setSearch}
            navItem={HomePageNavItem}
            ></MainHeader>
            <section>
                <div className="flex justify-center">
                    <div className="w-full mt-5 m-3 md:m-1 md:mt-6 md:max-w-screen-lg">

                        <div className="pl-2 pb-6 md:pl-6">
                            <span className="font-semibold italic">mais de 100 rifas encontradas</span>
                        </div>


                        <ShowCaseRaffleCard
                            title="Primeira Rifa Do Amigos"
                            description="vamos de descriçãozinha"
                            prizesDescription={[
                                "Teste",
                                "Outro"
                            ]}
                            value={23.3442}
                            acquired={10}
                            amount={1828}
                        />

                        <ShowCaseRaffleCard
                            title="Primeira Rifa Do Amigos"
                            description="vamos de descriçãozinha 3h3y3yy ieie infime eieimrr  ejeiieb"
                            prizesDescription={[
                                "Teste",
                                "Outro"
                            ]}
                            value={23.3442}
                            
                            acquired={10}
                            amount={1828}
                        />
                    </div>
                </div>

            </section>
            <Footer/>
        </>
    )
}