import { IItemNav, MainHeader } from "@/components/headers/main-header";
import { MdAttachMoney } from 'react-icons/md'
import style from './index.module.css'


export default function Profile() {

    const navItem: Array<IItemNav> = [
        {
            title: "Principal",
            url: "/home",
        },
        {
            title: "Avisos",
            url: "#"
        }
    ]

    return (
        <>
            <MainHeader
                navItem={navItem}
            ></MainHeader>
            <div>
                <div className={style.content}>
                    <h2 className={style.titleContent}>Conta</h2>

                    <div className={style.rowInform}>

                        <div className="w-full md:w-1/4">
                            <p> <b>Nome: </b></p>
                        </div>
                        <div className="w-full md:w-2/4">
                            <p>Pedro Martins</p>
                        </div>
                        <div className="w-full md:w-1/4">
                            <a> Editar</a>
                        </div>
                    </div>
                    <div className={style.rowInform}>
                        <div className="w-full md:w-1/4">
                            <p> <b>Email: </b></p>
                        </div>
                        <div className="w-full md:w-2/4">
                            <p>pedroh93601@gmail.com</p>
                        </div>
                    </div>

                    <div className={style.rowInform}>
                        <div className="w-full md:w-1/4">
                            <p> <b>Data de Nascimento: </b></p>
                        </div>
                        <div className="w-full md:w-2/4">
                            <p>10/02/2004</p>
                        </div>
                        <div className="w-full md:w-1/4">
                            <a> Editar</a>
                        </div>
                    </div>

                </div>

                <div className=" block md:flex">
                    <div className="w-full md:w-1/2">
                        <div className={style.content}>
                            <div>
                                <h2 className={style.titleContent}>Minhas Rifas</h2>
                            </div>

                            <div>
                                <div className='overflow-x-scroll'>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Nome</th>
                                                <th>Estado</th>
                                                <th>Vendas</th>
                                                <th>Valor</th>
                                                <th>Arrecadado</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div>
                                                        Teste Informa doejejej jjejejejhehj ehheheheheheh
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>

                                                        Encerrado
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        10
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        R$ 1,00
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>R$ 10,00
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        Mais Detalhes
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="w-full md:w-1/2">
                        <div className={style.content}>
                            <div>
                                <h2 className={style.titleContent}>Rifas Compradas</h2>

                            </div>
                            <div>
                                <div className='overflow-x-scroll'>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Nome</th>
                                                <th>Estado</th>
                                                <th>Comprado</th>
                                                <th>Valor</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div>
                                                        Teste Informa doejejej jjejejejhehj ehheheheheheh
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>

                                                        Encerrado
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        10
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        R$ 1,00
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        Mais Detalhes
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-10 mb-20">
                    <div className="p-2 m-4 flex md:block justify-center">
                        <div className="flex items-center font-bold hover:underline">
                            <MdAttachMoney size={30}/> FINANÇAS
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}