import { useEffect, useState } from 'react';
import * as S from './PageNationContainer.style';
import axios from 'axios';
import Pagination from 'react-js-pagination';

interface PageInfoProps {
  limit: number;
  totalCount: number;
}

type pageNationHandlerType = (page: number) => void;
interface PageNationContainerProps {
  pageInfo: PageInfoProps;
  pageNationHandler: pageNationHandlerType;
  currentPage: number;
}
const PageNationContainer = ({
  pageInfo,
  pageNationHandler,
  currentPage,
}: PageNationContainerProps) => {
  const { limit, totalCount } = pageInfo;

  return (
    <S.Container>
      <Pagination
        activePage={currentPage}
        itemsCountPerPage={limit}
        totalItemsCount={totalCount}
        pageRangeDisplayed={5}
        prevPageText={'<'}
        nextPageText={'>'}
        onChange={(e) => {
          pageNationHandler(e);
        }}
      />
    </S.Container>
  );
};

export default PageNationContainer;
