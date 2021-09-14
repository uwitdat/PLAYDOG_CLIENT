import local from 'api/local'
import React, { useEffect } from 'react'
import './HomePage.css'

const HomePage = () => {

    const getDogs = async () => {
        try {
            const response = await local.get('/pets')

            console.log(response)
        } catch(err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getDogs()
    }, [])
    return (
        <div className='HomePage__container'>
            <h1>HomePage</h1>
        </div>
    )
}

export default HomePage
