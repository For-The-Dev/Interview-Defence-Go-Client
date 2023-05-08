import { Route, Routes as ReactRoutes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import ResultPage from '../pages/ResultPage';
import Test from '../pages/Test';
import MyPage from '../pages/MyPage';
import Interview from '../pages/Interview';
import LoginPage from '../pages/LoginPage';
import ReplyInterview from '../pages/ReplyInterview';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<MainPage />} />
      <Route path="/test" element={<Test />} />
      <Route path="/result" element={<ResultPage />} />
      <Route path="/myPage" element={<MyPage />} />
      <Route path="/interview" element={<Interview />} />
      <Route path="/interview/:id" element={<ReplyInterview />} />
      <Route path="/login" element={<LoginPage />} />
    </ReactRoutes>
  );
};

export default Routes;
