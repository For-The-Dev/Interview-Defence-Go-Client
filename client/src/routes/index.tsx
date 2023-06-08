import { Route, Routes as ReactRoutes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import ResultPage from '../pages/ResultPage';
// import MyPage from '../pages/MyPage';
import Interview from '../pages/Interview';
import LoginPage from '../pages/LoginPage';
import ReplyInterview from '../pages/ReplyInterview';
import PrivateRoute from './PrivateRoute';
import useUser from '../hooks/useUser';
import NotFound from './NotFound';
import React, { Suspense, useEffect } from 'react';

type PreloadFn = () => Promise<{ default: React.ComponentType<any> }>;

const lazyWithPreload = (importFn: PreloadFn) => {
  const Component = React.lazy(importFn);
  return { Component, importFn };
};

const { Component: MyPage, importFn: preloadMyPage } = lazyWithPreload(
  () => import('../pages/MyPage'),
);

const Routes = () => {
  const { user } = useUser();

  useEffect(() => {
    // router가 처음 로딩되었을 때 마이페이지 모듈 load
    if (user) preloadMyPage();
  }, [user]);

  return (
    <Suspense>
      <ReactRoutes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<PrivateRoute authentication={user ? true : false} />}>
          <Route path="/result" element={<ResultPage />} />
          <Route path="/myPage" element={<MyPage />} />
          <Route path="/interview" element={<Interview />} />
          <Route path="/interview/:id" element={<ReplyInterview />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </ReactRoutes>
    </Suspense>
  );
};

export default Routes;
