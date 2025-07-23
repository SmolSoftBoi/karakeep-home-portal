import { describe, expect, it } from 'vitest';
import { Header } from '../src/app/components';

describe('component exports', () => {
  it('re-exports Header', () => {
    expect(Header).toBeDefined();
  });
});
