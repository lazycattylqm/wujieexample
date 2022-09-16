import { createContext } from 'react';
export interface c {
  count: number
}
export const context: c = {
  count: 1,
};

export const reducer = (state: c, action: string): c => {
  switch (action) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
  }
  return state;
}
export const ContextWrapper = createContext({});
