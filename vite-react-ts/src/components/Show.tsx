import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ShowSub from './show_sub/ShowSub';
import { reset } from './show_sub/reducer/counter_reducer';
import { useEffect, useRef } from 'react';

const Show = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const value = useSelector((state) => state.counter.count);
  const a = useRef(value);
  useEffect(() => {
    return () => {
      console.log('unmount show', value, a);
      dispatch(reset());
    };
  }, []);
  return (
    <div>
      <div
        onClick={() => {
          nav('/');
        }}
      >
        back
      </div>
      <h1>show</h1>
      <div>value is {value}</div>
      <ShowSub />
    </div>
  );
};

export default Show;
