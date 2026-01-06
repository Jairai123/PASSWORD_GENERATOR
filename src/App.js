import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {LC ,SC , UC , NC} from  './data/passchar'

function App() {

  let [uppercase,setuppercase]=useState(false)
  let [lowercase,setlowercase]=useState(false)
  let [number,setnumber]=useState(false)
  let [char,setchar]=useState(false)
  let [passlength,setpasslength]=useState(10)
  let [fpass,setfpass]=useState('')

  let createpassword =()=>{
    let addpass='';
    let finalpass='';
    if(uppercase||lowercase||number||char){
      if(uppercase) addpass+=UC; 
      if(lowercase) addpass+=LC;
      if(number) addpass+=NC;
      if(char) addpass+=SC;
      console.log(addpass);
      for(let i=0;i<Number(passlength);i++){
        finalpass += addpass.charAt(Math.floor(Math.random() * addpass.length));
      }
     
      setfpass(finalpass)

    }
     else{
       toast.error('please select atleast one option')
     }

  }
  let copypass=()=>{
    navigator.clipboard.writeText(fpass)
    toast.success('password is copy');
  }





  return (
    <>
      <div className='passwordbox'>
        <h2>
          Password Generator
        </h2>
        <div className='passwordboxin'>
          <input type='text'  value={fpass} readOnly /><button onClick={copypass}>copy</button>
        </div>

        <div className='passlength'>
          <label>Password Length</label>
          <input type='number'min={10} max={20} value={passlength} onChange={(event)=>setpasslength(event.target.value)}/>
        </div>

        <div className='passlength'>
          <label>Include lowercase</label>
          <input type='checkbox' checked={lowercase} onChange={()=>setlowercase(!lowercase)} />
        </div>

         <div className='passlength'>
          <label>Include uppercase</label>
          <input type='checkbox' checked={uppercase} onChange={()=>setuppercase(!uppercase)}  />
        </div>

         <div className='passlength'>
          <label>Include Number</label>
          <input type='checkbox' checked={number} onChange={()=>setnumber(!number)}  />
        </div>

         <div className='passlength'>
          <label>Include Special Character</label>
          <input type='checkbox' checked={char} onChange={()=>setchar(!char)}  />
        </div>
 <button className='btn' onClick={createpassword}>Generate Password</button>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
