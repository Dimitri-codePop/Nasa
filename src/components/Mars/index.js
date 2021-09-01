import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './styles.css';

export default function Mars() {
  const [fetchImage, setFetchImage] = useState([]);
  const [image, setImage] = useState('');
  const [message, setMessage] = useState('');

  useEffect(async () => {
    try {
      const yesterday = new Date((new Date()).valueOf() - 1000*60*60*24).toISOString().split('T')[0];

      const result = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${yesterday}&api_key=TGw3yb3SYCjTaMtCghavGF0t5Nu0rCZh963TyHzw`);
      if (result.data.photos.length < 1) {
        setMessage('Aucune photo prise hier par notre copain le Rover. ');
      }
      setFetchImage(result.data.photos);
    }
    catch (error) {
      console.log(error);
      setMessage('Une erreur serveur est survenue');
    }
  }, []);

  useEffect(() => {
    const images = fetchImage.map((objet, i) => {
      return(
        <div key={i}>
          <img src={objet.img_src} alt={objet.id} />
        </div>
      )
    })
    setImage(images);
  }, [fetchImage]);
  return (
    <>
      {image}
      <p>{message}</p>
    </>
  );
}
