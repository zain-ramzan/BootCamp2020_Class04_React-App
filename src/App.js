import React, {useState} from 'react';
import './App.css';

function App() {
  let [count, setCount] = useState(0);
  let [Mode, setMode] = useState(true);
  return (
    <div className={`${Mode ? 'Daylight' : 'Nightlight'}`}>
      <h1>Assalm-u-Aliakum ! My name is <b>Zain Ramzan Gorsi</b></h1>
      <h3>Class No # 04 | React Base App | BootCamp2020-PanaCloud | 29/July/2020</h3>
      <hr/>
      <h2>Mode : {Mode ? 'Daylight' : 'Nightlight'}</h2>
      <button className="btn" onClick={()=> setMode(!Mode)}>Change the Mode</button>
      <hr/>
      <h2>Count the Counting : {count}</h2>
      <button className="btn" onClick={()=> setCount(++count)}>Start the Counter!</button>
      <button className="btn" onClick={() => window.location.reload(false)}>Click to Refresh!</button>
      <hr/>
    </div>
  );
}

export default App;