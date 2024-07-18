import React from "react";
import ResultIndividual from "./ResultIndividual";
import { useSearchContext } from "../components/SearchContext";

export default function ResultField() {
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
            <div>
                <ResultIndividual
                    key={show.id}
                    username={show.owner.login}
                    name={show.name}
                    description={show.description}
                    language={show.language}
                    forks={show.forks}
                    stars={show.stargazers_count}
                    link={show.html_url}
                    pic={show.owner.avatar_url}
                />
            </div>
        );
    });

    return <div className="basis-1/2">{showElement}</div>;
}