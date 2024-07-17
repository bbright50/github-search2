import React from "react";

const SearchContext = React.createContext();

export const SearchProvider = (props) => {
  const [display, setDisplay] = React.useState(false);
  const [perPage, setPerPage] = React.useState(0);
  const [language, setLanguage] = React.useState("");
  const [autoSuggest, setAutoSuggest] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [currentPull, setCurrentPull] = React.useState({ items: [] });
  let value = {
    perPage,
    autoSuggest,
    searchValue,
    currentPull,
    loading,
    language,
    display,
    setDisplay,
    setPerPage,
    setAutoSuggest,
    setSearchValue,
    setCurrentPull,
    setLoading,
    setLanguage,
  };
  return (
    <SearchContext.Provider value={value}>
      {props.children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  return React.useContext(SearchContext);
};
