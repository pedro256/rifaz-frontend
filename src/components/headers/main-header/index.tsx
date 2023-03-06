import style from './index.module.css'
import { AiOutlineMenu, AiOutlineClose,AiOutlineSearch } from 'react-icons/ai'
import { useState } from 'react'
import { Input } from '@/components/input'
import { Button } from '@/components/button'

interface IItemNav {
    title: string,
    url: string,
    subNav?: boolean,
    subNavItem?: Array<IItemNav>
}

interface IProps{
    search:any
    setSearch:any
}

export function MainHeader(props:IProps) {

    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)
    const [selectHeader,setSelectedHeader] = useState<string>("");
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
    ]

    return (
        <nav className={style.navbarBg}>
            <div className="flex justify-between px-6 pt-4">
                <div className='w-full md:w-auto flex justify-between'>
                    <img src="favico.svg" alt="logo" className="w-12" />
                    <div className='md:hidden' onClick={() => setIsOpenMenu(!isOpenMenu)}>
                        {
                            isOpenMenu ?
                                (<AiOutlineClose size={30}></AiOutlineClose>) :
                                (<AiOutlineMenu size={30} ></AiOutlineMenu>)

                        }

                    </div>
                </div>
                <div className='pr-10'>
                    <ul className="md:flex hidden gap-8">
                        {
                            navItem.map(x => (
                                <li key={x.title} className='font-semibold px-5 group'>
                                    <div>
                                        <a className='text-white' href={x.url}>{x.title}</a>
                                        {
                                            x.subNav ? (
                                                <div className='absolute top-15 hidden group-hover:block hover:block'>
                                                    <div className='bg-white px-3 py-4 drop-shadow-md'>
                                                        <div className='divide-solid divide-y'>
                                                            {
                                                                x.subNavItem?.map(sub => (
                                                                    <div key={sub.title} className='text-sm text-gray-600 my-2'>
                                                                        <a className='hover:text-secundary' href={sub.url}>{sub.title}</a>
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>

                                                    </div>

                                                </div>

                                            ) : null
                                        }
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>

            </div>
            <div className='flex justify-center'>
                <div className='py-4 flex items-center md:w-1/2'>
                    <Input value={props.search} setValue={props.setSearch}/>
                    <AiOutlineSearch size={30} className="text-white mx-4"></AiOutlineSearch>
                    <Button value="Filtro"/>
                </div>
            </div>
            <div className={`${style.sideNavBar} duration-500 ${isOpenMenu ? "left-0" : "left-[-100%]"}`}>
                <ul>
                    {
                        navItem.map(x => (
                            <li key={x.title} className='font-semibold text-white px-5 py-6'>
                                <div>
                                    {
                                        (!x.subNav)?
                                        (<a href={x.url}> {x.title}</a>):
                                        (<h3 onClick={e => selectHeader==x.title?setSelectedHeader("") :setSelectedHeader(x.title)}>{x.title}</h3>)
                                    }
                                    {
                                        <div className={
                                            `${selectHeader === x.title? 'block':'hidden'} bg-white px-2 py-4 rounded-sm`
                                        }>
                                            {
                                                x.subNavItem?.map(
                                                    sub =>(
                                                        <div key={sub.title}>
                                                            <a href={sub.url}>{sub.title}</a>
                                                        </div>
                                                    )
                                                )
                                            }

                                        </div>
                                        
                                    }
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>

        </nav>
    )
}