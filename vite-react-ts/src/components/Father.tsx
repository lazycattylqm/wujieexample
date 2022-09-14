import { useEffect, useContext } from 'react';
import { ContextWrapper } from '../context/counterContext';
import Child from './Child';
const Father = () => {
  const { store } = useContext(ContextWrapper);
  return (
    <div>
      <h1>Father</h1>
      <div>{store.count}</div>
      <Child />
    </div>
  );
};

export default Father;
