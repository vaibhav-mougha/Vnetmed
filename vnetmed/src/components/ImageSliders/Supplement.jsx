import React, { useEffect } from "react";
import {
  Text,
  Box,
  IconButton,
  useBreakpointValue,
  Button,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import AddCart from "../AddCart";
import { useDispatch, useSelector } from "react-redux";
import { fetchSupplement } from "../../Redux/actions";

// Settings for the slider
const settings = {
  dots: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  infinite: false,
};

export default function Supplement() {
  const suppData = useSelector((state) => state.isAuth.supplementData);
  console.log(suppData);

  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch(fetchSupplement())
    dispatch(fetchSupplement());
  }, []);

  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(1);
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

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
        {suppData.map((url, index) => (
          <Box
            marginTop={2}
            key={index}
            height={400}
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
              pt={1}
              ml={8}
              bg={"white"}
              width={212}
              height={366}
            >
              <Button
                bg={"#84BE52"}
                fontSize="smaller"
                p={1}
                color={"white"}
                size="xxs"
              >
                {url.off}
              </Button>
              <img
                style={{ paddingLeft: "14px", paddingTop: "2px" }}
                src={url.imageUrl}
                alt=""
              />
              <Text color={"black"} fontWeight={500}>
                {url.title}
              </Text>
              <Text>{url.brand}</Text>
              <Text as={"i"} fontSize="smaller" color={"#717486"}>
                {url.seller}
              </Text>
              <br></br>
              <span style={{ color: "#6F7284", fontWeight: "500px" }}>
                Best Price*{" "}
              </span>
              <span style={{ color: "#EF4281" }}>{url.salePrice}</span>
              <br></br>
              <span style={{ color: "#6F7284" }}>MRP : </span>
              <Text color={"#717486"} as="s">
                Rs.{url.strikeOfPrice}
              </Text>
              <AddCart key={url.id} prodData={url} />
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
