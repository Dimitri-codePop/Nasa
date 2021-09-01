import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './styles.css';

import PropTypes from 'prop-types';

export default function Mars() {
  const [ fetchImage, setFetchImage ] = useState([]);
  const [ date, setDate] = useState("");

  useEffect(async () => {
    const now = new Date().toISOString().split('T')[0];
    const result = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2020-08-01&api_key=TGw3yb3SYCjTaMtCghavGF0t5Nu0rCZh963TyHzw`);
    setDate(now);
    setFetchImage(result.data.photos);
  }, [])

  console.log(fetchImage);
  return(
    <>

    </>
  );
  
  
}

Mars.propTypes = {

};
