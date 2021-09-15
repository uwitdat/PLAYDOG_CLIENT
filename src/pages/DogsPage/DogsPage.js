import local from 'api/local'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './DogsPage.css'

const DogsPage = () => {
    const [dogs, setDogs] = useState([]);

    const getDogs = async () => {
        try {
            const response = await local.get('/pets')
            setDogs(response.data.results);
        } catch(err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getDogs()
    }, [])
    return (
        <div className="container">
            {dogs && dogs.map((dog) => {
                return (
                    <>
                        <Link to={`/dogs/${dog.id}`} key={dog.id}>{dog.name} - {dog.breed}</Link>
                        <br/>
                    </>
                )
            })}
        </div>
    )
}

export default DogsPage
