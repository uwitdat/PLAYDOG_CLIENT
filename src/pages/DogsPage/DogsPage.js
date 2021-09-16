import local from 'api/local'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './DogsPage.scss'

const DogsPage = () => {
    const [dogs, setDogs] = useState([]);

    console.log('DOGS___>', dogs)

    const getDogs = async () => {
        try {
            const response = await local.get('/pets')
            setDogs(response.data.results);
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getDogs()
    }, [])
    return (
        <div className="Dogs">
            {dogs && dogs.map((dog) => {
                return (
                    <div className='Dogs__container' key={dog.id}>
                        <h1 className='Dogs__title'>{dog.name}</h1>
                        <p className='Dogs__breed'>{dog.breed}</p>
                        <p className='Dogs__age'>{dog.age} Years old</p>
                        <img style={{ height: '20rem', width: '20rem', borderRadius: '50%', objectFit: 'cover', marginTop: '1rem' }} src='https://www.adorama.com/alc/wp-content/uploads/2018/02/shutterstock_591809333.jpg' alt='dog' />
                        <p className='Dogs__desc'>{dog.description}</p>
                        <div className='Dogs__line'></div>
                    </div>
                )
            })}
        </div>
    )
}

export default DogsPage
