import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const NameCharacter = () => {
  const [namechar,setNameChar]=useState({})
       const {name} =useParams();
  useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(res => setNameChar(res.data))

   },[name])
  return (
    <div>
      {namechar.name}
    </div>
  );
};

export default NameCharacter;