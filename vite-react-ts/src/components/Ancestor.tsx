import Father from './Father';
import { useNavigate } from 'react-router-dom';
import { useRecoilSnapshot, useRecoilValue } from 'recoil';
import { counterState } from '../recoil/atom';
import { useEffect, useState } from 'react';

const Ancestor = () => {
  const counter = useRecoilValue(counterState);
  const [count, setCount] = useState(counter);
  const snapshot = useRecoilSnapshot();
  const printCount = () => {
    console.log('count', counter);
  };
  useEffect(() => {
    console.log('ancestor', counter);
    return () => {
      printCount();
    };
  }, []);
  useEffect(() => {
    console.log('set effect ancestor', counter, snapshot);
    setCount(counter);
  }, [counter]);
  const nav = useNavigate();
  return (
    <>
      <div
        onClick={() => {
          nav('/');
        }}
      >
        back
      </div>
      <h1>Ance</h1>
      <div>{counter}</div>
      <Father />
    </>
  );
};

export default Ancestor;
