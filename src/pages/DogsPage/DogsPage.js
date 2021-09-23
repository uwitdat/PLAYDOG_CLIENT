import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Breeds from './Breeds'
import { FaPaw } from 'react-icons/fa'
import './DogsPage.scss'
import Pet from 'services/Pets'


const DogsPage = ({ user, dogs }) => {

  const [hideForm, setHideForm] = useState(true)

  const [newDog, setNewDog] = useState({
    name: '',
    breed: '',
    age: '',
    description: '',
    size: 'S',
    gender: 'M',
    image: null,
    owner: ''
  })

  useEffect(() => {
    Pet.getAllPets()
  }, [])

  useEffect(() => {
    if (Object.keys(user).includes(`id`)) {
      setNewDog({
        ...newDog,
        owner: user.id
      }
      )
    }
  }, [])

  //RESET INPUT FIELDS AFTER SUBMISSION


  const handleOnSubmit = (e) => {
    let createNewDog = newDog
    createNewDog.owner = user.id

    e.preventDefault()
    console.log('NEWDOG++>', createNewDog)
    if (user.id !== '') {
      Pet.createNewPet(createNewDog)
    } else {
      console.log('ERROR')
    }
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

DogsPage.propTypes = {
}

const mapStateToProps = (state) => {

  return {
    newPet: state.pets.newPet,
    user: state.firebase.profile,
    dogs: state.pets.pets
  }

};

export default connect(mapStateToProps, {})(DogsPage);

