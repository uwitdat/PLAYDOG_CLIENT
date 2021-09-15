import React, { useEffect, useState } from 'react'
import './HeaderBar.css'

import { useHistory, Link } from "react-router-dom";
import { SET_ERRORS } from 'redux-store/types';
import { useDispatch } from 'react-redux';
import { useFirebase } from "react-redux-firebase";
import { FaUserCircle } from 'react-icons/fa'

const HeaderBar = () => {
    const firebase = useFirebase();
    const history = useHistory();
    const dispatch = useDispatch();
    let pathname = window.location.href

    const [path, setPath] = useState('/')


    useEffect(() => {
        setPath(pathname);
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
        <div className='HeaderBar' onClick={() => setPath('home')}>
            <Link to='/'>
                <h1 className='HeaderBar__title'>Walki</h1>
            </Link>
            <div className='Mobile-nav'>
                <Link to='/dogs'>
                    <div onClick={() => setPath('http://localhost:3000/PLAYDOG_CLIENT#/dogs')} className={path === 'http://localhost:3000/PLAYDOG_CLIENT#/dogs' ? 'Mobile-nav-elm border-orange' : 'Mobile-nav-elm'}>
                        <p className={path === 'http://localhost:3000/PLAYDOG_CLIENT#/dogs' ? 'Mobile-nav-elm__text black' : 'Mobile-nav-elm__text'}>View Dogs</p>
                    </div>
                </Link>
                <Link to='/events'>
                    <div onClick={() => setPath('http://localhost:3000/PLAYDOG_CLIENT#/events')} className={path === 'http://localhost:3000/PLAYDOG_CLIENT#/events' ? 'Mobile-nav-elm border-orange black' : 'Mobile-nav-elm'}>
                        <p className={path === 'http://localhost:3000/PLAYDOG_CLIENT#/events' ? 'Mobile-nav-elm__text black' : 'Mobile-nav-elm__text'}>View Events</p>
                    </div>
                </Link>
                <Link to='/new-event'>
                    <div onClick={() => setPath('http://localhost:3000/PLAYDOG_CLIENT#/new-event')} className={path === 'http://localhost:3000/PLAYDOG_CLIENT#/new-event' ? 'Mobile-nav-elm border-orange black' : 'Mobile-nav-elm'}>
                        <p className={path === 'http://localhost:3000/PLAYDOG_CLIENT#/new-event' ? 'Mobile-nav-elm__text black' : 'Mobile-nav-elm__text'}>New Event</p>
                    </div>
                </Link>
                {/* <Link to='/login'> */}
                <div onClick={signOut} className={path === '/login' ? 'Mobile-nav-elm border-orange black' : 'Mobile-nav-elm'}>
                    <p className={path === '/login' ? 'Mobile-nav-elm__text black' : 'Mobile-nav-elm__text'}>Logout</p>
                </div>
                {/* </Link> */}
                <Link to='/profile'>
                    <div onClick={() => setPath('http://localhost:3000/PLAYDOG_CLIENT#/profile')} className={path === 'http://localhost:3000/PLAYDOG_CLIENT#/profile' ? 'Mobile-nav-elm border-orange black' : 'Mobile-nav-elm'}>
                        <p className={path === 'http://localhost:3000/PLAYDOG_CLIENT#/profile' ? 'Mobile-nav-elm__text black' : 'Mobile-nav-elm__text'}>Profile</p>
                    </div>
                </Link>


            </div>

            <Link to='/profile'>
                <div onClick={() => setPath('http://localhost:3000/PLAYDOG_CLIENT#/profile')} className={path === 'http://localhost:3000/PLAYDOG_CLIENT#/profile' ? 'user-profile-icon black' : 'user-profile-icon'}>
                    <FaUserCircle />
                </div>
            </Link>
        </div>
    )
}

export default HeaderBar;
