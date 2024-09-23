import { useState } from 'react';
import './App.css'
import TextField from '@mui/material/TextField';
function App() {
  const [principle , setPrinciple] =useState("")
  const [rate , setRate] = useState("")
  const [year ,setYear] = useState("")
  const [interest , setInterest] = useState("")
  const [isPrinciple,setisPrinciple] = useState(true)
  const [isRate , setisRate] = useState(true)
  const [isYear , setisYear] = useState(true)

  const validate =(e)=>{
    console.log(e.target.name);
    
    console.log(!!e.target.value.match('^[0-9]*$'));

    if(!!e.target.value.match('^[0-9]*$')){
      if(e.target.name=='principle'){
        setPrinciple(e.target.value)
        setisPrinciple(true)
      }
      else if(e.target.name=='rate'){
        setRate(e.target.value)
        setisRate(true)
      }
      else{
        setYear(e.target.value)
        setisYear(true)
      }
    }
    else{
      if(e.target.name=='principle'){
        setPrinciple(e.target.value)
        setisPrinciple(false)
      }
      else if(e.target.name=='rate'){
        setRate(e.target.value)
        setisRate(false)
      }
      else{
        setYear(e.target.value)
        setisYear(false)
      }
    }
    
  }
  
  const handleReset=()=>{
    setPrinciple("")
    setRate("")
    setYear("")
    setisPrinciple(true)
    setisRate(true)
    setisYear(true)
    setInterest(0)
  }
  const handleCalculate =()=>{
    setInterest((principle*rate*year)/100)
  }

  return (
    <>
      <div className='row justify-content-center'>
        <div className='col-md-4 mt-5 text-black p-4 bg-light'>
          <h2>Simple Interest App</h2>
          <h4>Calculate your simple interest easily</h4>
          <div className='w-full bg-secondary rounded-4 d-flex justify-content-center align-items-center flex-column' style={{height:'120px'}}>
            <h1>₹{interest}</h1>
            <p>Total Simple Interest</p>
          </div>
        <div>
        <TextField name='principle' id="outlined-basic" value={principle} className='form-control mt-3' label="Principle Amount" variant="outlined" onChange={(e)=>validate(e)} />
          {!isPrinciple && <span className='text-danger'>*invalid input</span>}
        <TextField name='rate' id="outlined-basic"value={rate} className='form-control mt-3' label="Rate of Interest" variant="outlined" onChange={(e)=>validate(e)} />
        {!isRate && <span className='text-danger'>*invalid input</span>}

        <TextField name='year' id="outlined-basic" value={year} className='form-control mt-3' label="Year" variant="outlined" onChange={(e)=>validate(e)}/>
        {!isYear && <span className='text-danger'>*invalid input</span>}

          
          <div className='d-flex justify-content-between'>
            <button className='btn btn-success px-4 py-3 mt-4' disabled={isPrinciple && isRate && isYear ?false:true} onClick={handleCalculate}>Calculate</button>
            
            <button className='btn btn-danger px-4 py-3 mt-4' onClick={handleReset}>Reset</button>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
