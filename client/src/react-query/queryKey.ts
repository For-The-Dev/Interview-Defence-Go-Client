// detailQA : 상세 모달
// userInfo : 유저가 등록한 댓글 수
// userQAPreview : 페이지네이션 관련
// answer : AI 응답 데이터 결과물
// getInterviews : ai 면접질문 가져오기

const queryKey = {
  // 나중에 답변 제출 후 세가지를 모두 invalidateQueries로 무효화 시킬 것.
  userInfo: 'userInfo',
  userQAPreview: 'answerPreview',
  detailQA: 'detailQA',
  getInterviews: 'getInterviews',
  answer: 'answer',
};
export default queryKey;
