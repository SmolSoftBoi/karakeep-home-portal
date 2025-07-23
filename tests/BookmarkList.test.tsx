import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import BookmarkList from '../src/app/components/BookmarkList';

describe('BookmarkList', () => {
  it('renders provided bookmarks', () => {
    const bookmarks = [
      { title: 'Docs', url: 'https://docs', visits: 1 },
      { title: 'Repo', url: 'https://repo', visits: 2 },
    ];
    render(<BookmarkList bookmarks={bookmarks} />);
    expect(screen.getByRole('link', { name: 'Docs (1)' }).getAttribute('href')).toBe('https://docs');
    expect(screen.getByRole('link', { name: 'Repo (2)' }).getAttribute('href')).toBe('https://repo');
  });
});
