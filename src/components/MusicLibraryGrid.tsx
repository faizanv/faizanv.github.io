import { Grid } from "@svar-ui/react-grid";
import "@svar-ui/react-grid/all.css";
import { useMemo, useState } from "react";

type MusicTrackRow = {
  id: number;
  Title: string;
  Artist: string;
  InitialKey: string;
  BeatsPerMinute: number;
};

type MusicLibraryGridProps = {
  data: MusicTrackRow[];
};

const columns = [
  { id: "Title", header: "Title", width: 200, sort: true },
  { id: "Artist", header: "Artist", width: 150, sort: true },
  { id: "InitialKey", header: "Key", width: 50, sort: true },
  { id: "BeatsPerMinute", header: "BPM", width: 50, sort: true },
];

export default function MusicLibraryGrid({ data }: MusicLibraryGridProps) {
  const [query, setQuery] = useState("");

  const filteredAndSortedData = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const filtered = normalizedQuery
      ? data.filter((row) => {
          const title = String(row.Title ?? "").toLowerCase();
          const artist = String(row.Artist ?? "").toLowerCase();
          return (
            title.includes(normalizedQuery) || artist.includes(normalizedQuery)
          );
        })
      : data;

    return [...filtered].sort((a, b) => {
      if (a.BeatsPerMinute !== b.BeatsPerMinute) {
        return a.BeatsPerMinute - b.BeatsPerMinute;
      }

      return a.InitialKey.localeCompare(b.InitialKey, undefined, {
        numeric: true,
        sensitivity: "base",
      });
    });
  }, [data, query]);

  return (
    <div style={{ minHeight: "70vh" }}>
      <label
        htmlFor="music-library-filter"
        style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}
      >
        Filter by title or artist
      </label>
      <input
        id="music-library-filter"
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Type to filter..."
        style={{
          width: "100%",
          maxWidth: "360px",
          marginBottom: "1rem",
          padding: "0.5rem 0.75rem",
          border: "1px solid #d1d5db",
          borderRadius: "8px",
          fontSize: "0.95rem",
        }}
      />
      <Grid
        data={filteredAndSortedData}
        columns={columns}
        filterValues={{}}
        sortMarks={{
          BeatsPerMinute: { order: "asc", index: 1 },
          InitialKey: { order: "asc", index: 2 },
        }}
      />
    </div>
  );
}
