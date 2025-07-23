import React, { HTMLAttributes } from "react";

export interface Bookmark {
  /** Display title */
  title: string;
  /** Bookmark URL */
  url: string;
  /** Visit count */
  visits: number;
}

export interface BookmarkListProps extends HTMLAttributes<HTMLUListElement> {
  /** List of bookmarks to display */
  bookmarks: Bookmark[];
}

/**
 * Display bookmarks as an accessible list.
 */
export default function BookmarkList({ bookmarks, ...rest }: BookmarkListProps) {
  return (
    <ul className="space-y-1" {...rest}>
      {bookmarks.map(bookmark => (
        <li key={bookmark.url}>
          <a
            href={bookmark.url}
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {bookmark.title} ({bookmark.visits})
          </a>
        </li>
      ))}
    </ul>
  );
}
