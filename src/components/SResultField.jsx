import React from "react";
import SResultIndividual from "./SResultIndividual";
import { useSearchContext } from "./SearchContext";

export default function SResultField() {
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

  let searchElement = currentPull.items.slice(perPage, perPage + 10);
  const showElement = searchElement.map((show) => {
    return (
      <SResultIndividual
        key={show.id}
        username={show.owner.login}
        name={show.name}
        description={show.description}
        language={show.language}
        forks={show.forks}
        stars={show.stargazers_count}
        link={show.html_url}
      />
    );
  });

  return <div>{showElement}</div>;
}
