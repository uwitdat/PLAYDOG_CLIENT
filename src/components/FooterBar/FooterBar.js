import React from 'react'
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

    return (
        <div className='FooterBar'>
            <Link to='/' style={linkStyle}><span className='FooterBar__icon'><AiFillHome /></span></Link>
            <Link to='/events' style={linkStyle}><span className='FooterBar__icon'><FaRegCalendarAlt /></span></Link>
            <Link to='/new-event' style={linkStyle}><span className='FooterBar__icon lrg'><AiFillPlusCircle /></span></Link>
            <Link to='/dogs' style={linkStyle}><span className='FooterBar__icon'><FaPaw /></span></Link>
            <Link to='/login' style={linkStyle}><span className='FooterBar__icon'><FiLogOut /></span></Link>
        </div>
    )
}

export default FooterBar
