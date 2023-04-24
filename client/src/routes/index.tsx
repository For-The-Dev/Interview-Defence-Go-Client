import { Route, Routes as ReactRoutes } from 'react-router-dom';
import Main from '../pages/Main';
import Test from '../pages/Test';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Main />} />
      <Route path="/test" element={<Test />} />
    </ReactRoutes>
  );
};

export default Routes;
