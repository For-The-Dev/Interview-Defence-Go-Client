const queryKey = {
  // 나중에 답변 제출 후 세가지를 모두 invalidateQueries로 무효화 시킬 것.
  userInfo: 'userInfo',
  userQA: 'answerPreview',
  detailQA: 'detailQA',
  getInterviews: 'getInterviews',
};
export default queryKey;
