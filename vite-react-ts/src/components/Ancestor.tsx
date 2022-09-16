import Father from './Father';
import { useNavigate } from 'react-router-dom';
import { useRecoilSnapshot, useRecoilState, useRecoilValue } from 'recoil';
import { counterState, countSelector } from '../recoil/atom';
import { useEffect, useState } from 'react';

const Ancestor = () => {
  const counter = useRecoilValue(counterState);
  const [count, setCount] = useState(counter);
  const snapshot = useRecoilSnapshot();
  useEffect(() => {
    console.log('ancestor', counter);
    return () => {
      console.log('ancestor unmount', count, snapshot);
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
