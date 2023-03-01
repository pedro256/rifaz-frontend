import style from './style.module.css'
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { useState } from "react";
import { IUserModel } from '@/models/IUserModel';

export default function Register() {

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [birthDate,setBirthDate] = useState<Date>();
    const [password, setPassword] = useState("");

    return (
        <div className={style.bg}>
            <div className='block md:flex'>
                <div className='w-full md:w-1/2 flex justify-center'>
                    <img src="favico.svg" alt="logo" className='w-2/5' />
                </div>
                <div className={style.card}>

                    <h1 className="text-xl font-bold sm:text-4xl">
                        Cadastrar-se
                    </h1>
                    <p>Insira seus dados iniciais para cadastrar-se</p>

                    <div>
                        <label htmlFor="name">Nome: </label>
                        <div className="w-3/4">
                            <Input name='name' type="text" value={name} setValue={setName}></Input>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email">Email: </label>
                        <div className="w-3/4">
                            <Input name='email' type="email" value={email} setValue={setEmail}></Input>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="dataNascimento">Data de Nascimento: </label>
                        <div className="w-3/4">
                            <Input name='dataNascimento' type="date" value={birthDate} setValue={setBirthDate}></Input>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="pass">Senha: </label>
                        <div className="w-3/4">
                            <Input name='pass' type="password" value={password} setValue={setPassword}></Input>
                        </div>
                    </div>

                    <Button value="Cadastrar" type="primary" />

                    <div className='grid justify-items-end w-3/4'>
                        <div>
                            <p> Caso já tenha
                                <a className="text-link-esp" href="login"> Entrar</a>
                            </p>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}