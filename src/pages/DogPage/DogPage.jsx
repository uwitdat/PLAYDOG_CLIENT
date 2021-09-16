import local from 'api/local';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "./DogPage.scss"

const DogPage = () => {
  const { id } = useParams();
  const [dog, setDog] = useState({});

  const getDog = async () => {
    try {
        const response = await local.get('/pets/' + id)
        
        setDog(response.data);
    } catch(err) {
        console.log(err)
    }
}
  
  useEffect(() => {
    setDog(getDog());
  }, []);

  return (
    <div className="container">
      <h1>Welcome to the {dog.name}'s page!</h1>
    </div>
   );
}

export default DogPage;