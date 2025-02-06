import React, { useState } from "react";
const msg = [
    "Learn",
    "grind",
    "then earn"
]



function App(){


    const [close, setClose] = useState(false)
    const [count, setCount] = useState(1)
    function handleNext() {
        if (count < 3) setCount(count=> count + 1)
    }

    function handlePrev() {
        console.log(count)
        if (count >1 ) setCount(count => count - 1)
    }
   const handleClose = () =>{
        setClose(!close)
    }

  
    return <>
    <button onClick={handleClose}>x</button>
     {close &&
            <div className="steps">
                <StepDispComp count={count} />
                <StepComp count={count} />
                <Buttons onNext={handleNext} onPrev={handlePrev} />
            </div>
     }
    </>
    // else return null;
}


function StepDispComp(props){
    const {count} = props;
    // console.log(count)
    return <div className="step-nums">
        {msg.map((msg, i) => (
            <div key={i} className={count >= i+1 ? "active" : ""}>
                {i + 1}
            </div>
        ))}
    </div>
}
function StepComp({ count }) {
    return <p>
        Step {count}: {msg[count - 1]}
    </p>
}

function Buttons({ onNext, onPrev }) {

    return <div className="step-nums">
        <button onClick={onPrev}>
            Previous
        </button>
        <button onClick={onNext}>
            Next
        </button>
        </div>
}

export default App;