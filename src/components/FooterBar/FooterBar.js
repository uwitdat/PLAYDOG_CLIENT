import React, { useEffect, useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import './FooterBar.css'
import { FaPaw, FaRegCalendarAlt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { AiFillHome, AiFillPlusCircle } from "react-icons/ai";
import { SET_ERRORS } from 'redux-store/types';
import { useDispatch } from 'react-redux';
import { useFirebase } from "react-redux-firebase";

const linkStyle = {
    marginTop: '1rem',
    outline: 'none',
    userSelect: 'none'
}

const FooterBar = () => {
    const firebase = useFirebase();
    const history = useHistory();
    const dispatch = useDispatch();
    let pathname = window.location.href

    const [path, setPath] = useState('/')

    useEffect(() => {
        setPath(pathname)
    }, [path, pathname])

    const signOut = async () => {
        try {
            await firebase
                .auth()
                .signOut()

            // Sign-out successful.
            console.log("signed out");
            setPath('/login')
            history.push("/sign-in");
        } catch (error) {
            console.log(error);
            dispatch({
                type: SET_ERRORS,
                payload: error
            })
        }
    };

    return (
        <div className='FooterBar'>
            <Link to='/' style={linkStyle}><span onClick={() => setPath('http://localhost:3000/PLAYDOG_CLIENT#/')} className={path === 'http://localhost:3000/PLAYDOG_CLIENT#/' ? 'FooterBar__icon mob-active' : 'FooterBar__icon'}><AiFillHome /></span></Link>
            <Link to='/events' style={linkStyle}><span onClick={() => setPath('http://localhost:3000/PLAYDOG_CLIENT#/events')} className={path === 'http://localhost:3000/PLAYDOG_CLIENT#/events' ? 'FooterBar__icon mob-active' : 'FooterBar__icon'}><FaRegCalendarAlt /></span></Link>
            <Link to='/new-event' style={linkStyle}><span className='FooterBar__icon lrg'><AiFillPlusCircle /></span></Link>
            <Link to='/dogs' style={linkStyle}><span onClick={() => setPath('http://localhost:3000/PLAYDOG_CLIENT#/dogs')} className={path === 'http://localhost:3000/PLAYDOG_CLIENT#/dogs' ? 'FooterBar__icon mob-active' : 'FooterBar__icon'}><FaPaw className={path === '/dogs' ? 'rotate' : null} /></span></Link>
            <div className='FooterBar__sign-out' to='/sign-in' style={linkStyle}><span onClick={signOut} className='FooterBar__icon'><FiLogOut /></span></div>
        </div>
    )
}

export default FooterBar
