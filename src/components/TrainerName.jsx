import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { nameTrainer } from '../store/slices/name.slice';


const TrainerName = () => {
  const [name,setName]=useState("")
  const navigate=useNavigate();
  const  dispatch= useDispatch()

  const enterName=()=>{

    dispatch(nameTrainer (name))

    
      navigate("/character")
     
  }
  return (
    <div className='trainer-name'>
      <h2>¡Hello Trainer!</h2>
      <div className='conteiner-animation'>
       <p>bienvenido  para comenzar dame tu nombre..<span>.</span></p>
       </div>
      <div className='conteiner-go'>
      <input type="text"  onChange={e => setName(e.target.value)} value={name} placeholder="name"/>
      <button onClick={enterName}>Go trainer</button>
     </div>
    </div>
  );
};

export default TrainerName;
