import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './styles.css';

import PropTypes from 'prop-types';

export default function Home() {
  const [ fetchImage, setFetchImage ] = useState([]);

  useEffect(async () => {
    const result = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`);
    setFetchImage(result.data);
  }, []);
  return (
    <>
    <figure className="picture__container">
      <img src={fetchImage.hdurl} className="picture" />
      <figcaption className="picture__title">{fetchImage.title}</figcaption>
      <p className="picture__desc">{fetchImage.explanation}</p>
    </figure>
    </>
  );
}

Home.propTypes = {

};
