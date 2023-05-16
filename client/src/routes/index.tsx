import { Route, Routes as ReactRoutes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import ResultPage from '../pages/ResultPage';
import MyPage from '../pages/MyPage';
import Interview from '../pages/Interview';
import LoginPage from '../pages/LoginPage';
import ReplyInterview from '../pages/ReplyInterview';
import PrivateRoute from './PrivateRoute';
import useUser from '../hooks/useUser';

const Routes = () => {
  const { user } = useUser();
  return (
    <ReactRoutes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<PrivateRoute authentication={user ? true : false} />}>
        <Route path="/result" element={<ResultPage />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/interview/:id" element={<ReplyInterview />} />
      </Route>
    </ReactRoutes>
  );
};

export default Routes;
