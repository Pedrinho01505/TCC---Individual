import { createBrowserRouter } from 'react-router-dom';
import Materiais from './pages/Materiais';
import Comousar from './pages/Comousar';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Materiais />,
  },
  {
    path: '/comousar',
    element: <Comousar />,
  },
]);

export default router;