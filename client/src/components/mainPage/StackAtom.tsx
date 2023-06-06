import React from 'react';
import Stack from './Stack';
import { stackFamily } from '../../states/mainPage';
import { useRecoilValue } from 'recoil';
import useStackSelect from '../../hooks/useStackSelect';

interface StackAtomProps {
  value: string;
}

const StackAtom = ({ value }: StackAtomProps) => {
  const stack = useRecoilValue(stackFamily(value));

  const selectStack = useStackSelect(value);

  return <Stack onClick={selectStack} value={value} selected={stack.selected} />;
};

export default StackAtom;
