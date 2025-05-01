import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState, type ChangeEvent, type KeyboardEvent } from "react";

interface SearchBarProps {
  onSearch: (searchText: string) => void;
  placeholder?: string;
  isSearching: boolean;
}

export function SearchBar({
  onSearch,
  isSearching,
  placeholder = "Search...",
}: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim()) {
      handleSearch();
    }
  };

  const handleSearch = () => {
    if (!query.trim()) return;

    onSearch(query.trim());
  };

  return (
    <div className="relative flex max-w-lg ">
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-3 flex items-center pl-1 pointer-events-none">
          <Search className="h-4 w-4 text-muted-foreground" />
        </div>

        <Input
          type="search"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="pl-10 pr-20 h-12 rounded-lg border-input focus-visible:ring-2"
          disabled={isSearching}
        />
      </div>
    </div>
  );
}
