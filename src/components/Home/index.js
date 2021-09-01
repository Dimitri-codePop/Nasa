import React, { useEffect, useState } from 'react';
import axios from 'axios';


import './styles.css';

import PropTypes from 'prop-types';

export default function Home() {
  const [ fetchImage, setFetchImage ] = useState([]);

  useEffect(async () => {
    const result = await axios.get('https://api.nasa.gov/planetary/apod?api_key=TGw3yb3SYCjTaMtCghavGF0t5Nu0rCZh963TyHzw');
    setFetchImage(result.data);
  }, []);
  return (
    <>
      <h1>Nasa Image</h1>
      <h2>{fetchImage.title}</h2>
      <p>{fetchImage.explanation}</p>
      <img src={fetchImage.hdurl} />
    </>
  );
}

Home.propTypes = {

};
