import { Route, Routes as ReactRoutes } from 'react-router-dom';
import Main from '../pages/Main';
import Result from '../pages/Result';
import Test from '../pages/Test';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Main />} />
      <Route path="/test" element={<Test />} />
      <Route path="/result" element={<Result />} />
    </ReactRoutes>
  );
};

export default Routes;
