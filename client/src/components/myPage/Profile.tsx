import * as S from './Profile.style';

interface UserProfileProps {
  avatar_url: string;
  nickName: string;
  todayQACnt: number;
  alldayQACnt: number;
}

interface CountsType {
  description: string;
  count: number;
}

const Profile = ({ avatar_url, nickName, todayQACnt, alldayQACnt }: UserProfileProps) => {
  const countContainerArr: CountsType[] = [
    {
      description: '오늘의 답변',
      count: todayQACnt,
    },
    {
      description: '오늘의 답변',
      count: alldayQACnt,
    },
  ];

  return (
    <S.Container>
      <S.UserContainer>
        <img src={avatar_url} alt="UserImage" />
        {/* 유저 데이터 받아서 렌더링할 것. */}
        <div>{nickName}</div>
      </S.UserContainer>
      <S.QuestionCountContainer>
        {countContainerArr.map((counts: CountsType, idx) => {
          const { description, count } = counts;
          return (
            <li className="countContainer" key={idx}>
              <span>{count}</span>
              <span className="description">{description}</span>
            </li>
          );
        })}
      </S.QuestionCountContainer>
    </S.Container>
  );
};
export default Profile;
