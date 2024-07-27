import React, { useMemo, useState } from 'react'
import './App.css'

const App = () => {
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(70);

  function onWeightchange(event){
    setWeight(event.target.value)
  }
  function onHeightchange(event){
    setHeight(event.target.value)
  }

  const output = useMemo(()=>{
    const calculateHeight = height /100;

    return ((weight/calculateHeight*calculateHeight)).toFixed(1)
  },[weight,height]);

  
  return (
    <main>
      <h1>project 4 :BMI calculator</h1>
      <div className='input-section'>
        <p className='slider-output'>
          weight:{weight}kg
        </p>
        <input className='Input-slider'
          type='range'
          
          min="40"
          max="180" 
          onChange={onWeightchange}/>

        <p className='slider-output'>height:{height}cm</p>
        <input className='input-slide'
          type='range'
          step='1'
          min='140'
          max='220'
          onChange={onHeightchange} />
      </div>

      <div className='output-section'>
        <p>your bmi is </p>
        <p className='output'>{output}</p>
      </div>
    </main>

  )
}

export default App