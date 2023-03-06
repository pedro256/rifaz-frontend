import { MainHeader } from "@/components/headers/main-header"
import { useState } from 'react'
import { ShowCaseRaffleCard } from "@/components/card/raffle/showcase"

export default function Home() {
    const [search, setSearch] = useState<string>("")
    return (
        <>
            <MainHeader search={search} setSearch={setSearch}></MainHeader>
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
                        />
                    </div>
                </div>

            </section>
        </>
    )
}