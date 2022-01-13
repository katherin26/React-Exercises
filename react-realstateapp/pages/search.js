import { useState } from "react";
import { useRouter } from "next/router"; //Library router but in next.
import Image from "next/image";
import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import SearchFilters from "../components/SearchFilters";

//stateProperty = searchFilter, setSearchFilters
//onClick={() => setSearchFilter((prevFilters) => !prevFilters)} = this means that if we are currently filtering something
//then once we click it, we want to stop filtering and viceversa.

//Now we are going to say if there are search filters we can do this by saying search filters and end then
//we are going to render the search filters component.
//Next router : router contains the url if we go to rent properties then that's going to be contained in the url.
//and if you going to boy properties that's also going to be contained in the url.

//Buy properties = search?purpose-for-sale

const Search = () => {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter(); //We call it as a hook.

  return (
    <Box>
      <Flex
        cursor="pointer"
        bg="gray.100"
        borderBottom="1px"
        borderColor="gray.200"
        p="2"
        fontWeight="black"
        fontSize="lg"
        justifyContent="center"
        alignItems="center"
        onClick={() => setSearchFilters((prevFilters) => !prevFilters)}
      >
        <Text>Search Property By Filters</Text>
        <Icon paddingLeft="2" w="7" as={BsFilter} />
      </Flex>
      {searchFilters && <SearchFilters />}
      <Text fontSize="2x1" p="4" fontWeight="bold">
        Properties
      </Text>
    </Box>
  );
};

export default Search;
