import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const nav = useNavigate();
  const toShow = () => {
    nav('/show');
  };

  const toAns = () => {
    nav('/ans');
  };
  return (
    <div className="App">
      <div onClick={toShow}>go to show</div>
      <div onClick={toAns}>go to ans</div>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
