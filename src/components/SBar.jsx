import React from "react";
import SSuggest from "./SSuggest";
import { useSearchContext } from "./SearchContext";
import lodash from "lodash";

export default function SBar() {
  const {
    setPerPage,
    setLoading,
    setCurrentPull,
    setLanguage,
    setSearchValue,
    setAutoSuggest,
    setDisplay,
    display,
    perPage,
    currentPull,
    loading,
    searchValue,
    language,
    autoSuggest,
  } = useSearchContext();

  let debounce_func = lodash.debounce(function (e) {
    console.log(e.target.value);
    setSearchValue(e.target.value);
    console.log(searchValue);
    setDisplay(false);
    setAutoSuggest(true);
    // Can change once render issue is gone
    if (e.target.value === "") {
      setAutoSuggest(false);
    }
  }, 1000);

  let searchSuggest = currentPull.items.slice(0, 10);
  const suggestElement = searchSuggest.map((suggest) => {
    return (
      <SSuggest key={suggest.id} name={suggest.name} link={suggest.html_url} />
    );
  });

  return (
    <div className="">
      <div>
        <input
          type="text"
          placeholder="Enter Search Topic"
          className=""
          onChange={debounce_func}
        />
      </div>
      <div
        className=""
        style={{ border: autoSuggest ? "solid black 1px" : "" }}
      >
        {suggestElement}
      </div>
    </div>
  );
}
