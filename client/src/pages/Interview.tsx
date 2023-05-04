import { useSearchParams } from 'react-router-dom';
import checkInterviewParams from '../functions/checkInterviewParams';
import InterviewContainer from '../components/interviewPage/InterviewContainer';
import useGetInterview from '../hooks/useGetInterview';
import Loading from '../components/common/Loading';
import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import queryKey from '../react-query/queryKey';
// 수정 시 ?edit={editId} 값으로 받을 예정
// 등록 시 ?stacks='react&react&react&react&' 값으로 받을 예정
// 둘다 string 이라 생각하고 작업할 것 대신 edit 인지 stacks 인지의 여부의 따라 작업할 것.

const Interview = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [edit, stacks] = checkInterviewParams(searchParams);

  const { data, isLoading } = useGetInterview(stacks as string);

  const queryClient = useQueryClient();

  //  제출 버튼일 때와 제출 버튼이 아닐 때를 구분해야함. 함수와 버튼 내부 글자가 변경됨
  // return {isLoading ? <Loading /> :<InterviewContainer />};
  return <>{isLoading && !data ? <Loading /> : <InterviewContainer data={data as string[]} />}</>;
};

export default Interview;
