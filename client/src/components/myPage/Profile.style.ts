import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 160px;
  margin-top: 36px;
  justify-content: space-between;
`;

const UserContainer = styled.div`
  font: bold;
  font-size: ${({ theme }) => theme.font.xl};
  display: flex;
  flex-direction: column;
  align-items: center;
  > img {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background-color: gray;
    margin-bottom: 12px;
  }
`;

const QuestionCountContainer = styled.ul`
  display: flex;
  width: 100%;
  justify-content: center;
  font-weight: bold;
  > .countContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 42px;
    font-size: ${({ theme }) => theme.font.lg};
    > .description {
      font-size: ${({ theme }) => theme.font.base};
      margin-top: 5px;
    }
  }
  > li:last-child {
    margin-right: 0;
  }
`;
export { Container, QuestionCountContainer, UserContainer };
