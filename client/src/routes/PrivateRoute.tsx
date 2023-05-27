import { ReactElement } from 'react';
// Outlet은 중첩된 구조에서 사용되는 컴포넌트, 중첩 구조에서 하위 라우트를 렌더링하는 역할을 함
import { Navigate, Outlet } from 'react-router-dom';

interface PrivateRouteProps {
  children?: ReactElement; // Private Route가 감싸고 있는 Component Element
  authentication: boolean; // true여야 하위 컴포넌트 라우트로 이동시킴
}

const PrivateRoute = ({ authentication }: PrivateRouteProps) => {
  // 인증을 했다면 하위 라우트로 이동, 안했다면 /로 이동
  return authentication ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
