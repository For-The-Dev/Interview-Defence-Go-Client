import { Route, Routes as ReactRoutes } from 'react-router-dom';
import Main from '../pages/Main';
import Result from '../pages/Result';
import Test from '../pages/Test';
import MyPage from '../pages/MyPage';
import Interview from '../pages/Interview';
import Login from '../pages/Login';
import ReplyInterview from '../pages/ReplyInterview';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Main />} />
      <Route path="/test" element={<Test />} />
      <Route path="/result" element={<Result />} />
      <Route path="/myPage" element={<MyPage />} />
      <Route path="/interview" element={<Interview />} />
      <Route path="/interview/:id" element={<ReplyInterview />} />
      <Route path="/login" element={<Login />} />
    </ReactRoutes>
  );
};

export default Routes;
