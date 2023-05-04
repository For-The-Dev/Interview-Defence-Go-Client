import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

const Login = () => {
  const [params] = useSearchParams();
  const token = params.get('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
      navigate('/');
    }
  }, []);

  return <div>Login...</div>;
};

export default Login;
