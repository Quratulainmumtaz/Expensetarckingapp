import React, { useState } from 'react';

import './App.css';
import Parent from './Parent';
import ValueContext from './ValueContext';


function App() {
 
 let Value = useState(81);
  return (
    <ValueContext.Provider value = {Value}>
      <div>
      Hellow world
      <Parent ></Parent>
      
      
     </div>


    </ValueContext.Provider>
    
  );
}

export default App;
