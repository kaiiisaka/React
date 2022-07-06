import React, { useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/counter';

function App() {
   const [value, setvalue] = useState('React')
  
    return (
    <div className = "App">
      <ClassCounter/>
    </div>
    );
}

export default App;