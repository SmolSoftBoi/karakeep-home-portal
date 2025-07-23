import { describe, expect, it } from 'vitest';
import { Header, BookmarkList } from '../src/app/components';

describe('component exports', () => {
  it('re-exports Header', () => {
    expect(Header).toBeDefined();
  });

  it('re-exports BookmarkList', () => {
    expect(BookmarkList).toBeDefined();
  });
});
