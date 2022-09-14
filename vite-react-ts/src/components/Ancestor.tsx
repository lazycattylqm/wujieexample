import { useEffect, useReducer, useState } from 'react';
import { ContextWrapper, context, reducer } from '../context/counterContext';
import Father from './Father';
import { counter } from './Counter';

const Ancestor = () => {
  const [store, dispatch] = useReducer(reducer, context);
  const [num, setNum] = useState(1);

  useEffect(() => {
    return () => {
      console.log('ancestor unmount', counter.get());
    };
  }, [num]);

  return (
    <>
      <h1>Ance</h1>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        unmont by num
      </button>
      <div>{num}</div>
      <ContextWrapper.Provider value={{ store, dispatch }}>
        <Father />
      </ContextWrapper.Provider>
    </>
  );
};

export default Ancestor;
