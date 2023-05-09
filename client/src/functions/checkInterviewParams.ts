import { URLSearchParams } from 'url';

const checkInterviewParams = (searchParams: URLSearchParams, findQuery: string) => {
  // 만약 Params가 존재한다면 number Type으로 변경
  const getParams = searchParams.get(findQuery);

  return getParams;
};
export default checkInterviewParams;
