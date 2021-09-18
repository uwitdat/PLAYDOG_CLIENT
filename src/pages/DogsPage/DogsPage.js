import local from 'api/local'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Breeds from './Breeds'
import { FaPaw } from 'react-icons/fa'
import './DogsPage.scss'

const DogsPage = () => {
  const profile = useSelector((state) => state.firebase.auth);

  const [dogs, setDogs] = useState([]);

  const [hideForm, setHideForm] = useState(true)

  const [newDog, setNewDog] = useState({
    name: '',
    breed: '',
    age: '',
    description: '',
    size: 'S',
    gender: 'M',
    image: null,
    co_owners: ["http://localhost:8000/api/users/1/"],
    owner: "http://localhost:8000/api/users/1/"
  })

  const getDogs = async () => {
    try {
      const response = await local.get('/pets/')
      setDogs(response.data.results);
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getDogs()
  }, [])

  //RESET INPUT FIELDS AFTER SUBMISSION
  const clear = () => {
    setNewDog({
      name: '',
      breed: '',
      age: '',
      description: '',
      size: 'S',
      gender: 'M',
      image: null,
      co_owners: ["http://localhost:8000/api/users/1/"],
      owner: "http://localhost:8000/api/users/1/"
    })
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    const result = await local.post('/pets/', newDog)
    setDogs([...dogs, result.data])
    clear()
  }

  const handleRevealForm = () => {
    setHideForm(!hideForm)
  }

  return (
    <div className="Dogs container">
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
      <div className='NewDog-Form__title'>
        <p onClick={handleRevealForm}><FaPaw /></p>
        <h1> CLICK THE PAW TO ENTER A NEW DOG</h1>
      </div>
      <form onSubmit={handleOnSubmit} className={hideForm ? 'hidden' : 'NewDog-Form'}>
        <label
          className='NewDog-Form__label'
          for='name'>Name:
        </label>
        <input type='text'
          id='name'
          className='NewDog-Form__input'
          placeholder='Name'
          value={newDog.name}
          onChange={(e) => setNewDog({
            ...newDog,
            name: e.target.value
          })}
        />
        <br />
        <label
          className='NewDog-Form__label'
          for='age'>Age:
        </label>
        <input type='number'
          id='age'
          className='NewDog-Form__input'
          placeholder='Age'
          value={newDog.age}
          onChange={(e) => setNewDog({
            ...newDog,
            age: parseInt(e.target.value)
          })}
        />
        <br />
        <label
          className='NewDog-Form__label'
          for='desc'>Description:
        </label>
        <textarea
          id='desc'
          className='NewDog-Form__desc'
          placeholder='Description'
          value={newDog.description}
          onChange={(e) => setNewDog({
            ...newDog,
            description: e.target.value
          })}
        />
        <br />
        <label
          className='NewDog-Form__label'
          for='breed'>breed:
        </label>
        <select name='breed'
          className='NewDog-Form__select'
          id='breed'
          value={newDog.breed}
          onChange={(e) => setNewDog({
            ...newDog,
            breed: e.target.value
          })}>
          {Breeds.map((breed) => (
            <option value={breed.name}>{breed.name}</option>
          ))}
        </select>
        <br />

        <label
          className='NewDog-Form__label'
          for='size'>size:</label>
        <select name='size'
          className='NewDog-Form__select'
          id='size'
          value={newDog.size}
          onChange={(e) => setNewDog({
            ...newDog,
            size: e.target.value
          })}>
          <option value='S'>S</option>
          <option value='M'>M</option>
          <option value='L'>L</option>
        </select>
        <br />
        <label
          className='NewDog-Form__label'
          for='gender'>gender:</label>
        <select name='gender'
          className='NewDog-Form__select'
          id='gender'
          value={newDog.gender}
          onChange={(e) => setNewDog({
            ...newDog,
            gender: e.target.value
          })}>
          <option value='M'>M</option>
          <option value='F'>F</option>
        </select>
        <br />
        <button className='NewDog-Form__btn' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default DogsPage
