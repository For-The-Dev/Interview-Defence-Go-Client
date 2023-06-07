import React from 'react';
import Stack from './Stack';
import { stackFamily } from '../../states/mainPage';
import { useRecoilCallback, useRecoilValue } from 'recoil';
import selectStack from '../../functions/selectStack';

interface StackAtomProps {
  value: string;
}

const StackAtom = ({ value }: StackAtomProps) => {
  const stack = useRecoilValue(stackFamily(value));

  const selectHandler = useRecoilCallback(selectStack(value), []);

  return <Stack onClick={selectHandler} value={value} selected={stack.selected} />;
};

export default StackAtom;
