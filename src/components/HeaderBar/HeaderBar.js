import React, { useEffect, useState } from 'react'
import './HeaderBar.css'

import { useHistory, Link } from "react-router-dom";
import { SET_ERRORS } from 'redux-store/types';
import { useDispatch } from 'react-redux';
import { useFirebase } from "react-redux-firebase";

const HeaderBar = () => {
    const firebase = useFirebase();
    const history = useHistory();
    const dispatch = useDispatch();
    let pathname = window.location.pathname


    console.log(firebase._.authUid)

    const [path, setPath] = useState('/')

    // useEffect(() => {
    //     setPath(pathname)
    // }, [path])

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
        <div className='HeaderBar'>
            <Link to='/'>
                <h1 className='HeaderBar__title'>Walki</h1>
            </Link>
            <div className='Mobile-nav'>
                <Link to='/dogs'>
                    <div onClick={() => setPath('dogs')} className={path === 'dogs' ? 'Mobile-nav-elm border-orange' : 'Mobile-nav-elm'}>
                        <p className={path === 'dogs' ? 'Mobile-nav-elm__text black' : 'Mobile-nav-elm__text'}>View Dogs</p>
                    </div>
                </Link>
                <Link to='/events'>
                    <div onClick={() => setPath('/events')} className={path === '/events' ? 'Mobile-nav-elm border-orange black' : 'Mobile-nav-elm'}>
                        <p className={path === '/events' ? 'Mobile-nav-elm__text black' : 'Mobile-nav-elm__text'}>View Events</p>
                    </div>
                </Link>
                <Link to='/new-event'>
                    <div onClick={() => setPath('/new-event')} className={path === '/new-event' ? 'Mobile-nav-elm border-orange black' : 'Mobile-nav-elm'}>
                        <p className={path === '/new-event' ? 'Mobile-nav-elm__text black' : 'Mobile-nav-elm__text'}>New Event</p>
                    </div>
                </Link>
                {/* <Link to='/login'> */}
                <div onClick={signOut} className={path === '/login' ? 'Mobile-nav-elm border-orange black' : 'Mobile-nav-elm'}>
                    <p className={path === '/login' ? 'Mobile-nav-elm__text black' : 'Mobile-nav-elm__text'}>Logout</p>
                </div>
                {/* </Link> */}
                <Link to='/profile'>
                    <div onClick={() => setPath('/profile')} className={path === '/profile' ? 'Mobile-nav-elm border-orange black' : 'Mobile-nav-elm'}>
                        <p className={path === '/profile' ? 'Mobile-nav-elm__text black' : 'Mobile-nav-elm__text'}>Profile</p>
                    </div>
                </Link>

            </div >
        </div >
    )
}

export default HeaderBar
