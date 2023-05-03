import { useSearchParams } from 'react-router-dom';
import checkInterviewParams from '../functions/checkInterviewParams';
import InterviewContainer from '../components/interviewPage/InterviewContainer';

// 수정 시 ?id={editId} 값으로 받을 예정
// 등록 시 ?current={현재 풀고 있는 문제 번호}&limit={총 문제수} 값으로 받을 예정
const Interview = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [id, limit, current] = checkInterviewParams(searchParams);

  //  제출 버튼일 때와 제출 버튼이 아닐 때를 구분해야함. 함수와 버튼 내부 글자가 변경됨
  return <InterviewContainer />;
};

export default Interview;
