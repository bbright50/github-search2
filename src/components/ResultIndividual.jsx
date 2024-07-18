import React from "react";
import { useSearchContext } from "../components/SearchContext";
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Text, Heading, Button } from '@chakra-ui/react'

export default function ResultIndividual(props) {
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
    // obj.owner.avatar_url is the profile pic of owner

    return (
        display && (
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src={props.pic}
                    alt="owner's profile picture"
                />

                <Stack>
                    <CardBody>
                        <Heading size='md'>{props.name}</Heading>

                        <Text py='2'>{props.description}
                            <hr></hr>
                            Forks:{props.forks} &emsp; Stars:{props.stars} &emsp; Language: {props.language ? props.language : "None"}
                        </Text>
                    </CardBody>

                    <CardFooter>
                        <a href={props.link} target="_blank">
                            <Button variant='solid' colorScheme='blue'>
                                View Repo
                            </Button>
                        </a>
                    </CardFooter>
                </Stack>
            </Card>
        )
    );
}


// display && (
//     <a href={props.link} target="_blank">
//         <div className="">
//             <div className="">
//                 <h1 className="">{props.name}</h1>
//                 <h2 className="">{props.username}</h2>
//             </div>
//             <div className="">
//                 <p className="">{props.description}</p>
//             </div>
//             <div className="">
//                 <h3 className="">
//                     Language: {props.language ? props.language : "None"}
//                 </h3>
//                 <h4 className="">Forks:{props.forks}</h4>
//                 <h5 className="">Stars:{props.stars}</h5>
//             </div>
//             <hr></hr>
//         </div>
//     </a>
// )