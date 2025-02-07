import React from 'react';
//import './App.css';
/*import Welcome from './components/welcome';
const App=()=>{
  return(
    <div style={{textAlign:'center',color:'green'}}>
    <Welcome name='Rahul' greeting='Hello!!'/>
    <Welcome name='sai' greeting='Hi!!'/>
    </div>
  )
}
export default App;*/
import Greeting from './components/Greeting';
function App(){
  const isLoggedIn=true;
  return(
    <div className='App'>
      <Greetings isLoggedIn={isLoggedIn}/>
    </div>
  )
}
export default App;