/*import React, { useReducer } from 'react';
import appleFruit from './image.png'; // Adjust the path if needed

// reducer function to track number of apples
//function appleReduce(state = 3, action) {
  switch (action.type) {
    case 'ADD_APPLE':
      return state + 1;
    case 'EAT_APPLE':
      return state - 1;
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(appleReduce);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Apple Counter</h1>
      <div style={{ marginTop: '20px' }}>
        <img src={appleFruit} alt="apple" width="50" height="50" />
        <img src={appleFruit} alt="apple" width="50" height="50" />
        <img src={appleFruit} alt="apple" width="50" height="50" />
      </div>
      <p>Number of apples: {state}</p>
      <button onClick={() => dispatch({ type: 'ADD_APPLE' })}>ADD APPLE</button>
      <button onClick={() => dispatch({ type: 'EAT_APPLE' })}>EAT APPLE</button>
    </div>
  );
}

export default App;*/

/*function App(){
  const handleClick=()=>{
    alert("Button clicked")
  };
  return(
    <button onClick={handleClick}>Click Me</button>
  )
}
export default App;*/

/*import React ,{useState}from "react";
function App(){
  const[text,setText]=useState("")
  const handleChange=(event)=>{
    setText(event.target.value)
    //update the text state with value input
  }

return(
  <div>
    <input type="text" value ={text} onChange={handleChange}></input>
    <p>Your Text: {text}</p>
  </div>
)
}
export default App;*/

import React ,{useState}from "react";
function App(){
  const[isHovered ,setIsHovered]=useState(false);
  const handleMouseEnter=()=>{
    setIsHovered(true);
  }
  const handleMouseLeave=()=>{
    setIsHovered(false);
  };
  return(
    <div>
      <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
      style={{backgroundcolor:"isHovered ?' lightblue' : lightgray , color:isHovered? 'white':'black' " }}>Hover Me</button>
      {isHovered && <p>Mouse is over the button!</p>}
     </div>

  )
}
export default App;