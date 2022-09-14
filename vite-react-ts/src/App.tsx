import { useState, useRef } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Father from './components/Father';
import Ancestor from './components/Ancestor';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Ancestor />
    </div>
  );
}

export default App;
