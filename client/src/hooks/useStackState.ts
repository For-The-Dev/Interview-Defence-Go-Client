import { useRecoilState, SetterOrUpdater } from 'recoil';
import { stackState } from '../states/mainPage';

const useStackState: () => [string[], SetterOrUpdater<string[]>] = () => {
  const [stack, setStack] = useRecoilState(stackState);
  return [stack, setStack];
};

export default useStackState;
