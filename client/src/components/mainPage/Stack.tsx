import React from 'react';
import styled from 'styled-components';

const StackComponent = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  height: 40px;
  margin: 5px;
  background-color: ${(props) => (props.selected ? '#0075FF' : '#393E4A')};
  font-size: ${(props) => props.theme.font.lg};
  font-weight: bold;
  cursor: pointer;
`;

export interface StackProps {
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  value: string;
  selected: boolean;
}

const Stack = ({ onClick, value, selected }: StackProps) => {
  return (
    <StackComponent onClick={onClick} selected={selected}>
      {value}
    </StackComponent>
  );
};

export default React.memo(Stack);
