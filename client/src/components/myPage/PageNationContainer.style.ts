import styled, { css } from 'styled-components';

const Container = styled.section`
  ${({ theme }) => css`
    .pagination {
      display: flex;
      justify-content: center;
    }

    ul {
      list-style: none;
      padding: 0;
    }

    ul.pagination li {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 25px;
      height: 25px;

      @media screen and (max-width: 480px) {
        width: 20px;
        height: 20px;
      }
    }

    /* 전체 글자 색 */
    ul.pagination li a {
      text-decoration: none;
      color: ${({ theme }) => theme.color.subFontColor};
      font-size: ${theme.font.lg};
      font-weight: bold;
      @media screen and (max-width: 480px) {
        font-size: ${theme.font.base};
      }
    }

    ul.pagination li.active a {
      color: ${theme.color.primaryFontColor};
    }

    ul.pagination li.active {
      border-bottom: 2px solid ${theme.color.primaryFontColor};
    }

    ul.pagination li a:hover,
    ul.pagination li a.active {
      color: ${theme.color.primaryFontColor};
    }
  `}
`;

export { Container };
