import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { loginState } from '../states/login';

const Login = () => {
  const [params] = useSearchParams();
  const token = params.get('token');
  const navigate = useNavigate();
  const setLogin = useSetRecoilState(loginState);

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
      setLogin(true);
      navigate('/');
    }
  }, [token]);

  return <div>Login...</div>;
};

export default Login;
