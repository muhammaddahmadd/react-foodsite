import React, { useState } from "react";

function App(){
    const [step, setStep] = useState(1)
    const [count, setCount] = useState(0)
    const [slider, setSlider] = useState(0)
    const date = new Date();
    date.setDate(date.getDate() + count);


    function handleStepInc() {
        setStep(step + 1)
    }
    function handleStepDec() {
        setStep(step => step - 1)
    }

    function handleInc(){
        setCount(count=>  count + step)
    }
    function handleDec() {
        setCount(count => count - step)
    }
    function handleSlider(e) {
        setSlider(e.target.value)
    }

    return <div>
        <Steps step={step} slider={slider} handleSlider={handleSlider} setSlider={setSlider} onStepInc={handleStepInc} onStepDec={handleStepDec} />

        <Counts count={count} onDec={handleDec} onInc={handleInc}/>
        <Display count={count} date={date}/>
    </div>
}

function Steps({ slider,step, onStepInc, onStepDec, handleSlider }){
    return <div>
        <input type="range" value={slider} onChange={(e) => handleSlider(e)}/>
        <span> {slider}</span>
        {/* <button onClick={onStepDec}>-</button>
        <span>Step: {step}</span>
        <button onClick={onStepInc}>+</button> */}
    </div>
}
 
function Counts({ count, onInc, onDec }) {
    return <div>
        {/* <button onClick={onDec}>-</button>
        <span>Count: {count}</span>
        <button onClick={onInc}>+</button> */}
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