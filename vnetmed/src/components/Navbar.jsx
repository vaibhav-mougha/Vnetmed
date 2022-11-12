import { Box, Input, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faCartShopping,
  // faCaretDown,
  // faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { cartData } from "../Redux/actions";
import logo from "./vnetmed.jpg";

export const Nav = styled.div`
  height: 100px;
  width: 100%;
  background: #24aeb1;
  display: flex;
  gap: 30px;
  padding: 10px;
  padding-top: 22px;
  ${"" /* position:fixed; */}
  ${"" /* overflow:hidden; */}
${"" /* top:0; */}
`;
export const SearchDiv = styled.div`
  height: 52px;
  width: 695px;
  display: flex;
  background: white;
  padding-left: 20px;
  padding-top: 3px;
  border-radius: 7px;
`;

const Navbar = () => {
  const counter = useSelector((state) => state.isAuth.cart);
  console.log(counter.length);

  let count = counter.length;

  const dispatch = useDispatch();

  const auth = useSelector((state) => state.isAuth.isAuth);
  // console.log(auth)

  if (auth) {
    var userData = JSON.parse(localStorage.getItem("USERDATA"));
    var firstName = userData.firstName;
  }

  useEffect(() => {
    dispatch(cartData());

    if (auth) {
      JSON.parse(localStorage.getItem("USERDATA"));
    }
  }, [auth]);

  return (
    <>
      <Nav>
        <Link to="/">
          <img
            width="180px"
            style={{ marginTop: "0px",marginLeft:"100px" }}
            height="10px"
            src={logo}
            alt="NetMeds"
          />
        </Link>
        <SearchDiv>
          <span style={{ paddingTop: "10px", color: "grey" }}>
            Deliver to <span style={{ color: "#24AEB1" }}>250101</span> |
          </span>
          <Input
            variant="styled"
            width="330px"
            placeholder="Search for medicine & wellness products…"
          />
        </SearchDiv>

        <Link to="/">
          <Box display={"flex"} color={"white"} pt={3}>
            <img
              src="https://www.netmeds.com/assets/gloryweb/images/icons/upload_rx.svg"
              alt=""
            />
            <b>Upload</b>
          </Box>
        </Link>

        <Link to="/cart">
          <Box display={"flex"} color={"white"} pr={2} pt={4}>
            <Box
              bg={"#F757A4"}
              ml={6}
              mt={-2}
              mr={-9}
              width={5}
              textAlign={"center"}
              height={4}
              fontSize={"x-small"}
              rounded={"md"}
            >
              {count}
            </Box>
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{ width: "25px", height: "17px" }}
            />
            <b style={{ marginLeft: "3px" }}>Cart</b>
          </Box>
        </Link>

        <Box display={"flex"} width={180} color={"white"} pr={35} pt={3}>
          <FontAwesomeIcon
            icon={faCircleUser}
            style={{ width: "25px", height: "20px", marginTop: "4px" }}
          />
          {auth ? (
            <Link to="/signIn">
              {" "}
              <b style={{ marginLeft: "6px" }}>{auth ? firstName : ""}</b>{" "}
            </Link>
          ) : (
            <Link style={{ width: "160px" }} to="/signUp">
              {" "}
              <b style={{ marginLeft: "4px" }}>Sign In/Sign Up</b>{" "}
            </Link>
          )}
        </Box>
      </Nav>
    </>
  );
};

export default Navbar;
