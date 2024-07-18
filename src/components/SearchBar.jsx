import React from "react";
import SearchSuggest from "./SearchSuggest";
import { useSearchContext } from "../components/SearchContext";
import lodash from "lodash";
import SearchInput from "./SearchInput";
import LanguageFilter from "./LanguageFilter";
import SearchButton from "./SearchButton";

export default function SearchBar() {
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


    let searchSuggest = currentPull.items.slice(0, 10);
    const suggestElement = searchSuggest.map((suggest) => {
        return (
            <SearchSuggest key={suggest.id} name={suggest.name} link={suggest.html_url} />
        );
    });

    return (
        <div className="flex mt-10 justify-center">
            <div className="flex flex-col w-48 xl:w-96 sm:w-64 md:w-80">
                <SearchInput />
                {suggestElement}
            </div>
            <LanguageFilter />
            <SearchButton />
        </div>
    );
}


{/* <div>
<div>
    <input
        type="text"
        placeholder="Enter Search Topic"
        onChange={debounce_func}
    />
</div>
<div style={{ border: autoSuggest ? "solid black 1px" : "" }}>
    {suggestElement}
</div>
</div> */}