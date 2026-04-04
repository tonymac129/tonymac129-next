"use client";

import { useState } from "react";
import Input from "../ui/Input";

function Search() {
  const [search, setSearch] = useState<string>("");

  return (
    <Input
      placeholder="Search TonyMac129"
      value={search}
      setValue={setSearch}
      width={200}
    />
  );
}

export default Search;
