import { useState } from "react";
import { useRouter } from "next/router"; //Library router but in next.
import Image from "next/image";
import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import SearchFilters from "../components/SearchFilters";
import Property from "../components/Property";
import noresult from "../assets/images/noresult.png";

//stateProperty = searchFilter, setSearchFilters
//onClick={() => setSearchFilter((prevFilters) => !prevFilters)} = this means that if we are currently filtering something
//then once we click it, we want to stop filtering and viceversa.

//Now we are going to say if there are search filters we can do this by saying search filters and end then
//we are going to render the search filters component.
//Next router : router contains the url if we go to rent properties then that's going to be contained in the url.
//and if you going to boy properties that's also going to be contained in the url.

//Buy properties = search?purpose-for-sale in the code line = 42 properties {router.query.purpose}

//Map into all the properties = {[].map((property) => <Property key={property})} /> for each property we simply
//render a property component.

//[].length === 0 && = If properties.length is equal to 0 meaning if there are no properties in that case
//we can simply render a new flex container like <Flex></Flex>

//We are getting our properties throgh props.
//We are populated the value through getStaticProps()  and we are going to filter to query.
//the default value is after the || for example "for rent".

const Search = ({ properties }) => {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter(); //We call it as a hook.
  console.log(router);

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
        Properties {router.query.purpose}
      </Text>
      <Flex flexWrap="wrap">
        {properties.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      {properties.length === 0 && (
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          marginTop="5"
          marginBottom="5"
        >
          <Image alt="no result" src={noresult} width="100px" height="100px" />
          <Text fontSize="2x1" marginTop="3">
            No Results found
          </Text>
        </Flex>
      )}
    </Box>
  );
};

export async function getStaticProps({ query }) {
  const purpose = query.purpose || "for-rent";
  const rentFrequency = query.rentFrequency || "yearly";
  const minPrice = query.minPrice || "0";
  const maxPrice = query.maxPrice || "1000000";
  const roomsMin = query.roomsMin || "0";
  const bathsMin = query.bathsMin || "0";
  const sort = query.sort || "price-desc";
  const areaMax = query.areaMax || "35000";
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const categoryExternalID = query.categoryExternalID || "4";

  const data = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  );
  return {
    props: {
      properties: data?history,
    },
  };
}

export default Search;
