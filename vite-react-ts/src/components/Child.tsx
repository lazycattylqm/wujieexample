import { useRecoilState } from 'recoil';
import { counterState } from '../recoil/atom';

const Child = () => {
  const [counter, setCounter] = useRecoilState(counterState);
  return (
    <div>
      <h1>Child</h1>
      {counter}
      <div>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Child;
