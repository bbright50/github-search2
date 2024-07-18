import React from "react";
import { SearchProvider } from "../components/SearchContext";
import SearchBar from "./SearchBar";
import ResultField from "./ResultField";
import PageNavigation from "./PageNavigation";

export default function MainPage2() {
    return (
        <div>
            <SearchProvider>
                <div>
                    <SearchBar />
                </div>
                <div className="mx-20 my-4">
                    <ResultField />
                    <PageNavigation />
                </div>
            </SearchProvider>
        </div>
    );
}