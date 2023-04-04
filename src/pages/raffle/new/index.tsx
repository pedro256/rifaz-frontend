import {MainHeader } from "@/components/headers/main-header";
import { Input } from "@/components/input";
import { GrClose } from 'react-icons/gr'
import { HiOutlineInformationCircle } from 'react-icons/hi'
import { IoIosAddCircleOutline } from 'react-icons/io'
import style from './index.module.css'
import styleInputComponent from '@/components/input/index.module.css'
import styleTextAreaComponent from '@/components/textarea/index.module.css'
import { useState, useEffect,useCallback } from 'react';
import { TextArea } from "@/components/textarea";
import { Select, IOption } from "@/components/select";
import { Button } from "@/components/button";
import { IRafflePrizeItem } from "@/shared/models/view/IRafflePrizeItem";
import { SecundaryPageNavItem } from "@/components/headers/nav-items/navItem";


export default function NewRaffle() {
    
    const categoryOptions: Array<IOption> = [
        {
            label: "Test 01",
            value: "1"
        },
        {
            label: "Test 02",
            value: "2"
        }
    ];
    const qtdOptions: Array<IOption> = [
        {

            label: "até 100 rifas",
            value: "100"
        },
        {
            label: "até 500 rifas",
            value: "500"
        },
        {
            label: "até 1000 rifas",
            value: "1000"
        }
    ]
    const [title, setTitle] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [selectedCategory, setSelectedCategory] = useState<string>("2");
    const [qttRaffle, setQttdRaffle] = useState<number>(0);
    const [prizes, setPrizes] = useState<Array<IRafflePrizeItem>>([])


    useEffect(() => {

    }, [qttRaffle])

    const onClickNewRafflePrize = () => {
        let lastPosition = 0;
        if (prizes.length) {
            lastPosition = Math.max(...prizes.map(x => x.id));
        }
        setPrizes([...prizes, { id: lastPosition + 1, description: "", name: "" }])
    }
    const updateRafflePrize = (prize: IRafflePrizeItem) => {
        let items = prizes.filter(x => x.id != prize.id);
        items.push(prize);
        items = items.sort((a, b) => {
            return a.id - b.id;
        });
        setPrizes(items)
    }

    const validForm = ()=>{
        alert("Formulario")
    }

    const onClickSalvar = ()=>{
        validForm()
    }


    return (
        <>
            <MainHeader
                navItem={SecundaryPageNavItem}
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
                                            <label htmlFor="title">Quantidade:</label>
                                            <Select
                                                value={qttRaffle}
                                                setValue={setQttdRaffle}
                                                options={qtdOptions}
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
                                            <IoIosAddCircleOutline size={35} onClick={x => onClickNewRafflePrize()} />
                                        </div>
                                    </div>
                                    <div>
                                        {
                                            prizes.map(x => (
                                                <div key={x.id} className={style.cardPrizze}>

                                                    <div>
                                                        <h2 className="font-bold text-xl">{x.id}° Prêmio</h2>
                                                    </div>

                                                    <div className="pt-2">
                                                        <label>Titulo:</label>
                                                        <input 
                                                            className={styleInputComponent.inputStyle}
                                                            value={x.name}
                                                            placeholder="..."
                                                            onChange={(e)=>{updateRafflePrize({...x,name:e.target.value})}}
                                                         />
                                                    </div>

                                                    <div className="pt-2">
                                                        <label>Description:</label>
                                                        <textarea
                                                        rows={2}
                                                        className={styleTextAreaComponent.inputStyle}
                                                        placeholder="..."
                                                        value={x.description}
                                                        onChange={(e)=>{updateRafflePrize({...x,description:e.target.value})}}
                                                        >
                                                        </textarea>
                                                    </div>

                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>


                                <div className="mt-10">
                                    <Button 
                                        type="primary" 
                                        value="Salvar"
                                        onClick={onClickSalvar}
                                         />
                                </div>
                            </form>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}