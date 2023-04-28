import { useState } from 'react';
import styled from 'styled-components';
import arrowIcon from '../image/arrow.png';

const AccodionArea = styled.section`
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

const ContentBox = styled.div`
  position: relative;
  margin: 10px 20px;
`;

const Label = styled.div<{ active: boolean }>`
  border-radius: 5px 5px 0 0;
  position: relative;
  padding: 10px;
  background-color: ${(props) => props.theme.color.contentBg};
  color: ${(props) => props.theme.color.primaryFontColor};
  font-size: 1.2rem;
  font-weight: 900;
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
`;

const Content = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${(props) => props.theme.color.qaAnswerBg};
  overflow: hidden;
  transition: 0.5s;
  overflow-y: auto;
  border-left: solid 5px red;

  height: ${(props) => (props.active ? '150px' : 0)};
  padding: ${(props) => (props.active ? '10px' : 0)};
`;

const MyAnswer = styled.div`
  margin: 10px 0;
`;

const AIAnswer = styled.div`
  margin: 10px 0;
`;

const AnswerTitle = styled.h3`
  font-weight: 900;
  margin-bottom: 10px;
`;

const AnswerContent = styled.p`
  margin-left: 10px;
`;

export const Accordion = () => {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
  };

  return (
    <AccodionArea>
      <ContentBox>
        <Label active={checked} onClick={handleChecked}>
          Q1. 안녕하세요
        </Label>
        <Content active={checked}>
          <MyAnswer>
            <AnswerTitle>{`My Answer`}</AnswerTitle>
            <AnswerContent>굿모닝이유</AnswerContent>
          </MyAnswer>
          <AIAnswer>
            <AnswerTitle style={{ color: 'red' }}>{`AI's Answer`}</AnswerTitle>
            <AnswerContent>저녁인데요</AnswerContent>
          </AIAnswer>
        </Content>
      </ContentBox>
    </AccodionArea>
  );
};
