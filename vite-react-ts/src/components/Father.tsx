import { useRecoilState } from 'recoil';
import { counterState } from '../recoil/atom';
import Child from './Child';
const Father = () => {
  const [counter] = useRecoilState(counterState);
  return (
    <div>
      <h1>Father</h1>
      <div>{counter}</div>
      <Child />
    </div>
  );
};

export default Father;
