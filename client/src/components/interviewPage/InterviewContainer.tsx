import Button from '../common/Button';
import * as S from './InterviewContainer.style';

const interviewContainer = () => {
  return (
    <S.Container>
      <S.QuestionWrapper>
        <h1>Q{'문제 번호'}</h1>
        <h2>{'문제가 뭔지 나와야함'}</h2>
      </S.QuestionWrapper>
      <S.InterviewInput />
      <Button
        value="제출"
        onClick={() => {
          console.log('click');
        }}
        width={'120px'}
      />
    </S.Container>
  );
};

export default interviewContainer;
