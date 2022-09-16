import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Ancestor from '../components/Ancestor';
import Show from '../components/Show';
export const route = createBrowserRouter([
  {
    path: '/show',
    element: <Show />,
  },
  {
    path: '/ans',
    element: <Ancestor />,
  },
  {
    path: '/',
    element: <App />,
  },
  {
    path: '*',
    element: <App />,
  },
]);
