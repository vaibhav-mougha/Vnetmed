import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Text, Image } from "@chakra-ui/react";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import ProductsByFilter from "../components/ProductsByFilter";

const CovidEssentialsPage = () => {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <Box display={"flex"} gap={"8"} bg={"#F3F3F3"} height={"auto"} p={4}>
        <Box
          height={"325"}
          cursor={"pointer"}
          overflowY={"scroll"}
          scrollMargin={"-16px"}
          width={215}
          p={4}
          rounded={"md"}
          bg={"white"}
          m={2}
        >
          <Text pb={2} borderBottom={"1px solid #F5F6F7"} fontSize="larger">
            Categories
          </Text>
          <Text
            pb={1}
            pt={4}
            borderBottom={"1px solid #F5F6F7"}
            fontWeight={499}
            color={"#6F7284"}
            fontSize="lg"
          >
            <ChevronRightIcon fontSize={"x-large"} /> Ayush
          </Text>
          <Text
            pb={1}
            pt={3}
            borderBottom={"1px solid #F5F6F7"}
            fontWeight={499}
            color={"#6F7284"}
            fontSize="lg"
          >
            <ChevronRightIcon fontSize={"x-large"} /> Fitness
          </Text>
          <Text
            pb={1}
            pt={3}
            borderBottom={"1px solid #F5F6F7"}
            fontWeight={499}
            color={"#6F7284"}
            fontSize="lg"
          >
            <ChevronRightIcon fontSize={"x-large"} /> Mom & Baby
          </Text>
          <Text
            pb={1}
            pt={3}
            borderBottom={"1px solid #F5F6F7"}
            fontWeight={499}
            color={"#6F7284"}
            fontSize="lg"
          >
            <ChevronRightIcon fontSize={"x-large"} /> Sexual Wellness
          </Text>
          <Text
            pb={1}
            pt={3}
            borderBottom={"1px solid #F5F6F7"}
            fontWeight={499}
            color={"#6F7284"}
            fontSize="lg"
          >
            <ChevronRightIcon fontSize={"x-large"} /> Treatements
          </Text>
          <Text
            pb={1}
            pt={3}
            borderBottom={"1px solid #F5F6F7"}
            fontWeight={499}
            color={"#6F7284"}
            fontSize="lg"
          >
            <ChevronRightIcon fontSize={"x-large"} /> Devices
          </Text>
          <Text
            pb={1}
            pt={3}
            borderBottom={"1px solid #F5F6F7"}
            fontWeight={499}
            color={"#6F7284"}
            fontSize="lg"
          >
            <ChevronRightIcon fontSize={"x-large"} /> Health Condition
          </Text>
          <Text
            pb={1}
            pt={3}
            borderBottom={"1px solid #F5F6F7"}
            fontWeight={499}
            color={"#6F7284"}
            fontSize="lg"
          >
            <ChevronRightIcon fontSize={"x-large"} /> OTC Deals
          </Text>
          <Text
            pb={1}
            pt={3}
            borderBottom={"1px solid #F5F6F7"}
            fontWeight={499}
            color={"#6F7284"}
            fontSize="lg"
          >
            <ChevronRightIcon fontSize={"x-large"} /> Eye Care
          </Text>
        </Box>

        <Box>
          <Box
            width={1000}
            mb={5}
            rounded={"lg"}
            mt={1}
            height={150}
            bg={"#DFF8FF"}
          >
            <Text fontSize={"x-large"} p={5}>
              Covid Essentials
            </Text>
          </Box>
          <Box rounded={"lg"} width={1000} mb={5} height={"auto"} bg={"white"}>
            <Text p={4} pb={0} color={"#747789"}>
              SHOP BY CATEGORIES
            </Text>
            <Box display={"flex"} gap={"5"} p={6}>
              <Box
                textAlign={"center"}
                pt={3}
                height={150}
                ml={1}
                mb={2}
                rounded={"md"}
                width={135}
                border={"1px solid #C8C8C8"}
              >
                <Image
                  height={90}
                  ml={5}
                  src="https://www.netmeds.com/images/category/l2/thumb/business_essentials.jpg?v=1653998784"
                  alt=""
                />
                <Text fontSize={"smaller"} fontWeight={"400"}>
                  Business Essentials
                </Text>
              </Box>

              <Box
                textAlign={"center"}
                pt={3}
                height={150}
                ml={1}
                mb={2}
                rounded={"md"}
                width={135}
                border={"1px solid #C8C8C8"}
              >
                <Image
                  height={90}
                  ml={5}
                  src="https://www.netmeds.com/images/category/l2/thumb/immunity_booster.jpg?v=1653998784"
                  alt=""
                />
                <Text fontSize={"smaller"} fontWeight={"400"}>
                  Immunity Booster
                </Text>
              </Box>

              <Box
                textAlign={"center"}
                pt={3}
                height={150}
                ml={1}
                mb={2}
                rounded={"md"}
                width={135}
                border={"1px solid #C8C8C8"}
              >
                <Image
                  height={90}
                  ml={5}
                  src="https://www.netmeds.com/images/category/l2/thumb/mask_gloves_protective_equipment.jpg?v=1653998784"
                  alt=""
                />
                <Text fontSize={"smaller"} fontWeight={"400"}>
                  Mask & Gloves,Pr...
                </Text>
              </Box>

              <Box
                textAlign={"center"}
                pt={3}
                height={150}
                ml={1}
                mb={2}
                rounded={"md"}
                width={135}
                border={"1px solid #C8C8C8"}
              >
                <Image
                  height={90}
                  ml={5}
                  src="https://www.netmeds.com/images/category/l2/thumb/oxygen_can.jpg?v=1653998784"
                  alt=""
                />
                <Text fontSize={"smaller"} fontWeight={"400"}>
                  Oxygen Can
                </Text>
              </Box>

              <Box
                textAlign={"center"}
                pt={3}
                height={150}
                ml={1}
                mb={2}
                rounded={"md"}
                width={135}
                border={"1px solid #C8C8C8"}
              >
                <Image
                  height={90}
                  ml={5}
                  src="https://www.netmeds.com/images/category/l2/thumb/personal_home_essentials.jpg?v=1653998784"
                  alt=""
                />
                <Text fontSize={"smaller"} fontWeight={"400"}>
                  Personal & Home..
                </Text>
              </Box>

              <Box
                textAlign={"center"}
                pt={3}
                height={150}
                ml={1}
                mb={2}
                rounded={"md"}
                width={135}
                border={"1px solid #C8C8C8"}
              >
                <Image
                  height={90}
                  ml={5}
                  src="https://www.netmeds.com/images/category/l2/thumb/travel_essentials.jpg?v=1653998784"
                  alt=""
                />
                <Text fontSize={"smaller"} fontWeight={"400"}>
                  Travel Essentials
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box>
        <ProductsByFilter />
      </Box>

      <Footer />
    </>
  );
};

export default CovidEssentialsPage;
