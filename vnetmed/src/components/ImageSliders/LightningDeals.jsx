import React from "react";
import { Text, Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import AddCart from "../AddCart";

// Settings for the slider
const settings = {
  dots: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  infinite: false,
};

export default function LightningDeals() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(1);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  // These are the images used in the slide
  const cards = [
    {
      id: 1,
      name: "Pure Nutrition Progut Plus Veg Capsules 60's",
      image:
        "https://www.netmeds.com/images/product-v1/150x150/812809/pure_nutrition_progut_plus_for_healthy_digestion_veg_capsules_60_s_0.jpg",
      mkt: "Mkt: Herbs Nutriproducts Pvt. Ltd. ",
      price: "Rs. 1,499.00",
      mrp: "Rs. 1799.00",
    },
    {
      id: 2,
      name: "INLIFE Triphala Extract Capsules 60's",
      image:
        "https://www.netmeds.com/images/product-v1/150x150/858567/inlife_triphala_extract_capsules_60_s_0.jpg",
      mkt: "Mkt: Inlife Pharma Private Limited",
      price: " Rs. 243.27",
      mrp: "Rs. 499.00",
    },
    {
      id: 3,
      name: "INLIFE Guggul Extract Capsules 60's",
      image:
        "https://www.netmeds.com/images/product-v1/150x150/858568/inlife_guggul_extract_capsules_60_s_0.jpg",
      mkt: "Mkt: Inlife Pharma Private Limited",
      price: " Rs. 329.34",
      mrp: "Rs. 499.00",
    },
    {
      id: 4,
      name: "INLIFE Shatavari Extract Capsules 60's",
      image:
        "https://www.netmeds.com/images/product-v1/150x150/858569/inlife_shatavari_extract_capsules_60_s_0.jpg",
      mkt: "Mkt: Inlife Pharma Private Limited",
      price: " Rs. 289.42",
      mrp: "Rs. 499.00",
    },
    {
      id: 5,
      name: "HealthVit Ginkgo Biloba 180 mg Capsules 60's",
      image:
        "https://www.netmeds.com/images/product-v1/150x150/815204/healthvit_ginkgo_biloba_180_mg_capsules_60_s_0.jpg",
      mkt: "Mkt: West Coast Works Ltd",
      price: " Rs. 860.00",
      mrp: "Rs. 1000.00",
    },
    {
      id: 6,
      name: "HealthVit Horse Chestnut 500 mg Capsules 60's",
      image:
        "https://www.netmeds.com/images/product-v1/150x150/815273/healthvit_horse_chestnut_500_mg_capsules_60_s_0.jpg",
      mkt: "Mkt: West Coast Works Ltd",
      price: " Rs. 688.00",
      mrp: "Rs. 800.00",
    },

    {
      id: 7,
      name: "INLIFE Diastan Plus Diabetic Care Powder 300 gm",
      image:
        "https://www.netmeds.com/images/product-v1/150x150/858539/inlife_diastan_plus_diabetic_care_powder_300_gm_0.jpg",
      mkt: "Mkt: Inlife Pharma Pvt Limited",
      price: " Rs. 495.00",
      mrp: "Rs. 900.00",
    },

    {
      id: 8,
      name: "Keral-Ayurveda Extract Capsules 60's",
      image:
        " https://www.netmeds.com/images/product-v1/150x150/838353/healthvit_boswellia_serrata_500_mg_capsule_60_s_0.jpg",
      mkt: "Mkt: West Coast  Ltd",
      price: " Rs. 387.00",
      mrp: "Rs. 499.00",
    },
    {
      id: 9,
      name: "INLIFE Guggul Extract Capsules 60's",
      image:
        "https://www.netmeds.com/images/product-v1/150x150/858568/inlife_guggul_extract_capsules_60_s_0.jpg",
      mkt: "Mkt: Inlife Pharma Private Limited",
      price: " Rs. 329.34",
      mrp: "Rs. 499.00",
    },
    {
      id: 10,
      name: "INLIFE Shatavari Extract Capsules 60's",
      image:
        "https://www.netmeds.com/images/product-v1/150x150/858569/inlife_shatavari_extract_capsules_60_s_0.jpg",
      mkt: "Mkt: Inlife Pharma Private Limited",
      price: " Rs. 289.42",
      mrp: "Rs. 459.00",
    },
  ];

  return (
    <Box
      position={"relative"}
      height={"400px"}
      width={"100%"}
      bg={"white"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        marginTop={"0px"}
        aria-label="left-arrow"
        colorScheme="gray"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        marginTop={"0px"}
        aria-label="right-arrow"
        colorScheme="gray"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            marginTop={8}
            key={index}
            height={380}
            width={800}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            // backgroundImage={`url(${url})`}
          >
            <Box
              fontSize="sm"
              border={"1px solid grey"}
              rounded={10}
              p={4}
              ml={8}
              bg={"white"}
              width={212}
              height={365}
            >
              <img
                style={{ paddingLeft: "14px", paddingTop: "8px" }}
                src={url.image}
                alt=""
              />
              <Text color={"black"} fontWeight={500}>
                {url.name}
              </Text>
              <Text as={"i"} fontSize="smaller" color={"#717486"}>
                {url.mkt}
              </Text>
              <br></br>
              <span style={{ color: "#6F7284", fontWeight: "500px" }}>
                Best Price*{" "}
              </span>
              <span style={{ color: "#EF4281" }}>{url.price}</span>
              <br></br>
              <span style={{ color: "#6F7284" }}>MRP : </span>
              <Text color={"#717486"} as="s">
                {url.mrp}
              </Text>
              <AddCart key={url.id} prodData={url} />
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
