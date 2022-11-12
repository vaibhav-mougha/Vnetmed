import React from "react";
import { Text, Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  infinite: false,
};

export default function Carousel() {
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
      name: "Head-Shoulders",
      image:
        "https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/head-shoulders.jpg?v=15",
      offer: "UPTO 5% OFF",
    },
    {
      id: 2,
      name: "Coony",
      image:
        "https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/coony.jpg?v=15",
      offer: "UPTO 30% OFF",
    },
    {
      id: 3,
      name: "Veet",
      image:
        "https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/veet.jpg?v=15",
      offer: "FLAT 5% OFF",
    },
    {
      id: 4,
      name: "St-Devence",
      image:
        "https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/st-dvence.jpg?v=15",
      offer: "UPTO 30% OFF",
    },
    {
      id: 5,
      name: "Aroma-Magic",
      image:
        "https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/aroma-magic.jpg?v=15",
      offer: "UPTO 25% OFF",
    },
    {
      id: 6,
      name: "Dabur",
      image:
        "https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/dabur.jpg?v=15",
      offer: "UPTO 27% OFF",
    },

    {
      id: 7,
      name: "Baidyanath",
      image:
        " https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/baidyanath.jpg?v=15",
      offer: "UPTO 15% OFF",
    },

    {
      id: 8,
      name: "Keral-Ayurveda",
      image:
        "  https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/kerala-ayurveda.jpg?v=15",
      offer: "UPTO 25% OFF",
    },
  ];

  return (
    <Box
      position={"relative"}
      height={"380px"}
      width={"100%"}
      bg={"#F3F7FB"}
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
              rounded={10}
              pr={5}
              ml={6}
              p={8}
              bg={"white"}
              textAlign={"center"}
              width={212}
              height={350}
            >
              <img src={url.image} alt="" />
              <Text pt={10} fontWeight={500}>
                {url.name}
              </Text>
              <Text pt={10} color={"#5BA41C"}>
                {url.offer}
              </Text>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
