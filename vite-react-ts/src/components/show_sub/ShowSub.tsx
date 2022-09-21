import { useDispatch } from 'react-redux';
import { increment } from './reducer/counter_reducer';

const ShowSub = () => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(increment());
  };
  return (
    <>
      <h1>Show Sub</h1>
      <div>
        <button onClick={onClick}>+</button>
      </div>
    </>
  );
};

export default ShowSub;
