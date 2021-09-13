import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import './ProfilePage.css'

const ProfilePage = () => {
    const auth = useSelector((state) => state.firebase.auth);

    useEffect(() => {
        console.log(auth);
    }, []);

    return (
        <div className="container profile-section">
            <h1>Welcome {auth.email}</h1>
        </div>
    )
}

export default ProfilePage;