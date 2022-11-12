import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export const Navv = styled.div`
  height: 60px;
  width: 100%;
  background: #24aeb1;
  color: #ffffffcc;
  display: flex;
  justify-content: space-around;
  padding: 0px;
`;

const Navbar2 = () => {
  return (
    <>
      <Navv style={{ paddingLeft: "100px", paddingRight: "100px" }}>
        <Box>
          <Menu>
            {({ isOpen }) => (
              <React.Fragment>
                <MenuButton bg="#24AEB1" as={Button}>
                  Medicine
                  <ChevronDownIcon />
                </MenuButton>
                <MenuList>
                  <Link to="/">
                    {" "}
                    <MenuItem color="black">All Medicines</MenuItem>
                  </Link>
                  <Link to="/">
                    {" "}
                    <MenuItem color="black">
                      Previously Ordered Products
                    </MenuItem>
                  </Link>
                </MenuList>
              </React.Fragment>
            )}
          </Menu>
        </Box>

        <Link to="/wellness" style={{ fontWeight: "500", paddingTop: "7px" }}>
          Wellness
        </Link>
        <Link to="/" style={{ fontWeight: "500", paddingTop: "7px" }}>
          Lab Tests
        </Link>
        <Box>
          <Menu>
            {({ isOpen }) => (
              <React.Fragment>
                <MenuButton bg="#24AEB1" as={Button}>
                  Beauty
                  <ChevronDownIcon />
                </MenuButton>
                <MenuList>
                  <Link to="/">
                    {" "}
                    <MenuItem color="#151B39">Personal Care</MenuItem>
                  </Link>
                  <Link to="/">
                    {" "}
                    <MenuItem color="#151B39">Make-up</MenuItem>
                  </Link>
                  <Link to="/">
                    {" "}
                    <MenuItem color="#151B39">Hair</MenuItem>
                  </Link>
                  <Link to="/">
                    {" "}
                    <MenuItem color="#151B39">Skin Care</MenuItem>
                  </Link>
                  <Link to="/">
                    {" "}
                    <MenuItem color="#151B39">Tools & Appliances</MenuItem>
                  </Link>
                  <Link to="/">
                    {" "}
                    <MenuItem color="#151B39">Mom & Baby</MenuItem>
                  </Link>
                  <Link to="/">
                    {" "}
                    <MenuItem color="#151B39">Fragrances</MenuItem>
                  </Link>
                  <Link to="/">
                    {" "}
                    <MenuItem color="#151B39">Men's Grooming</MenuItem>
                  </Link>
                </MenuList>
              </React.Fragment>
            )}
          </Menu>
        </Box>
        <Box>
          <Menu>
            {({ isOpen }) => (
              <React.Fragment>
                <MenuButton bg="#24AEB1" as={Button}>
                  Health Corner
                  <ChevronDownIcon />
                </MenuButton>
                <MenuList>
                  <Link to="/">
                    {" "}
                    <MenuItem color="black">Health Library</MenuItem>
                  </Link>
                  <Link to="/">
                    {" "}
                    <MenuItem color="black">PatientsAlike</MenuItem>
                  </Link>
                  <Link to="/">
                    {" "}
                    <MenuItem color="black">Corona Awareness</MenuItem>
                  </Link>
                </MenuList>
              </React.Fragment>
            )}
          </Menu>
        </Box>
      </Navv>
      <Navv
        style={{
          paddingLeft: "100px",
          paddingRight: "100px",
          width: "100%",
          background: "white",
          color: "#151B39",
          fontSize: "15px",
          fontWeight: "400",
          justifyContent: "space-around",
          paddingTop: "10px",
        }}
      >
        <Link to="/">COVID Essentials</Link>
        <Link to="/">Diabetes</Link>
        <Link to="/">Eyewear</Link>
        <Link to="/">Ayush</Link>
        <Link to="/">Ayurvedic</Link>
        <Link to="/">Homeopathy</Link>
        <Link to="/">Fitness</Link>
        <Link to="/">Mom & Baby</Link>
        <Link to="/">Devices</Link>
        <Link to="/">Surgicals</Link>
        <Link to="/">Sexual Wellness</Link>
        <Link to="/">Treatements</Link>
      </Navv>
    </>
  );
};

export default Navbar2;
