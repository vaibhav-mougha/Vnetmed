import React from "react";
import { useSelector } from "react-redux";
import { Box, Text } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Carousel from "../components/ImageSliders/Carousel";
import Topbrand from "../components/ImageSliders/TopBrand";
import LightningDeals from "../components/ImageSliders/LightningDeals";
import Navbar2 from "../components/Navbar2";

const Home = () => {
  const auth = useSelector((state) => state.isAuth.isAuth);
  console.log(auth);
  return (
    <>
      <Navbar />
      <Navbar2 />
      <Carousel />

      <Box bg={"#F3F7FB"} display={"flex"} gap={10} p={10} pt={-10}>
        <Box
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
          width={430}
          height={"110%"}
        >
          <img
            style={{ borderRadius: "10px" }}
            src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1654019142_Web_Mini_Banner.jpg"
            alt=""
          ></img>
        </Box>
        <Box
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
          width={430}
          height={"110%"}
        >
          <img
            style={{ borderRadius: "10px" }}
            src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1643047630_Web_Banner_436x244pxl.jpg"
            alt=""
          ></img>
        </Box>
        <Box
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
          width={430}
          height={"110%"}
        >
          <img
            style={{ borderRadius: "10px" }}
            src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1654696818_Healthvit_436-px-224px-home-page.jpg"
            alt=""
          ></img>
        </Box>
      </Box>

      {/* ///// Payment Offers ////// */}
      <Box
        bg={"#F3F7FB"}
        display={"flex"}
        pl={10}
        justifyContent={"space-between"}
      >
        <Text fontSize={28} fontWeight={500}>
          {" "}
          Payment Partners Offers
        </Text>
        <Text as={"button"} cursor={"pointer"}>
          View All <ChevronRightIcon />
        </Text>
      </Box>

      <Box bg={"#F3F7FB"} display={"flex"} gap={10} p={8}>
        <Box
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
          display={"flex"}
          rounded={10}
          p={5}
          pt={2}
          pb={2}
          width={460}
          height={"70%"}
          bg={"white"}
        >
          <Box
            boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
            height={12}
            mt={3}
            pr={2}
            borderRight="1px solid lightgrey"
          >
            <img
              width={70}
              height={38}
              src="https://www.netmeds.com/images/cms/offers/1654235738_Icon_256x256.png"
              alt=""
            ></img>
          </Box>
          <Text pl={3} fontSize={12}>
            <Text fontWeight={600}>
              Use Pay with Rewards, Get up to Rs. 800 Cashback!..
            </Text>{" "}
            <br></br>
            <p>
              Get assured cashback between Rs. 30 and Rs. 800, when you pay
              using the “Pay with Rewards” payme..
            </p>
          </Text>
        </Box>

        <Box
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
          display={"flex"}
          rounded={10}
          p={5}
          pt={2}
          pb={2}
          width={460}
          height={"70%"}
          bg={"white"}
        >
          <Box
            boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
            height={12}
            mt={3}
            pr={5}
            borderRight="1px solid lightgrey"
          >
            <img
              width={70}
              height={38}
              src="https://www.netmeds.com/images/cms/offers/1643631754_1629112796_Simpl_Icon.png"
              alt=""
            ></img>
          </Box>
          <Text pl={4} fontSize={12}>
            <Text fontWeight={600}>
              Get up to Rs. 500 Simpl Cashback* (5%)! ..
            </Text>{" "}
            <br></br>
            <p>
              From 1st to 30th June 2022, get up to Rs. 500 Simpl Cashback* (5%)
              on your payment via Simpl towards..
            </p>
          </Text>
        </Box>

        <Box
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
          display={"flex"}
          rounded={10}
          p={5}
          pt={2}
          pb={2}
          width={460}
          height={"70%"}
          bg={"white"}
        >
          <Box
            boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
            height={12}
            mt={3}
            pr={5}
            borderRight="1px solid lightgrey"
          >
            <img
              width={70}
              height={38}
              src="https://www.netmeds.com/images/cms/offers/1629112796_Simpl_Icon.png"
              alt=""
            ></img>
          </Box>
          <Text pl={4} fontSize={12}>
            <Text fontWeight={600}>
              Get up to Rs. 500 Simpl Cashback* (8%)!..
            </Text>{" "}
            <br></br>
            <Text>
              Get up to Rs. 500 Simpl Cashback (8%) on your FIRST-EVER payment
              via Simpl for ANY purchases* of ANY..
            </Text>
          </Text>
        </Box>
      </Box>

      {/* SHOP BY CATEGORY */}

      <Box
        bg={"#F3F7FB"}
        display={"flex"}
        pl={10}
        justifyContent={"space-between"}
      >
        <Text fontSize={28} fontWeight={500}>
          {" "}
          Shop By Category
        </Text>
        <Text as={"button"} cursor={"pointer"}>
          View All <ChevronRightIcon />
        </Text>
      </Box>

      <Box bg={"#F3F7FB"} display={"flex"} gap={10} p={8}>
        <Box
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
          rounded={10}
          p={4}
          width={230}
          height={280}
          bg={"white"}
        >
          <img
            src="https://www.netmeds.com/images/category/481/thumb/ayush_1.jpg"
            alt=""
          ></img>
          <Text fontSize={18} fontWeight={500} pl={74}>
            Ayush
          </Text>
        </Box>

        <Box
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
          rounded={10}
          p={4}
          width={230}
          height={280}
          bg={"white"}
        >
          <img
            src="https://www.netmeds.com/images/category/v1/547/thumb/hair_care_2.jpg"
            alt=""
          ></img>
          <Text fontSize={18} fontWeight={500} pl={61}>
            Hair Care
          </Text>
        </Box>

        <Box
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
          rounded={10}
          p={4}
          width={230}
          height={280}
          bg={"white"}
        >
          <img
            src="https://www.netmeds.com/images/category/v1/525/thumb/body_care_2.jpg"
            alt=""
          ></img>
          <Text fontSize={18} fontWeight={500} pl={61}>
            Body Care
          </Text>
        </Box>

        <Box
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
          rounded={10}
          p={3}
          width={230}
          height={280}
          bg={"white"}
        >
          <img
            src="https://www.netmeds.com/images/category/624/thumb/treatments_1.jpg"
            alt=""
          ></img>
          <Text fontSize={18} fontWeight={500} pl={61}>
            Treatements
          </Text>
        </Box>

        <Box
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
          rounded={10}
          p={4}
          pl={8}
          width={230}
          height={280}
          bg={"white"}
        >
          <img
            src="https://www.netmeds.com/images/category/821/thumb/cold_and_fever.jpg"
            alt=""
          ></img>
          <Text fontSize={18} fontWeight={500} pt={9} pl={21}>
            Cold And Fever
          </Text>
        </Box>
      </Box>

      {/* TOP BRANDS */}

      <Box
        bg={"#F3F7FB"}
        display={"flex"}
        pl={10}
        justifyContent={"space-between"}
      >
        <Text fontSize={28} fontWeight={500}>
          {" "}
          Top Brands
        </Text>
        <Text as={"button"} cursor={"pointer"}>
          View All <ChevronRightIcon />
        </Text>
      </Box>
      <Topbrand />

      {/* /////////////////////////////////////////////////// */}

      {/* HEALTH CONCERNS */}

      <Box
        bg={"#F3F7FB"}
        display={"flex"}
        pl={10}
        pt={8}
        justifyContent={"space-between"}
      >
        <Text fontSize={28} fontWeight={500}>
          {" "}
          Health Concerns
        </Text>
        <Text as={"button"} cursor={"pointer"}>
          View All <ChevronRightIcon />
        </Text>
      </Box>

      <Box bg={"#F3F7FB"} display={"flex"} gap={10} p={8}>
        <Box
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
          rounded={10}
          pt={10}
          pl={19}
          width={230}
          height={280}
          bg={"white"}
        >
          <img
            style={{ marginLeft: "40px" }}
            src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/weight-care.jpg"
            alt=""
          ></img>
          <Text fontSize={18} fontWeight={500} pt={14} pl={38}>
            Weight Care
          </Text>
        </Box>

        <Box
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
          rounded={10}
          pt={10}
          pl={22}
          width={230}
          height={280}
          bg={"white"}
        >
          <img
            style={{ marginLeft: "40px" }}
            src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/women-s-care.jpg"
            alt=""
          ></img>
          <Text fontSize={18} fontWeight={500} pt={14} pl={29}>
            Women's Care
          </Text>
        </Box>

        <Box
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
          rounded={10}
          pt={10}
          pl={13}
          width={230}
          height={280}
          bg={"white"}
        >
          <img
            style={{ marginLeft: "50px" }}
            src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/bone-and-joint-pain.jpg"
            alt=""
          ></img>
          <Text fontSize={18} fontWeight={500} pt={14} pl={27}>
            Bone And Joint Pain
          </Text>
        </Box>

        <Box
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
          rounded={10}
          pt={10}
          pl={21}
          width={230}
          height={280}
          bg={"white"}
        >
          <img
            style={{ marginLeft: "40px" }}
            src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/cold-and-fever.jpg"
            alt=""
          ></img>
          <Text fontSize={18} fontWeight={500} pt={14} pl={27}>
            Cold And Fever
          </Text>
        </Box>

        <Box
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
          rounded={10}
          pt={10}
          pl={45}
          width={230}
          height={280}
          bg={"white"}
        >
          <img
            style={{ marginLeft: "20px" }}
            src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/lung-care.jpg"
            alt=""
          ></img>
          <Text fontSize={18} fontWeight={500} pt={14} pl={27}>
            Lung Care
          </Text>
        </Box>
      </Box>

      {/* LIGHTNING DEALS */}
      <Box bg={"#F3F7FB"} height={530} mb={10}>
        <Box rounded={15} pt={5} ml={4} height={500} background="white">
          <Box background="white" pl={10}>
            <Text fontSize="sm" color={"#6F7284"}>
              {" "}
              TODAY'S EXCLUSIVE{" "}
            </Text>
            <Text fontSize="xl" fontWeight={500}>
              {" "}
              Lightning Deals
            </Text>
            <Text fontSize="xs" color={"#6F7284"}>
              Grab Before The Deal Ends
            </Text>
          </Box>
          <LightningDeals />
        </Box>
      </Box>
      {/* LIGHTING DEALS */}

      <Footer />
    </>
  );
};

export default Home;
