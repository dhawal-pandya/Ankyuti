import { useState } from 'react';
import './App.css';
import Number from './Number';

function App() {
  const [number, setNumber] = useState('0');

  const onChangeHandler = (e) => {
    e.preventDefault();
    setNumber(e.target.value || 0);
  };

  return (
    <div className='App'>
      <header>
        <input
          type='number'
          name='number'
          onChange={onChangeHandler}
          className='numberInput'
        />
        <Number number={number} />
      </header>
    </div>
  );
}

export default App;
