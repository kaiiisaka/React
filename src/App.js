import React, { useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/counter';
import './styles/App.css';

function App() {
   const [value, setvalue] = useState('инпут текст')
  
    return (
    <div className = "App">
      <div className = "post">
        <div className ="post__content">
          <strong>JavaScript</strong>
          <div>
            Js - это язык программирования
          </div>
        </div>
        <div className='post__btns'>
          <button>Удалить</button>
        </div>
      </div>
    </div>
    );
}

export default App;