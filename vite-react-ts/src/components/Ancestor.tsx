import Father from './Father';
import { useNavigate } from 'react-router-dom';
import { useRecoilSnapshot, useRecoilValue } from 'recoil';
import { counterState } from '../recoil/atom';
import { useEffect, useRef, useState } from 'react';

const Ancestor = () => {
  const counter = useRecoilValue(counterState);
  const ref = useRef(counter);
  useEffect(() => {
    console.log('ancestor', counter);
    return () => {
      console.log('ancestor unmount', counter, ref.current);
    };
  }, []);
  useEffect(() => {
    ref.current = counter;
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
