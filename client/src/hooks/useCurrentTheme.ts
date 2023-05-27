import { useRecoilValue } from 'recoil';
import { modeState } from '../states';

export default function useCurrentTheme() {
  const currentState = useRecoilValue(modeState);
  return currentState;
}
