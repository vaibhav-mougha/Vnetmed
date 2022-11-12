import React from "react";
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function WellnessCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(1);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  // These are the images used in the slide
  const cards = [
    "https://www.netmeds.com/images/cms/aw_rbslider/slides/1654249719_Wellness_home.jpg",
    "https://www.netmeds.com/images/cms/aw_rbslider/slides/1654247920_Wellness_Home_title.jpg",
    "https://www.netmeds.com/images/cms/aw_rbslider/slides/1645554707_Guide-1680px-x-320_Web.png",
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
        marginTop={"-28px"}
        aria-label="left-arrow"
        colorScheme="whiteAlpha"
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
        marginTop={"-28px"}
        aria-label="right-arrow"
        colorScheme="whiteAlpha"
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
            key={index}
            height={310}
            width={1000}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
          >
            {/* <img width='100%' height='500px' src={url} alt=''/> */}
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
