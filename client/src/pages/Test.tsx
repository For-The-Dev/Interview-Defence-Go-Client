import { useRecoilState } from 'recoil';
import { modeState } from '../states';
import styled from 'styled-components';

const Test = () => {
  const [mode, setMode] = useRecoilState(modeState);
  const modeChange = () => {
    setMode(!mode);
  };
  return (
    <>
      <Btn onClick={modeChange}>열기</Btn>
    </>
  );
};

const Btn = styled.div`
  width: 100px;
  height: 100px;
`;

export default Test;
