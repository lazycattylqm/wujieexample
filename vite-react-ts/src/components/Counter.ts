import { c, context } from '../context/counterContext';
class Counter {
  count: c = { ...context };
  increment (): void {
    this.count.count++;
  }

  decrement (): void {
    this.count.count--;
  }
  get (): c {
    return this.count;
  }
}

export const counter = new Counter();