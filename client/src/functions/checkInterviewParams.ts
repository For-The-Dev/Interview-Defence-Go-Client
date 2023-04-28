import { URLSearchParams } from 'url';

const checkInterviewParams = (searchParams: URLSearchParams) => {
  // 만약 Params가 존재한다면 number Type으로 변경
  const getParams = ['id', 'limit', 'current']
    .map((value) => searchParams.get(value))
    .map((str) => (str !== null ? +str : str));

  return getParams;
};
export default checkInterviewParams;
