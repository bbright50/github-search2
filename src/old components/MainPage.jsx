import React from "react";
import SBar from "./SBar";
import SButton from "./SButton";
import SFilter from "./SFilter";
import SResultField from "./SResultField";
import PageNav from "./PageNav";
import SSuggest from "./SSuggest";
import { SearchProvider } from "../components/SearchContext";

export default function MainPage() {
  return (
    <div>
      <SearchProvider>
        <div className="flex justify-center content-evenly">
          <div className="flex basis-1/5 justify-end gap-x-2">
            <SBar />
          </div>
          <div className="basis-1/6 gap-x-2">
            <SFilter />
            <SButton />
          </div>
        </div>
        <div className="flex flex-col">
          <SResultField />
          <PageNav />
        </div>
      </SearchProvider>
    </div>
  );
}
