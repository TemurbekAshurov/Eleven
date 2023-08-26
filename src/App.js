import React, { useState } from 'react';
import Tours from './Companents/Tours';
import Data from './data';
import './App.css';

function App() {
  const [state , setState] = useState(Data)
  const DellItem = (id)=>{
     const NewData = state.filter((item)=> item.id !== id)
     setState(NewData)
  }
  const Refresh = ()=>{
      setState(Data)
  }
  return (
  <main>
    <Tours DelFun={DellItem} Ref={Refresh} Malumot={state}/>
  </main>
  );
}

export default App;
