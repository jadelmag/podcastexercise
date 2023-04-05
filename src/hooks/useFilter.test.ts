import useFilter from './useFilter';
import { act, renderHook } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('useFilter hook', () => {
  test('check initial text', () => {
    const { result } = renderHook(useFilter);
    expect(result.current.filter).toBe('');
  });

  test('check update text', () => {
    const { result } = renderHook(useFilter);
    act(() => {
      result.current.updateFilter('new text');
    });
    expect(result.current.filter).toBe('new text');
  });
});
