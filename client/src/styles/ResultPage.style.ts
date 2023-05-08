import styled from 'styled-components';

export const ResultContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;

export const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > :first-child {
    > :first-child {
      > :first-child {
        border-radius: 5px 5px 0 0;
      }
    }
  }

  > :last-child {
    margin-bottom: 20px;
    > :first-child {
      > :first-child {
        border-radius: 0 0 5px 5px;
      }
    }
  }
`;
