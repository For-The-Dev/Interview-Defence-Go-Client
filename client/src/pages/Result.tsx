import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { Accordion } from '../components/Accordion';
import Button from '../components/common/Button';
import { useQueryClient } from '@tanstack/react-query';
import queryKey from '../react-query/queryKey';

const Result = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // console.log(queryClient.getQueryData([queryKey.answer]));
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
