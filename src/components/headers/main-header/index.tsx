import style from './index.module.css'
import {AiOutlineMenu,AiOutlineClose } from 'react-icons/ai'
import {useState} from 'react'

export function MainHeader() {

    const [isOpenMenu,setIsOpenMenu] = useState(false)

    return (
        <nav className={style.navbarBg}>
            <div className="flex justify-between px-6 pt-4">
                <div className='w-full md:w-auto flex justify-between'>
                    <img src="favico.svg" alt="logo" className="w-12" />
                    <div className='md:hidden'  onClick={()=>setIsOpenMenu(!isOpenMenu)}>
                        {
                            isOpenMenu?
                            (<AiOutlineClose size={30}></AiOutlineClose>):
                             (<AiOutlineMenu size={30} ></AiOutlineMenu>)
                             
                        }
                        
                    </div>
                </div>
                <div>
                    <ul className="md:flex hidden gap-8">
                        <li className='font-semibold px-5'>Nova Rifas</li>
                        <li className='font-semibold px-5'>Avisos</li>
                        <li className='font-semibold px-5'>Perfil</li>
                    </ul>
                </div>
            </div>
            <div className={`${style.ulOptions} duration-500 ${isOpenMenu? "left-0":"left-[-100%]"}`}>
                <ul>
                    <li className='font-semibold px-5 py-6'>Nova Rifas</li>
                    <li className='font-semibold px-5 py-6'>Avisos</li>
                    <li className='font-semibold px-5 py-6'>Perfil</li>
                </ul>
            </div>

        </nav>
    )
}