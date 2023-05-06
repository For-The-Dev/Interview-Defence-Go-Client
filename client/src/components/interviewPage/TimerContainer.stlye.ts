import styled from 'styled-components';

const TimerContainer = styled.div<{ warningAlert: boolean }>`
  ${({ warningAlert }) =>
    warningAlert &&
    `
      color : red;
      animation : warning 1s infinite;
      @keyframes warning{
        0% {
          transform: rotate(2deg);
        }

        50% {
          transform : rotate(-2deg);
        }

        100% {
          transform: rotate(0deg);
        }

      }
  `}
`;

export { TimerContainer };
