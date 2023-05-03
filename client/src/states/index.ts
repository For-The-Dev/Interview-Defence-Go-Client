import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

export type ModeState = boolean;

const { persistAtom } = recoilPersist({
  key: 'loginPersist',
});

export const modeState = atom<ModeState>({
  key: 'viewMode',
  default: true,
  effects_UNSTABLE: [persistAtom],
});
