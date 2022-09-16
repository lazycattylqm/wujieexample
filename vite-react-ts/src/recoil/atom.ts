import { atom, selector } from 'recoil'

export const counterState = atom({
  key: 'counter',
  default: 0,
});

export const countSelector = selector({
  key: 'countSelector',
  get: ({ get }) => {
    const count = get(counterState);
    return count;
  }
});
