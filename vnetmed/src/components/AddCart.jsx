import { Box, Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { cartData } from "../Redux/actions";

// keep the add to cart component here
const AddCart = (mydata) => {
  const [flag, setFlag] = useState(false);
  const [count, setCount] = React.useState(1);
  const dispatch = useDispatch();

  const handleIncrement = (value) => {
    setCount(count + value);
  };

  const handleDecrement = (value) => {
    count > 1 ? setCount(count - value) : setFlag(false);
  };
  // console.log(finallyPost)
  const handleSave = async (mydata) => {
    console.log(mydata, "ab");
    var finallyPost = {
      id: mydata.prodData.id,
      imageUrl: mydata.prodData.imageUrl,
      title: mydata.prodData.title,
      seller: mydata.prodData.seller,
      brand: mydata.prodData.brand,
      salePrice: mydata.prodData.salePrice,
      strikeOfPrice: mydata.prodData.strikeOfPrice,
      qty: mydata.prodData.qty,
    };
    axios.post(
      "https://json-server-main.vercel.app/cart",
      finallyPost
    );
    alert("Item Added to the Cart")
    setFlag(true);

    dispatch(cartData());
  };

  return (
    <>
      <Box>
        {flag ? (
          <Box>
            <Button
              width={10}
              height={10}
              mt={2}
              mr={5}
              rounded={"50%"}
              onClick={() => handleDecrement(1)}
            >
              {" "}
              -{" "}
            </Button>
            <b style={{ marginTop: "20px" }}>{count}</b>
            <Button
              width={10}
              height={10}
              mt={2}
              ml={5}
              rounded={"50%"}
              onClick={() => handleIncrement(1)}
            >
              {" "}
              +{" "}
            </Button>
          </Box>
        ) : (
          <Button
            color={"white"}
            bg={"#24AEB1"}
            onClick={() => handleSave(mydata)}
            mt={2}
            width={180}
          >
            ADD TO CART
          </Button>
        )}
      </Box>
    </>
  );
};
export default AddCart;
