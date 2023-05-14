import styled from 'styled-components';

export const MainContainer = styled.section`
  width: 60vw;
`;

export const MainLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70px;
  font-size: 30px;
  font-weight: bold;
  margin-top: 10px;
  > h2 {
    cursor: pointer;
  }
`;

export const MainText = styled.div`
  margin: 40px 0 20px 0;
  font-size: 18px;
`;

export const MainRecommend = styled.div`
  display: grid;
  grid-gap: 10px;

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 501px) and (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 801px) and (max-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 901px) and (max-width: 1273px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (min-width: 1274px) {
    grid-template-columns: repeat(7, 1fr);
  }
`;

export const MainSelect = styled.div`
  background-color: ${(props) => props.theme.color.qaAnswerBg};
  border-radius: 20px;
`;

export const SelectBox = styled.div`
  padding: 20px;
  display: grid;
  grid-gap: 20px;
  min-height: 200px;

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 501px) and (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 801px) and (max-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 901px) and (max-width: 1273px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (min-width: 1274px) {
    grid-template-columns: repeat(7, 1fr);
  }
`;

export const MainBottom = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
