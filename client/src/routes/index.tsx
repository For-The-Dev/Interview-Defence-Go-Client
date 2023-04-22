import { Route, Routes as ReactRoutes } from 'react-router-dom';
import Test from '../pages/Test';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/test" element={<Test />} />
    </ReactRoutes>
  );
};

export default Routes;
