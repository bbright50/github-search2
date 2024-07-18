import React from "react";
import { useSearchContext } from "../components/SearchContext";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Select,
} from '@chakra-ui/react'


export default function LanguageFilter() {
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


    function handleLanguageChange(event) {
        event.preventDefault();
        console.log(event.target.value);
        const { value } = event.target;
        setLanguage(value);
        console.log(language);
    }

    return (
        <div>
            <FormControl>
                <Select placeholder='Coding Language'
                    id="language"
                    value={undefined}
                    onChange={handleLanguageChange}
                    name="language"
                >
                    <option value="JavaScript">JavaScript</option>
                    <option value="Ruby">Ruby</option>
                    <option value="TypeScript">TypeScript</option>
                    <option value="Objective-C">Objective-C</option>
                    <option value="Go">Go</option>
                    <option value="C#">C#</option>
                    <option value="C">C</option>
                    <option value="Rust">Rust</option>
                </Select>
            </FormControl>
        </div>
    );
}


{/* <select
                id="language"
                value={undefined}
                onChange={handleLanguageChange}
                className="h-full border-solid border-2 border-black"
                name="language"
            >
                <option value={""} selected>
                    Project Language
                </option>
                <option value="JavaScript">JavaScript</option>
                <option value="Ruby">Ruby</option>
                <option value="TypeScript">TypeScript</option>
                <option value="Objective-C">Objective-C</option>
                <option value="Go">Go</option>
                <option value="C#">C#</option>
            </select> */}