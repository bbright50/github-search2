import React from "react";
import { useSearchContext } from "../components/SearchContext";
import lodash from "lodash";
import { Input } from '@chakra-ui/react'

export default function SearchInput() {
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
        if (e.target.value === "") {
            setAutoSuggest(false);
        }
    }, 1000);

    return (
        <div>
            <Input variant='filled' placeholder='Search for Github Repos' size='md' onChange={debounce_func} />
        </div>
    );
}