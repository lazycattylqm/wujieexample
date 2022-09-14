import { useContext } from 'react';
import { ContextWrapper } from '../context/counterContext';
import { counter } from './Counter';

const Child = () => {
  const { store, dispatch } = useContext(ContextWrapper);

  return (
    <div>
      <h1>Child</h1>
      {store.count}
      <div>
        <button
          onClick={() => {
            dispatch('increment');
            counter.increment();
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch('decrement');
            counter.decrement();
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Child;
