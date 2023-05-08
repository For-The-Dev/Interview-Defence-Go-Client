import styled from 'styled-components';
import arrowIcon from '../../asset/images/arrow.png';

export const AccodionArea = styled.div`
  @media screen and (max-width: 500px) {
    width: 330px;
  }

  @media screen and (min-width: 501px) and (max-width: 800px) {
    width: 500px;
  }

  @media screen and (min-width: 801px) {
    width: 800px;
  }
`;

export const ContentBox = styled.div`
  position: relative;
  margin: 5px 10px;
`;

export const Label = styled.div<{ active: boolean }>`
  position: relative;
  padding: 10px;
  background-color: ${(props) => props.theme.color.contentBg};
  color: ${(props) => props.theme.color.primaryFontColor};
  font-weight: 500;
  cursor: pointer;

  &::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url(${arrowIcon});
    background-size: contain;
    position: absolute;
    right: 20px;
    transform: rotate(${(props) => (props.active ? '90deg' : '0')});
  }

  > p {
    width: 90%;
  }
`;

export const Content = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${(props) => props.theme.color.qaAnswerBg};
  overflow: hidden;
  transition: 0.5s;
  overflow-y: auto;
  border-left: solid 5px red;

  height: ${(props) => (props.active ? '100%' : 0)};
  padding: ${(props) => (props.active ? '10px' : 0)};
`;

export const MyAnswer = styled.div`
  margin: 10px;
`;

export const AIAnswer = styled.div`
  margin: 10px;
`;

export const AnswerTitle = styled.h3`
  font-weight: 900;
  margin-bottom: 10px;
`;

export const AnswerContent = styled.p`
  margin-left: 10px;
`;
