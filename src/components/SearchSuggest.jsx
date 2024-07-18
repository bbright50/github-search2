import React from "react";
import { useSearchContext } from "./SearchContext";

export default function SearchSuggest(props) {
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

  function clickAutoSuggest() {
    setSearchValue(props.name)
    setAutoSuggest(false)
    setDisplay(true)
    console.log("clicked")
  }


  if (autoSuggest === "") {
    return <></>;
  } else {
    return (
      autoSuggest && (
        <div>
          <button className="" onClick={clickAutoSuggest}>
            {props.name}
          </button>
        </div>
      )
    );
  }
}
