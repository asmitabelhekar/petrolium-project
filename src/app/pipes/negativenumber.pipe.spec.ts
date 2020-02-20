import { NegativenumberPipe } from './negativenumber.pipe';

describe('NegativenumberPipe', () => {
  it('create an instance', () => {
    const pipe = new NegativenumberPipe();
    expect(pipe).toBeTruthy();
  });
});
