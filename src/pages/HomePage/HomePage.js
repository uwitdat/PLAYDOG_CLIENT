import local from 'api/local'
import React, { useEffect, useState } from 'react'
import Loader from 'components/Loader/Loader'
import './HomePage.css'

const HomePage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(function () {
            setLoading(false);
        }, 3000);
    }, []);

    const getDogs = async () => {
        try {
            const response = await local.get('/pets')

            console.log(response)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getDogs()
    }, [])
    return (

        <div className='HomePage__container'>
            {loading ? <Loader /> : <h1>HomePage</h1>}

        </div>
    )
}

export default HomePage
