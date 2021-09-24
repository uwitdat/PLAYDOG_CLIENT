import React, { useEffect, useState, useRef } from 'react'
import './HeaderBar.scss'

import { useHistory, Link } from "react-router-dom";
import { SET_ERRORS } from 'redux-store/types';
import { useDispatch } from 'react-redux';
import { useFirebase } from "react-redux-firebase";
import { FaUserCircle, FaPaw } from 'react-icons/fa'
import { AiOutlineMenu, AiFillPlusCircle, AiFillCalendar } from 'react-icons/ai'
import { FiLogOut } from 'react-icons/fi'
import { MdDashboard } from 'react-icons/md'


const HeaderBar = ({ expandMenu, setExpandMenu }) => {
    // const [expandMenu, setExpandMenu] = useState(false);
    const divRef = useRef(null);

    // collapses menu when clicked outside.
    const handleMenu = () => {
        // document.addEventListener("click", (e) => {
        //     if (divRef.current.contains(e.target)) {
        //         setExpandMenu(!expandMenu);
        //     } else {
        //         setExpandMenu(false);
        //     }
        // });
    };

    const handleItemClick = (param) => {
        console.log(param);
    };

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
        <div
            className='HeaderBar'
        >
            <Link to='/'>
                <h1 className='HeaderBar__title'>Walki</h1>
            </Link>

            <div
                ref={divRef}
                className={expandMenu ? "HeaderBar__border expand" : "HeaderBar__border"}
            >
                {/* Toggle */}
                <AiOutlineMenu
                    onClick={() => setExpandMenu(!expandMenu)}
                    className={
                        expandMenu
                        ? "HeaderBar__menu-item  anim" : "HeaderBar__menu-item"}
                />
                <Link to='/dashboard'>
                    <div
                        className={expandMenu ? "HeaderBar__row" : "HeaderBar__row opacity"}
                    >
                        <p>
                            <MdDashboard />
                        </p>
                        <span>Dashboard</span>
                    </div>
                </Link>

                <Link to='/dogs'>
                    <div
                        onClick={() => handleItemClick(`clicked`)}
                        className={expandMenu ? "HeaderBar__row" : "HeaderBar__row opacity"}
                    >
                        <p>
                            <FaPaw />
                        </p>
                        <span>View Dogs</span>
                    </div>
                </Link>

                <Link to='/events'>
                    <div
                        onClick={() => handleItemClick(`clicked`)}
                        className={expandMenu ? "HeaderBar__row" : "HeaderBar__row opacity"}
                    >
                        <p>
                            <AiFillCalendar />
                        </p>
                        <span>View Events</span>
                    </div>
                </Link>

                <Link to='/new-event'>
                    <div
                        onClick={() => handleItemClick(`clicked`)}
                        className={expandMenu ? "HeaderBar__row" : "HeaderBar__row opacity"}
                    >
                        <p>
                            <AiFillPlusCircle />
                        </p>
                        <span>New Event</span>
                    </div>
                </Link>

                <Link to='/profile'>
                    <div
                        onClick={() => handleItemClick(`clicked`)}
                        className={expandMenu ? "HeaderBar__row" : "HeaderBar__row opacity"}
                    >
                        <p>
                            <FaUserCircle />
                        </p>
                        <span>Profile</span>
                    </div>
                </Link>



                <div className={expandMenu ? "HeaderBar__profile" : "HeaderBar__profile opacity-profile"}>
                    <Link to='/sign-in'>
                        <div
                            style={{ border: 'none' }}
                            className={expandMenu ? "HeaderBar__row" : "HeaderBar__row opacity"}
                            onClick={signOut}
                        >
                            <p>
                                <FiLogOut />
                            </p>
                            <span>Logout</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeaderBar;
