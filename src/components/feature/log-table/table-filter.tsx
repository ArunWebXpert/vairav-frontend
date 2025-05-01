import { DateRangePicker } from "@/components/ui/date-range-picker";
import { SearchBar } from "@/components/ui/search-bar";
import { useState } from "react";

const TableFilter = () => {
  const [text, setText] = useState("");

  console.log({ text });
  return (
    <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-background border rounded-lg">
      <div className="w-full sm:flex-1">
        <SearchBar isSearching={false} onSearch={setText} />
      </div>
      <div className="w-full sm:w-auto">
        <DateRangePicker />
      </div>
    </div>
  );
};

export default TableFilter;
