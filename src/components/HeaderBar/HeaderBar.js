import React, { useEffect, useState } from 'react'
import './HeaderBar.css'
import { FaPaw, FaRegCalendarAlt } from "react-icons/fa";
import { FiLogOut, FiLogIn } from "react-icons/fi";
import { AiOutlineUser, AiFillPlusCircle } from "react-icons/ai";
import { useFirebase } from 'react-redux-firebase';
import { useHistory, Link } from "react-router-dom";
import { SET_ERRORS } from 'redux-store/types';
import { useDispatch, useSelector } from 'react-redux';

const HeaderBar = () => {
    const firebase = useFirebase();
    const history = useHistory();
    const dispatch = useDispatch();
    let pathname = window.location.pathname;
    const auth = useSelector((state) => state.firebase.auth);

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
        <div className='HeaderBar'>
            <Link to='/'>
                <h1 className='HeaderBar__title'>Walki</h1>
            </Link>
            <div className='Mobile-nav'>
                <Link to='/dogs'>
                    <div onClick={() => setPath('/dogs')} className={pathname === '/dogs' ? 'Mobile-nav-elm border-orange' : 'Mobile-nav-elm'}>
                        <p className={pathname === '/dogs' ? 'Mobile-nav-elm__icon black' : 'Mobile-nav-elm__icon'}><FaPaw className={pathname === '/dogs' ? 'rotate' : null} /></p>
                        <p className={pathname === '/dogs' ? 'Mobile-nav-elm__text black' : 'Mobile-nav-elm__text'}>View Dogs</p>
                    </div>
                </Link>
                {(!auth.isEmpty) && (
                    <>
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
                    </>
                )}
                
                {(auth.isEmpty) ? (
                    <Link to='/sign-in'>
                        <div onClick={() => setPath('/sign-in')} className={pathname === '/sign-in' ? 'Mobile-nav-elm border-orange black' : 'Mobile-nav-elm'}>
                            <p className={pathname === '/sign-in' ? 'Mobile-nav-elm__icon black' : 'Mobile-nav-elm__icon'}><FiLogIn /></p>
                            <p className={pathname === '/sign-in' ? 'Mobile-nav-elm__text black' : 'Mobile-nav-elm__text'}>Sign-In</p>
                        </div>
                    </Link>
                ) : (
                    <Link to="/">
                        <div onClick={signOut} className={pathname === '/login' ? 'Mobile-nav-elm border-orange black' : 'Mobile-nav-elm'}>
                            <p className={pathname === '/login' ? 'Mobile-nav-elm__icon black' : 'Mobile-nav-elm__icon'}><FiLogOut /></p>
                            <p className={pathname === '/login' ? 'Mobile-nav-elm__text black' : 'Mobile-nav-elm__text'}>Logout</p>
                        </div>
                    </Link>
                )}
                
                {(!auth.isEmpty) && (
                    <Link to='/profile'>
                        <div onClick={() => setPath('/profile')} className={pathname === '/profile' ? 'Mobile-nav-elm border-orange black' : 'Mobile-nav-elm'}>
                            <p className={pathname === '/profile' ? 'Mobile-nav-elm__icon black' : 'Mobile-nav-elm__icon'}><AiOutlineUser /></p>
                            <p className={pathname === '/profile' ? 'Mobile-nav-elm__text black' : 'Mobile-nav-elm__text'}>Profile</p>
                        </div>
                    </Link>
                )}
            </div >
        </div >
    )
}

export default HeaderBar;
