import React from "react";
import { useSearchContext } from "./SearchContext";

export default function SResultIndividual(props) {
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
  // obj.owner.login is the owners username WILL BE 'OCTOKIT'
  // obj.description is repo description
  // obj.html_url is the link

  // obj.language is repo language
  // obj.stargazers_count is star count
  // obj.forks is the number of forks

  return (
    display && (
      <a href={props.link} target="_blank">
        <div className="">
          <div className="">
            <h1 className="">{props.name}</h1>
            <h2 className="">{props.username}</h2>
          </div>
          <div className="">
            <p className="">{props.description}</p>
            <div className="">
              <h3 className="">
                Language: {props.language ? props.language : "None"}
              </h3>
              <h4 className="">Forks:{props.forks}</h4>
              <h5 className="">Stars:{props.stars}</h5>
            </div>
          </div>
          <hr></hr>
        </div>
      </a>
    )
  );
}
