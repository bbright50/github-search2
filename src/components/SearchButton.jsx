import React from "react";
import { useSearchContext } from "../components/SearchContext";
import { Octokit } from "octokit";
import { Button, ButtonGroup } from '@chakra-ui/react'

const octokit = new Octokit({
    auth: "",
});

const buildQueryParams = (data) => {
    const searchParams = [];
    const { language, repoName } = data;
    if (repoName) {
        searchParams.push(`"${repoName}" in:name`);
    }
    if (language) {
        searchParams.push(`language:${language}`);
    }

    return searchParams.length > 0 ? searchParams.join(" ") : undefined;
};

export default function SearchButton() {
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

    // obj.id is key
    // obj.name is the name of repo
    // obj.owner.login is the owners username
    // obj.description is repo description
    // obj.html_url is the link

    // obj.language is repo language
    // obj.stargazers_count is star count
    // obj.forks is the number of forks

    React.useEffect(() => {
        async function fetchData() {
            try {
                const queryString = buildQueryParams({
                    repoName: searchValue,
                    language,
                });
                console.log(`query string: ${queryString}`);
                if (queryString) {
                    const response = await octokit.request(`GET /search/repositories`, {
                        q: queryString,
                        per_page: 30,
                    });

                    // response type is object
                    const objList = response.data;
                    setCurrentPull(objList);
                    console.log(currentPull);
                }
            } catch (error) {
                console.error("There was an error searching for repositories:", error);
            }
        }
        fetchData();
    }, [language, searchValue]);

    function clickMotion() {
        setDisplay(true);
        setAutoSuggest(false);
    }

    return (
        <Button colorScheme='blue' onClick={clickMotion}>{loading ? "Searching" : "Search"}</Button>
    );
}

