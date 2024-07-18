import React from "react";
import { useSearchContext } from "../components/SearchContext";

export default function SSuggest(props) {
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

  if (autoSuggest === "") {
    return <></>;
  } else {
    return (
      autoSuggest && (
        <a href={props.link} target="_blank">
          <button className="" onClick={props.link}>
            {props.name}
          </button>
        </a>
      )
    );
  }
}
