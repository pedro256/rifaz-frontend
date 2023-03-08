import { IItemNav, MainHeader } from "@/components/headers/main-header";
import { Input } from "@/components/input";
import { GrClose } from 'react-icons/gr'
import { HiOutlineInformationCircle } from 'react-icons/hi'
import { IoIosAddCircleOutline } from 'react-icons/io'
import style from './index.module.css'
import { useState } from 'react';
import { TextArea } from "@/components/textarea";
import { Select, IOption } from "@/components/select";
import { Button } from "@/components/button";

export default function NewRaffle() {
    const navItem: Array<IItemNav> = [
        {
            title: "Nova Rifa",
            url: "rifa/novo",
        },
        {
            title: "Avisos",
            url: "#"
        },
        {
            title: "Opções",
            url: "#",
            subNav: true,
            subNavItem: [
                {
                    title: "Meu Perfil",
                    url: "profile"
                },
                {
                    title: "Nova Rifa",
                    url: "rifa/novo"
                },
                {
                    title: "Minhas Rifas",
                    url: "rifa/my"
                },
                {
                    title: "Rifas Compradas",
                    url: "rifa/bought"
                }
            ]
        }
    ];
    const categoryOptions: Array<IOption> = [
        {
            label: "Test 01",
            value: "1"
        },
        {
            label: "Test 02",
            value: "2"
        }
    ]
    const [title, setTitle] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [selectedCategory, setSelectedCategory] = useState<string>("2");
    const [qttRaffle, setQttdRaffle] = useState<number>(0);


    const calValue = () => {
        alert("Tste")
    }
    return (
        <>
            <MainHeader
                navItem={navItem}
            ></MainHeader>
            <div className="flex justify-center pt-10">
                <div className="m-2 w-full md:w-1/2">
                    <div className={style.card}>
                        <div className="flex justify-between pb-2">
                            <h1 className="text-2xl font-bold p-1">
                                Criar Novas Rifas
                            </h1>
                            <div className="flex items-center">
                                <GrClose />
                            </div>
                        </div>
                        <div className={style.content}>

                            <form action="">

                                <div className="pt-2">
                                    <label htmlFor="title">Titulo:</label>
                                    <Input name="title" value={title} setValue={setTitle} />
                                </div>

                                <div className="pt-2">
                                    <label htmlFor="description">Descrição:</label>
                                    <TextArea value={description} setValue={setDescription} />
                                </div>

                                <div className="pt-2">
                                    <label htmlFor="title">Titulo:</label>
                                    <Select
                                        value={selectedCategory}
                                        setValue={setSelectedCategory}
                                        options={categoryOptions}
                                    />

                                </div>
                                <div className="pt-2">
                                    <div className="flex">
                                        <div className="w-1/2 md:2/3">
                                            <Input
                                                onChangeValue={calValue}
                                                value={qttRaffle}
                                                setValue={setQttdRaffle}
                                                type="number"

                                            />
                                        </div>
                                        <div className="w-1/2 md:1/3">
                                            <div className="flex justify-center items-center">
                                                <h2 className="p-2 text-xl font-semibold">
                                                    R$ 0,20
                                                </h2>
                                                <HiOutlineInformationCircle />
                                            </div>

                                        </div>

                                    </div>

                                </div>



                                <div>
                                    <div>
                                        <h2 className="text-xl font-bold p-1">Prêmios:</h2>

                                    </div>
                                    <div className="pt-2">
                                        <div className="flex justify-center">
                                            <IoIosAddCircleOutline size={35} />
                                        </div>
                                    </div>
                                </div>


                                <div className="mt-10">
                                    <Button type="primary" value="Salvar"/>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}