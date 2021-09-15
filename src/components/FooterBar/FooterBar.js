import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import './FooterBar.css'
import { FaPaw, FaRegCalendarAlt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { AiFillHome, AiFillPlusCircle } from "react-icons/ai";

const linkStyle = {
    marginTop: '1rem',
    outline: 'none',
    userSelect: 'none'
}

const FooterBar = () => {
    let pathname = window.location.pathname

    const [path, setPath] = useState('/')

    useEffect(() => {
        setPath(pathname)
    }, [path, pathname])

    return (
        <div className='FooterBar'>
            <Link to='/' style={linkStyle}><span onClick={() => setPath('/')} className={path === '/' ? 'FooterBar__icon mob-active' : 'FooterBar__icon'}><AiFillHome /></span></Link>
            <Link to='/events' style={linkStyle}><span onClick={() => setPath('/events')} className={path === '/events' ? 'FooterBar__icon mob-active' : 'FooterBar__icon'}><FaRegCalendarAlt /></span></Link>
            <Link to='/new-event' style={linkStyle}><span className='FooterBar__icon lrg'><AiFillPlusCircle /></span></Link>
            <Link to='/dogs' style={linkStyle}><span onClick={() => setPath('/dogs')} className={path === '/dogs' ? 'FooterBar__icon mob-active' : 'FooterBar__icon'}><FaPaw className={path === '/dogs' ? 'rotate' : null} /></span></Link>
            <Link to='/login' style={linkStyle}><span onClick={() => setPath('/login')} className='FooterBar__icon'><FiLogOut /></span></Link>
        </div>
    )
}

export default FooterBar
