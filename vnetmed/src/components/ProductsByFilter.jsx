import {
  Box,
  Text,
  Image,
  Center,
  Heading,
  Stack,
  useColorModeValue,
  Flex,
  Button,
  Input,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import AddCart from "./AddCart";

import { fetchCovidEssentials, fetchData } from "../Redux/actions";
import FilterCategories from "./Sidebars/FilterCategories";
import ProductPage from "../Pages/ProductPage";

const ProductsByFilter = () => {
  const [page, setPage] = useState(1);
  const [q, setQ] = useState("");
  // const [ratingOrder,setRatingOrder] = useState("desc");
  const [costOrder, setCostOrder] = useState("ab");

  const [searchParams] = useSearchParams();
  const filteredData = useSelector((state) => state.isAuth.filteredData);

  const length = filteredData.length;
  // console.log(filteredData)

  const dispatch = useDispatch();

  useEffect(() => {
    let params = {
      type: searchParams.getAll("type"),
    };
    dispatch(fetchData(params, page, q, costOrder));
  }, [page, q, costOrder]);

  // console.log(products)

  return (
    <Box display="flex">
      {/* <Stack > */}
      <Box>
        <Text m={4} mb={0} fontSize="2xl">
          Filters
        </Text>
        <Input
          m={4}
          width={200}
          type={"text"}
          placeholder={"search here"}
          onChange={(e) => setQ(e.target.value)}
        />
        <FilterCategories />
      </Box>

      <Box m={4}>
        <Box display={"flex"} justifyContent="space-between" mr={4}>
          <Text p={4}>Showing {length} items from 200</Text>
          <Box display={"flex"}>
            <Text mt={"4"}>Sort By Price : </Text>
            <Button
              disabled={costOrder === "desc"}
              onClick={() => setCostOrder("desc")}
              size={"sm"}
              border={"1px solid blue "}
              rounded={"md"}
              mt={"4"}
              bg={"white"}
              ml={4}
            >
              High To Low
            </Button>
            <Button
              disabled={costOrder === "asc"}
              onClick={() => setCostOrder("asc")}
              size={"sm"}
              border={"1px solid blue "}
              rounded={"md"}
              mt={"4"}
              bg={"white"}
              ml={4}
            >
              Low To High
            </Button>
          </Box>
        </Box>

        <Text pl={8} pt={3} color={"#747789"} fontSize={"large"}>
          ALL PRODUCTS
        </Text>
        <Flex flexWrap="wrap" justifyContent="space-around">
          {filteredData.map((product) => {
            return (
              <>
                <ProductSimple
                  key={product.id}
                  id={product.id}
                  image={product.imageUrl}
                  title={product.title}
                  seller={product.seller}
                  brand={product.brand}
                  salePrice={product.salePrice}
                  strikeOfPrice={product.strikeOfPrice}
                  daata={product}
                />
              </>
            );
          })}
        </Flex>

        <center>
          <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
            {" "}
            Prev{" "}
          </Button>
          <Button onClick={() => setPage(page + 1)}>NEXT</Button>
        </center>
      </Box>
      {/* </Stack> */}
    </Box>
  );
};

function ProductSimple({
  id,
  image,
  salePrice,
  strikeOfPrice,
  title,
  brand,
  seller,
  daata,
}) {
  return (
    <>
      {/* boxShadow={' rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'} */}

      <Box
        key={id}
        fontSize="sm"
        border={"1px solid grey"}
        rounded={10}
        p={4}
        pt={1}
        m={4}
        bg={"white"}
        width={212}
        height={356}
      >
        {/* <Button bg={'#84BE52'} fontSize='smaller' p={1} color={'white'} size='xxs'>{url.off}</Button> */}
        <Box height={290}>
          <img
            style={{ paddingLeft: "14px", paddingTop: "2px" }}
            src={image}
            alt=""
          />
          <Text color={"black"} fontWeight={500}>
            {title}
          </Text>
          <Text>{brand}</Text>
          <Text as={"i"} fontSize="smaller" color={"#717486"}>
            {seller}
          </Text>
          <br></br>
          <span style={{ color: "#6F7284", fontWeight: "500px" }}>
            Best Price*{" "}
          </span>
          <span style={{ color: "#EF4281" }}>{salePrice}</span>
          <br></br>
          <span style={{ color: "#6F7284" }}>MRP : </span>
          <Text color={"#717486"} as="s">
            Rs.{strikeOfPrice}
          </Text>
          {/* <Link to={`/covidEssentials/productPage/${id}`}>SEE MORE</Link> */}
        </Box>

        <Box pt={0} height={100}>
          <AddCart key={id} prodData={daata} />
          {/* </Link> */}
        </Box>
      </Box>
    </>
  );
}

export default ProductsByFilter;
