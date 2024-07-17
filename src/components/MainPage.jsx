import React from "react";
import SBar from "./SBar";
import SButton from "./SButton";
import SFilter from "./SFilter";
import SResultField from "./SResultField";
import PageNav from "./PageNav";
import SSuggest from "./SSuggest";
import { SearchProvider } from "./SearchContext";

export default function MainPage() {
  return (
    <div>
      <SearchProvider>
        <div className="">
          <div className="">
            <SBar />
            <SFilter />
          </div>
          <div className="">
            <SButton />
          </div>
        </div>
        <div className="">
          <SResultField />
          <PageNav />
        </div>
      </SearchProvider>
    </div>
  );
}
