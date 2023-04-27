import { useEffect, useState } from 'react';
import * as S from './AnswersPreview.style';
import Content from './Content';
import PageNationContainer from './PageNationContainer';

interface Answer {
  id: number;
  text: string;
  createdAt: string;
  nickName: string;
}

interface PreviewsType extends Answer {
  Answers: Answer[];
}

interface PageInfoProps {
  limit: number;
  totalCount: number;
}

const { data, pageInfo: pageData } = {
  data: [
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
      id: 85,
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
      id: 84,
      createdAt: '2023-04-23T08:37:38.791Z',
      text: '리액트에 useState에 대해 설명해주세요',
      nickName: 'billy5982',
      Answers: [
        {
          id: 74,
          text: '리액트에 Side-Effect을 방지하기 위해 사용됩니다.근데 잘 모르겠어요5',
          createdAt: '2023-04-23T08:37:38.809Z',
          nickName: 'billy5982',
        },
      ],
    },
    {
      id: 80,
      createdAt: '2023-04-23T08:37:38.790Z',
      text: '리액트에 useState에 대해 설명해주세요',
      nickName: 'billy5982',
      Answers: [
        {
          id: 70,
          text: '리액트에 Side-Effect을 방지하기 위해 사용됩니다.근데 잘 모르겠어요1',
          createdAt: '2023-04-23T08:37:38.809Z',
          nickName: 'billy5982',
        },
      ],
    },
    {
      id: 81,
      createdAt: '2023-04-23T08:37:38.790Z',
      text: '리액트에 useState에 대해 설명해주세요',
      nickName: 'billy5982',
      Answers: [
        {
          id: 71,
          text: '리액트에 Side-Effect을 방지하기 위해 사용됩니다.근데 잘 모르겠어요2',
          createdAt: '2023-04-23T08:37:38.809Z',
          nickName: 'billy5982',
        },
      ],
    },
    {
      id: 82,
      createdAt: '2023-04-23T08:37:38.790Z',
      text: '리액트에 useState에 대해 설명해주세요',
      nickName: 'billy5982',
      Answers: [
        {
          id: 75,
          text: '리액트에 Side-Effect을 방지하기 위해 사용됩니다.',
          createdAt: '2023-04-23T08:39:41.220Z',
          nickName: 'billy5982',
        },
      ],
    },
    {
      id: 83,
      createdAt: '2023-04-23T08:37:38.790Z',
      text: '리액트에 useState에 대해 설명해주세요',
      nickName: 'billy5982',
      Answers: [
        {
          id: 73,
          text: '리액트에 Side-Effect을 방지하기 위해 사용됩니다.근데 잘 모르겠어요4',
          createdAt: '2023-04-23T08:37:38.809Z',
          nickName: 'billy5982',
        },
      ],
    },
  ],
  pageInfo: {
    limit: 5,
    totalCount: 9,
  },
};

// 데이터를 여기서 받는 거 검토 할 것. userInfo랑 따로 데이터를 받는 구조이기 때문, 만약 로그인 시 유저 정보를 리코일에 저장한다면 해볼만 함.
const AnswersPreview = () => {
  // 데이터 랜더링 함수 통신 성공시

  const [previews, setPreview] = useState<PreviewsType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageInfo, setPageInfo] = useState<PageInfoProps>({ limit: 0, totalCount: 0 });

  useEffect(() => {
    // 통신데이터가 들어가야함.
    setPreview(data.slice(0, 5));
    setPageInfo(pageData);
  }, []);

  const pageNationHandler = async (page: number) => {
    // 요청하는 데이터가 들어가야함.
    setPreview(data.slice((page - 1) * pageInfo.limit, (page - 1) * pageInfo.limit + 5));
    setCurrentPage(page);
  };

  const mappingContent = () => {
    if (previews.length > 0) {
      return previews.map((preview) => (
        <Content
          key={preview.id}
          question={preview.text}
          answer={preview.Answers[0].text}
          id={preview.id}
          createdAt={preview.createdAt}
        />
      ));
    } else {
      return <div className="alertNoData">작성된 인터뷰가 없습니다.</div>;
    }
  };

  return (
    <S.Container>
      <S.QuestionContainer>
        <span className="title">모든 답변</span>
        <div className="contentWrapper">
          {
            // 데이터가 불러와졌을 때 vs 에러가 발생했을 때 vs 대기중일 때 (구분 필요)
            mappingContent()
          }
        </div>
      </S.QuestionContainer>
      {
        // 렌더링 조건 필요. data의 length가 존재할 때만 실행
        <PageNationContainer
          pageInfo={pageInfo}
          pageNationHandler={pageNationHandler}
          currentPage={currentPage}
        />
      }
    </S.Container>
  );
};

export default AnswersPreview;
