import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Header from '../src/app/components/Header';

describe('Header', () => {
  it('renders the heading text', () => {
    render(<Header title="Portal" />);
    expect(
      screen.getByRole('heading', { name: 'Portal 🎉' })
    ).toBeInTheDocument();
  });
});
