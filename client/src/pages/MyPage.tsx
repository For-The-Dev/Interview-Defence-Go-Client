import styled from 'styled-components';
import Profile from '../components/myPage/Profile';
import AnswersPreview from '../components/myPage/AnswersPreview';

const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const MyPage = () => {
  const dummy = {
    count: 10,
    rows: [
      {
        id: 86,
        createdAt: '2023-04-23T08:53:17.216Z',
        text: '리액트에 useState에 대해 설명해주세요설명해주세요설명해주세요설명해주세요설명해주세요설명해주세요설명해주세요설명해주세요',
        nickName: 'billy5982',
        Answers: [
          {
            id: 77,
            text: '리액트에 Side-Effect을 방지하기 위해 사용됩니다.근데 잘 모르겠어요2모르겠어요2모르겠어요2모르겠어요2모르겠어요2',
            createdAt: '2023-04-23T08:53:17.236Z',
            nickName: 'billy5982',
          },
        ],
      },
      {
        id: 87,
        createdAt: '2023-04-23T08:53:17.216Z',
        text: '리액트에 useState에 대해 설명해주세요',
        nickName: 'billy5982',
        Answers: [
          {
            id: 78,
            text: '리액트에 Side-Effect을 방지하기 위해 사용됩니다.근데 잘 모르겠어요3',
            createdAt: '2023-04-23T08:53:17.236Z',
            nickName: 'billy5982',
          },
        ],
      },
      {
        id: 88,
        createdAt: '2023-04-23T08:53:17.216Z',
        text: '리액트에 useState에 대해 설명해주세요',
        nickName: 'billy5982',
        Answers: [
          {
            id: 79,
            text: '리액트에 Side-Effect을 방지하기 위해 사용됩니다.근데 잘 모르겠어요4',
            createdAt: '2023-04-23T08:53:17.236Z',
            nickName: 'billy5982',
          },
        ],
      },
      {
        id: 89,
        createdAt: '2023-04-23T08:53:17.216Z',
        text: '리액트에 useState에 대해 설명해주세요',
        nickName: 'billy5982',
        Answers: [
          {
            id: 80,
            text: '리액트에 Side-Effect을 방지하기 위해 사용됩니다.근데 잘 모르겠어요5',
            createdAt: '2023-04-23T08:53:17.236Z',
            nickName: 'billy5982',
          },
        ],
      },
      {
        id: 90,
        createdAt: '2023-04-23T08:53:17.215Z',
        text: '리액트에 useState에 대해 설명해주세요',
        nickName: 'billy5982',
        Answers: [
          {
            id: 76,
            text: '리액트에 Side-Effect을 방지하기 위해 사용됩니다.근데 잘 모르겠어요1',
            createdAt: '2023-04-23T08:53:17.236Z',
            nickName: 'billy5982',
          },
        ],
      },
      {
        id: 91,
        createdAt: '2023-04-23T08:53:17.215Z',
        text: '리액트에 useState에 대해 설명해주세요',
        nickName: 'billy5982',
        Answers: [
          {
            id: 76,
            text: '리액트에 Side-Effect을 방지하기 위해 사용됩니다.근데 잘 모르겠어요1',
            createdAt: '2023-04-23T08:53:17.236Z',
            nickName: 'billy5982',
          },
        ],
      },
      {
        id: 92,
        createdAt: '2023-04-23T08:53:17.215Z',
        text: '리액트에 useState에 대해 설명해주세요',
        nickName: 'billy5982',
        Answers: [
          {
            id: 76,
            text: '리액트에 Side-Effect을 방지하기 위해 사용됩니다.근데 잘 모르겠어요1',
            createdAt: '2023-04-23T08:53:17.236Z',
            nickName: 'billy5982',
          },
        ],
      },
      {
        id: 93,
        createdAt: '2023-04-23T08:53:17.215Z',
        text: '리액트에 useState에 대해 설명해주세요',
        nickName: 'billy5982',
        Answers: [
          {
            id: 76,
            text: '리액트에 Side-Effect을 방지하기 위해 사용됩니다.근데 잘 모르겠어요1',
            createdAt: '2023-04-23T08:53:17.236Z',
            nickName: 'billy5982',
          },
        ],
      },
      {
        id: 94,
        createdAt: '2023-04-23T08:53:17.215Z',
        text: '리액트에 useState에 대해 설명해주세요',
        nickName: 'billy5982',
        Answers: [
          {
            id: 76,
            text: '리액트에 Side-Effect을 방지하기 위해 사용됩니다.근데 잘 모르겠어요1',
            createdAt: '2023-04-23T08:53:17.236Z',
            nickName: 'billy5982',
          },
        ],
      },
      {
        id: 95,
        createdAt: '2023-04-23T08:53:17.215Z',
        text: '리액트에 useState에 대해 설명해주세요',
        nickName: 'billy5982',
        Answers: [
          {
            id: 76,
            text: '리액트에 Side-Effect을 방지하기 위해 사용됩니다.근데 잘 모르겠어요1',
            createdAt: '2023-04-23T08:53:17.236Z',
            nickName: 'billy5982',
          },
        ],
      },
    ],
  };

  return (
    <PageContainer>
      <Profile
        avatar_url={'https://avatars.githubusercontent.com/u/104412610?v=4'}
        nickName={'billy5982'}
        todayQACnt={10}
        alldayQACnt={20}
      />
      <AnswersPreview previews={dummy.rows} />
    </PageContainer>
  );
};
export default MyPage;
