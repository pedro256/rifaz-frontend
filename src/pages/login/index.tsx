import styles from './style.module.css'
import { Input } from '@/components/input'
import { useState } from 'react'
import { Button } from '@/components/button';

export default function Login() {

  const [email,setEmail]= useState("");
  const [password,setPassword] = useState("");

  return (
    <div className={styles.bglogin}>
      <div className='block md:flex md:flex-row-reverse'>
      <div className='w-full md:w-1/2 flex justify-center'>
          <img src="favico.svg" alt="logo" className='w-2/5'/>
        </div>
        <div className={styles.card}>
          
          <h1 className="text-base  font-bold sm:text-2xl">
            Entrar
          </h1>
          <p>Acesse as rifas usando email e senha cadastrado .</p>

          <div>
            <label htmlFor="email">Email: </label>
            <div className="w-3/4">
              <Input name='email' type="email" value={email} setValue={setEmail}></Input>
            </div>
          </div>
          <div className='grid justify-items-end w-3/4'>
            <div>
              <a className="text-link-esp" href="#">Esqueci a senha !</a>
            </div>
          </div>
          
          <div>
            <label htmlFor="pass">Password: </label>
            <div className="w-3/4">
              <Input name='pass' type="password" value={password} setValue={setPassword}></Input>
            </div>
          </div>
          
          <Button value="Prosseguir" type="primary"/>

          <div className='grid justify-items-end w-3/4'>
            <div>
              <p> Caso não tenha 
              <a className="text-link-esp" href="#"> Crie uma Conta !</a>
              </p>
              
            </div>
          </div>
          

        </div>
        
      </div>
    </div>
  )
}
