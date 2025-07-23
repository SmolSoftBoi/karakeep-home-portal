import { Header, BookmarkList } from "./components";
import type { Bookmark } from "./components/BookmarkList";

const bookmarks: Bookmark[] = [
  { title: "Karakeep Docs", url: "https://example.com/docs", visits: 42 },
  { title: "GitHub Repo", url: "https://github.com", visits: 15 },
];

export default function Home() {
  return (
    <main className="p-6 space-y-8">
      <Header title="Portal" />
      <BookmarkList bookmarks={bookmarks} className="space-y-2" />
    </main>
  );
}
