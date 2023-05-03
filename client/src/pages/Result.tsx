import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { Accordion } from '../components/Accordion';
import Button from '../components/common/Button';

const Result = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Accordion />
      <Button onClick={() => navigate('/')} value="Home"></Button>
    </div>
  );
};

export default Result;
