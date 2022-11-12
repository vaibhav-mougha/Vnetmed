import React, { useEffect, useState } from "react";
import { Box, Input, Text } from "@chakra-ui/react";
import { CheckboxGroup, Checkbox, VStack } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

import { useDispatch } from "react-redux";
import { fetchData } from "../../Redux/actions";

const FilterCategories = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.getAll("type"))

  const [categoryValues, setCategoryValues] = useState(
    searchParams.getAll("type") || []
  );

  const categoryHandler = (value) => {
    console.log(value);
    setCategoryValues(value);
  };

  useEffect(() => {
    if (categoryValues) {
      setSearchParams({ type: categoryValues }, { replace: true });
      let params = {
        type: searchParams.getAll("type"),
      };
      dispatch(fetchData(params));
    }
  }, [setSearchParams, categoryValues, dispatch, searchParams]);

  return (
    <Box>
      <Box
        pl={2}
        rounded={"md"}
        boxShadow={" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
        p={5}
        ml={4}
      >
        <Text>Category</Text>
        <br></br>
        {/* <Input placeholder='search here' onChange={(e)=>categoryHandler(e.target.value)}/> */}
        <CheckboxGroup
          colorScheme="green"
          defaultValue={categoryValues}
          onChange={categoryHandler}
        >
          <VStack alignItems={"baseline"}>
            <Checkbox value="covidEssentials">Covid Essentials</Checkbox>
            <Checkbox value="vitaminsAndSuppliments">
              Vitamins & Suppliments
            </Checkbox>
            <Checkbox value="momAndBaby">Mom & Baby</Checkbox>
            <Checkbox value="skinCare">Skin Care</Checkbox>
            <Checkbox value="homeopathy">Homeopathy</Checkbox>
            <Checkbox value="ayurvedic">Ayurvedic</Checkbox>
            <Checkbox value="sexualWellness">Sexual Wellness</Checkbox>
          </VStack>
        </CheckboxGroup>
      </Box>

      <Box display={{ base: "block", md: "none" }} p="0rem 2rem">
        <Menu closeOnSelect={false}>
          <MenuButton as={Button} colorScheme="blue">
            MenuItem
          </MenuButton>
          <MenuList minWidth="240px">
            <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
              <MenuItemOption value="asc">Ascending</MenuItemOption>
              <MenuItemOption value="desc">Descending</MenuItemOption>
            </MenuOptionGroup>
            <MenuDivider />
            <MenuOptionGroup title="Country" type="checkbox">
              <MenuItemOption value="email">Email</MenuItemOption>
              <MenuItemOption value="phone">Phone</MenuItemOption>
              <MenuItemOption value="country">Country</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};

export default FilterCategories;
