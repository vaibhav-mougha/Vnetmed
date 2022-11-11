import { Box, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";

import LightningDeals from "../components/ImageSliders/LightningDeals";
import WellnessCarousel from "../components/ImageSliders/WellnessCarousel";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Footer from "../components/Footer";
import {
  fetchCovidEssentials,
  fetchNewOnNetmeds,
  fetchSupplement,
  newOnNetmeds,
} from "../Redux/actions";
import Supplement from "../components/ImageSliders/Supplement";
import { useDispatch, useSelector } from "react-redux";
import NewNetmeds from "../components/ImageSliders/NewNetmeds";
import CovidEssentials from "../components/ImageSliders/CovidEssentials";
import BestSeller from "../components/ImageSliders/BestSeller";
import { useNavigate } from "react-router-dom";

const Wellness = () => {
  //  const mySupplimentData = useSelector((state)=>state.isAuth.newOnNetMeds) ;
  //  console.log(mySupplimentData) ;

  //  const dispatch = useDispatch() ;

  //  useEffect(()=>{

  //   dispatch(fetchSupplement())
  //   dispatch(fetchNewOnNetmeds())
  //   dispatch(fetchCovidEssentials())
  //  },[])

  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate("/wellness/covidEssentials ");
  };

  return (
    <Box bg={"#F3F7FB"}>
      <Navbar />
      <Navbar2 />
      <WellnessCarousel />
      {/* Popular Categories */}

      <Box
        bg={"#F3F7FB"}
        display={"flex"}
        pl={10}
        justifyContent={"space-between"}
      >
        <Text fontSize={28} fontWeight={500}>
          {" "}
          Popular Categories
        </Text>
      </Box>

      <Box bg={"#F3F7FB"} display={"flex"} gap={10} p={4}>
        <Box
          rounded={10}
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
          p={4}
          width={230}
          height={280}
          bg={"white"}
        >
          <img
            src="https://www.netmeds.com/images/category/3055/thumb/covid_essentials_1.jpg"
            alt=""
          ></img>
          <Text fontSize={14} fontWeight={500} pt={4} pl={42}>
            Covid Essentials
          </Text>
        </Box>
        <Box
          rounded={10}
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
          p={4}
          width={230}
          height={280}
          bg={"white"}
        >
          <img
            src="https://www.netmeds.com/images/category/v1/3251/thumb/sexual_wellness_2.jpg"
            alt=""
          ></img>
          <Text fontSize={14} fontWeight={500} pt={4} pl={50}>
            Sexual Wellness
          </Text>
        </Box>
        <Box
          rounded={10}
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
          p={0}
          width={230}
          height={280}
          bg={"white"}
        >
          <img
            src="https://www.netmeds.com/images/category/3222/thumb/vitamins_and_supplements_1.jpg"
            alt=""
          ></img>
          <Text fontSize={14} fontWeight={500} pt={4} pl={6}>
            Vitamins And Supplements
          </Text>
        </Box>
        <Box
          rounded={10}
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
          p={3}
          width={230}
          height={280}
          bg={"white"}
        >
          <img
            src="https://www.netmeds.com/images/category/491/thumb/homeopathy_1.jpg"
            alt=""
          ></img>
          <Text fontSize={14} fontWeight={500} pt={4} pl={50}>
            Homeopathy
          </Text>
        </Box>
        <Box
          rounded={10}
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
          p={4}
          pl={8}
          width={230}
          height={280}
          bg={"white"}
        >
          <img
            src="https://www.netmeds.com/images/category/482/thumb/ayurvedic_1.jpg"
            alt=""
          ></img>
          <Text fontSize={14} fontWeight={500} pt={9} pl={39}>
            Ayurvedic
          </Text>
        </Box>
      </Box>

      {/* SUPPLEMENTS */}
      <Box bg={"#F3F7FB"} height={600} mb={5}>
        <Box rounded={15} pt={5} ml={4} height={550} bg={"white"}>
          <Box pl={10}>
            <Text fontSize="sm" color={"#6F7284"}>
              {" "}
              Supplement of the week{" "}
            </Text>
            <Box
              background="white"
              mb={8}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Text fontSize="xl" fontWeight={500}>
                {" "}
                Supplements of the week
              </Text>
              <Text as={"button"} color={"#EF4281"} cursor={"pointer"}>
                View All <ChevronRightIcon />
              </Text>
            </Box>
          </Box>
          <Supplement />
          {/* <LightningDeals/> */}
        </Box>
      </Box>

      {/* NEW ON NETMEDS */}

      <Box bg={"#F3F7FB"} height={530} mb={10}>
        <Box rounded={15} ml={4} height={500} background="white">
          <Box background="white" pl={10}>
            <Text pt={3} fontSize="sm" color={"#6F7284"}>
              {" "}
              New on Netmeds{" "}
            </Text>
            <Box
              background="white"
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Text fontSize="xl" fontWeight={500}>
                {" "}
                New on Netmeds
              </Text>
              <Text as={"button"} color={"#EF4281"} cursor={"pointer"}>
                View All <ChevronRightIcon />
              </Text>
            </Box>
          </Box>
          <NewNetmeds />
        </Box>
      </Box>

      {/* COVID ESSENTIALS */}

      <Box bg={"#F3F7FB"} height={530} mb={10}>
        <Box rounded={15} pt={5} ml={4} height={500} background="white">
          <Box background="white" pl={10}>
            <Text fontSize="sm" color={"#6F7284"}>
              Covid Essentials{" "}
            </Text>
            <Box
              background="white"
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Text fontSize="xl" fontWeight={500}>
                {" "}
                Covid Essentials
              </Text>
              <Text
                as={"button"}
                color={"#EF4281"}
                onClick={() => handleViewAll()}
                cursor={"pointer"}
              >
                View All <ChevronRightIcon />
              </Text>
            </Box>
          </Box>
          <CovidEssentials />
        </Box>
      </Box>

      {/* BEST SELLER */}

      <Box bg={"#F3F7FB"} height={530} mb={4}>
        <Box rounded={15} pt={5} ml={4} height={500} background="white">
          <Box background="white" pl={10}>
            <Text fontSize="sm" color={"#6F7284"}>
              {" "}
              Best Seller on Netmeds{" "}
            </Text>
            <Box
              background="white"
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Text fontSize="xl" fontWeight={500}>
                {" "}
                Best Seller on Netmeds{" "}
              </Text>
              <Text as={"button"} color={"#EF4281"} cursor={"pointer"}>
                View All <ChevronRightIcon />
              </Text>
            </Box>
          </Box>

          <BestSeller />
        </Box>
      </Box>

      {/* HEALTH CONCERNS */}

      <Box
        bg={"#F3F7FB"}
        display={"flex"}
        pl={10}
        justifyContent={"space-between"}
      >
        <Text fontSize={28} fontWeight={500}>
          {" "}
          Health Concerns
        </Text>
        <Text as={"button"} color={"#EF4281"} cursor={"pointer"}>
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

      <Footer />
    </Box>
  );
};

export default Wellness;
