import { useNavigate } from 'react-router-dom';

const Show = () => {
  const nav = useNavigate();
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
    </div>
  );
};

export default Show;
