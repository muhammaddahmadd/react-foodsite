import React, { useState } from "react";

function App(){
    const [step, setStep] = useState(1)
    const [count, setCount] = useState(0)
    const [slider, setSlider] = useState(1)
    const date = new Date();
    date.setDate(date.getDate() + count);


 

    function handleInc(){
        setCount(count => count + slider)
    }
    function handleDec() {
        setCount(count => count - slider)
    }
    function handleSlider(e) {
        setSlider(Number(e.target.value))
    }
    function handleInputCount(e){
        setCount(e.target.value)
    }

    return <div>
        <Steps step={step} slider={slider} handleSlider={handleSlider} setSlider={setSlider} />

        <Counts count={count} handleInputCount={handleInputCount} onDec={handleDec} onInc={handleInc}/>
        <Display count={count} date={date}/>
    </div>
}

function Steps({ slider, step, onStepInc, onStepDec, handleSlider }){
    return <div>
        <input type="range" value={slider} onChange={(e) => handleSlider(e)}/>
        <span> {slider}</span>
        {/* <button onClick={onStepDec}>-</button>
        <span>Step: {step}</span>
        <button onClick={onStepInc}>+</button> */}
    </div>
}
 
function Counts({ count, handleInputCount, onInc, onDec }) {
    return <div>
        
        <button onClick={onDec}>-</button>
        <input type="number" value={count} onChange={(e)=> handleInputCount(e)}/>
        <button onClick={onInc}>+</button>
    </div>
}

function Display({ date, count }){
    return <div>
        <p>
            {count === 0 ? "Today is" : `${Math.abs(count)} days from today is`} {date.toDateString()}
        </p>
    </div>
}

export default App;