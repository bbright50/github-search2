import React from "react";
import { useSearchContext } from "./SearchContext";

export default function PageNav() {
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

  function nextPage() {
    setPerPage((prevPerPage) => prevPerPage + 10);
    console.log(perPage);
  }

  function prevPage() {
    setPerPage((prevPerPage) => prevPerPage - 10);
    console.log(perPage);
  }

  if (perPage === 0) {
    return (
      <div className="">
        {display && (
          <button className="" onClick={nextPage}>
            Next Page
          </button>
        )}
      </div>
    );
  } else {
    return (
      <div className="">
        {!!perPage && display && (
          <button className="" onClick={prevPage}>
            Previous Page
          </button>
        )}
        {display && perPage < 20 && (
          <button className="" onClick={nextPage}>
            Next Page
          </button>
        )}
      </div>
    );
  }
}
