import React, { useState } from "react";

function App(){
    const [step, setStep] = useState(1)
    const [count, setCount] = useState(0)

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

    return <div>
        <Steps step={step} onStepInc={handleStepInc} onStepDec={handleStepDec} />
        <Counts count={count} onDec={handleDec} onInc={handleInc}/>
        <Display count={count} date={date}/>
    </div>
}

function Steps({ step, onStepInc, onStepDec }){
    return <div>
        <button onClick={onStepDec}>-</button>
        <span>Step: {step}</span>
        <button onClick={onStepInc}>+</button>
    </div>
}
 
function Counts({ count, onInc, onDec }) {
    return <div>
        <button onClick={onDec}>-</button>
        <span>Count: {count}</span>
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