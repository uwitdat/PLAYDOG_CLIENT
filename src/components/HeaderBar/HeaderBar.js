import React, { useEffect, useState } from 'react'
import './HeaderBar.css'
import { Link } from "react-router-dom";
import { FaPaw, FaRegCalendarAlt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineUser, AiFillPlusCircle } from "react-icons/ai";

const HeaderBar = () => {

    let pathname = window.location.pathname

    const [path, setPath] = useState('/')

    useEffect(() => {
        setPath(pathname)
    }, [path])

    return (
        <div className='HeaderBar'>
            <Link to='/'>
                <h1 className='HeaderBar__title'>Walki</h1>
            </Link>
            <div className='Mobile-nav'>
                <Link to='/dogs'>
                    <div onClick={() => setPath('/dogs')} className={pathname === '/dogs' ? 'Mobile-nav-elm border-orange' : 'Mobile-nav-elm'}>
                        <p className={pathname === '/dogs' ? 'Mobile-nav-elm__icon black' : 'Mobile-nav-elm__icon'}><FaPaw /></p>
                        <p className={pathname === '/dogs' ? 'Mobile-nav-elm__text black' : 'Mobile-nav-elm__text'}>View Dogs</p>
                    </div>
                </Link>
                <Link to='/events'>
                    <div onClick={() => setPath('/events')} className={pathname === '/events' ? 'Mobile-nav-elm border-orange black' : 'Mobile-nav-elm'}>
                        <p className={pathname === '/events' ? 'Mobile-nav-elm__icon black' : 'Mobile-nav-elm__icon'}><FaRegCalendarAlt /></p>
                        <p className={pathname === '/events' ? 'Mobile-nav-elm__text black' : 'Mobile-nav-elm__text'}>View Events</p>
                    </div>
                </Link>
                <Link to='/new-event'>
                    <div onClick={() => setPath('/new-event')} className={pathname === '/new-event' ? 'Mobile-nav-elm border-orange black' : 'Mobile-nav-elm'}>
                        <p className={pathname === '/new-event' ? 'Mobile-nav-elm__icon black' : 'Mobile-nav-elm__icon'}><AiFillPlusCircle /></p>
                        <p className={pathname === '/new-event' ? 'Mobile-nav-elm__text black' : 'Mobile-nav-elm__text'}>New Event</p>
                    </div>
                </Link>
                <Link to='/login'>
                    <div onClick={() => setPath('/login')} className={pathname === '/login' ? 'Mobile-nav-elm border-orange black' : 'Mobile-nav-elm'}>
                        <p className={pathname === '/login' ? 'Mobile-nav-elm__icon black' : 'Mobile-nav-elm__icon'}><FiLogOut /></p>
                        <p className={pathname === '/login' ? 'Mobile-nav-elm__text black' : 'Mobile-nav-elm__text'}>Logout</p>
                    </div>
                </Link>
                <Link to='/profile'>
                    <div onClick={() => setPath('/profile')} className={pathname === '/profile' ? 'Mobile-nav-elm border-orange black' : 'Mobile-nav-elm'}>
                        <p className={pathname === '/profile' ? 'Mobile-nav-elm__icon black' : 'Mobile-nav-elm__icon'}><AiOutlineUser /></p>
                        <p className={pathname === '/profile' ? 'Mobile-nav-elm__text black' : 'Mobile-nav-elm__text'}>Profile</p>
                    </div>
                </Link>

            </div >
        </div >
    )
}

export default HeaderBar
