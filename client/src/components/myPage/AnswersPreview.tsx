import { useEffect, useState } from 'react';
import * as S from './AnswersPreview.style';
import Content from './answerPreviewComponent/Content';
import PageNationContainer from './answerPreviewComponent/PageNationContainer';
import usePreviewAnwser from '../../hooks/usePreviewAnwser';
import Loading from '../common/Loading';

interface AnswerPreviewProps {
  changeModalState: (id: number) => void;
}

// 데이터를 여기서 받는 거 검토 할 것. userInfo랑 따로 데이터를 받는 구조이기 때문, 만약 로그인 시 유저 정보를 리코일에 저장한다면 해볼만 함.
const AnswersPreview = ({ changeModalState }: AnswerPreviewProps) => {
  // 데이터 랜더링 함수 통신 성공시
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = usePreviewAnwser(currentPage);

  const pageNationHandler = async (page: number) => {
    // 요청하는 데이터가 들어가야함.
    setCurrentPage(page);
  };

  const mappingContent = () => {
    if (isLoading) {
      return <Loading />;
    }
    if (!isLoading && data) {
      return data.data.map((preview) => (
        <Content
          key={preview.id}
          question={preview.text}
          answer={preview.Answers[0].text}
          id={preview.id}
          createdAt={preview.createdAt}
          changeModalState={changeModalState}
        />
      ));
    } else {
      return <div className="alertNoData">작성된 인터뷰가 없습니다.</div>;
    }
  };

  return (
    <S.Container>
      <S.QuestionContainer>
        <span className="title">{isLoading ? null : '모든 답변'}</span>
        <div className="contentWrapper">{mappingContent()}</div>
      </S.QuestionContainer>
      {
        // 렌더링 조건 필요. data의 length가 존재할 때만 실행
        data?.pageInfo && (
          <PageNationContainer
            pageInfo={data.pageInfo}
            pageNationHandler={pageNationHandler}
            currentPage={currentPage}
          />
        )
      }
    </S.Container>
  );
};

export default AnswersPreview;
