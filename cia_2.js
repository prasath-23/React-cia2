import React from 'react'
import { useState } from 'react';
import './style.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import Contact from './contact';
// import Home from './home';
// import { Link } from 'react-router-dom';
export default function Dropdown() {
  // this.state = {
  //   value: 1 ,
  // };
    const [color, setCurrentValue] = useState('');
    const sample = (e) => {
      setCurrentValue(e.target.value);
      console.log("Sample Function() " + color) ;
    }
  return (
    <div>
    <select onChange={e => sample(e)} >
        <option></option>
        <option style={{color: "red"}}>Red</option>
        <option style={{color: "blue"}}>Blue</option>
        <option style={{color: "green"}}>Green</option>
    </select>
    <div id={color}></div>
    <br/>
    
    </div>
  );
}
