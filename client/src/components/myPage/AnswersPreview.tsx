import * as S from './AnswersPreview.style';
import Content from './Content';

interface Answer {
  id: number;
  text: string;
  createdAt: string;
  nickName: string;
}

interface PreviewProps extends Answer {
  Answers: Answer[];
}

// 카운트랑 다받아야함.
const AnswersPreview = ({ previews }: { previews: PreviewProps[] }) => {
  const mappingContent = () => {
    return previews.map((preview) => (
      <Content
        key={preview.id}
        question={preview.text}
        answer={preview.Answers[0].text}
        id={preview.id}
        createdAt={preview.createdAt}
      />
    ));
  };

  return (
    <S.Container>
      <S.QuestionContainer>
        <span className="title">모든 답변</span>
        <div className="contentWrapper">{previews.length > 0 ? mappingContent() : null}</div>
      </S.QuestionContainer>
    </S.Container>
  );
};

export default AnswersPreview;
