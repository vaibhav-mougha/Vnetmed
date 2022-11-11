import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Success = () => {
  let DiscountPrice = JSON.parse(localStorage.getItem("DiscountPrice")) || "";

  return (
    <Box height={600}>
      <Alert
        status="success"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="600px"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="x-large">
          Payment Succesfully...!!
        </AlertTitle>
        <AlertDescription mt={4} mb={4} maxWidth="sm">
          Your Payment of ₹{DiscountPrice} was successfully completed...
        </AlertDescription>

        <Link to="/">
          {" "}
          <Button color={"White"} bg={"#28911E"}>
            Continue Shopping
          </Button>{" "}
        </Link>
      </Alert>
    </Box>
  );
};

export default Success;
