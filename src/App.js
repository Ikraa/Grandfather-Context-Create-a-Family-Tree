import { createContext } from 'react';
import { useState } from 'react';
import './App.css';
import GrandFather from './component/GrandFather/GrandFather';

export const RingContext = createContext('ring');


function App() {
  const [house, setHouse] = useState(2);
  const ornaments = "Gold Ring";

  return (
    <RingContext.Provider value={ ornaments }>
      <div className="App">
      <button onClick={()=>setHouse(house+1)}>Buy a new house</button>
      <GrandFather
      // house="5"
      house = {house}
      ></GrandFather>
    </div>
    </RingContext.Provider>
      
  );
}

export default App;
