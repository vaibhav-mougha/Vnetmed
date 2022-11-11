import { Box, Button, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Avatar } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { cartData, logout } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";

const SignIn = () => {
  var userData = JSON.parse(localStorage.getItem("USERDATA"));

  let firstName = userData.firstName;
  let lastName = userData.lastName;
  let email = userData.email;
  let mobile = userData.mobile;

  const auth = useSelector((state) => state.isAuth.isAuth);
  console.log(auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    JSON.parse(localStorage.getItem("USERDATA"));
  }, [userData]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <Box bg={"#151B390F"} width="100%" height="auto">
        <Text pl={175} pt={5} pb={3} fontSize="28px" fontWeight={600}>
          Your Account
        </Text>

        <Box ml={140}>
          <Box display={"flex"} gap={10}>
            <Box
              display={"flex"}
              gap={3}
              bg={"white"}
              width={338}
              height={130}
              rounded={5}
            >
              <Box p={6} pr={1}>
                <img
                  src="https://www.netmeds.com/msassets/images/icons/profile-icon.svg"
                  alt=""
                />
              </Box>
              <Box>
                <Text fontSize="28px" fontWeight={600} pt={5}>
                  {auth ? firstName + " " + lastName : " "}
                </Text>
                <Text color="#151B3999" as="i">
                  {auth ? email : " "}
                </Text>
                <Text fontSize={14} color={"black.400"}>
                  +91-{auth ? mobile : " "}
                </Text>
              </Box>
            </Box>

            <Box
              cursor={"pointer"}
              display={"flex"}
              pl={28}
              pr={28}
              justifyContent={"space-around"}
              bg={"white"}
              width={638}
              height={130}
              rounded={5}
            >
              <Box width={"300"} p={2}>
                <Avatar
                  ml={25}
                  mt={4}
                  src="https://www.netmeds.com/msassets/images/icons/payment_history.svg"
                  alt=""
                />
                <Text fontSize="14px" fontWeight={400} pt={5}>
                  Payment Methods
                </Text>
              </Box>

              <Box width={"300"} p={2}>
                <Avatar
                  ml={25}
                  mt={4}
                  src="https://www.netmeds.com/msassets/images/icons/medicine_orders.svg"
                  alt=""
                />
                <Text fontSize="14px" fontWeight={400} pt={5}>
                  Medicine Orders
                </Text>
              </Box>

              <Box width={"300"} p={2}>
                <Avatar
                  ml={13}
                  mt={4}
                  src="https://www.netmeds.com/msassets/images/icons/rewards.svg"
                  alt=""
                />
                <Text fontSize="14px" fontWeight={400} pt={5}>
                  My Rewards
                </Text>
              </Box>
            </Box>
          </Box>

          <Box display={"flex"} mt={5} gap={10}>
            <Box cursor={"pointer"}>
              <Box
                display={"flex"}
                borderTopLeftRadius={5}
                borderTopEndRadius={5}
                bg={"white"}
                width={338}
                height={85}
              >
                <Box p={7}>
                  <Avatar
                    size="sm"
                    src="https://www.netmeds.com/msassets/images/icons/account_information_blue.svg"
                    alt=""
                  />
                </Box>
                <Box borderBottom="2px" borderColor="gray.200" pr={5}>
                  <Text fontSize="17px" fontWeight={700} pt={8}>
                    Account Information
                  </Text>
                  <ChevronRightIcon
                    mt={-14}
                    ml={44}
                    w={8}
                    h={7}
                    color="#151B3980"
                  />
                </Box>
              </Box>

              <Box display={"flex"} bg={"white"} width={338} height={85}>
                <Box p={7}>
                  <Avatar
                    size="sm"
                    src="https://www.netmeds.com/msassets/images/icons/wallet_grey.svg"
                    alt=""
                  />
                </Box>
                <Box borderBottom="2px" borderColor="gray.200" pr={5}>
                  <Text fontSize="17px" fontWeight={500} pt={8}>
                    My Wallet
                  </Text>
                  <ChevronRightIcon
                    mt={-14}
                    ml={44}
                    w={8}
                    h={7}
                    color="#151B3980"
                  />
                </Box>
              </Box>

              <Box display={"flex"} mt={0} bg={"white"} width={338} height={85}>
                <Box p={7}>
                  <Avatar
                    size="sm"
                    src="https://www.netmeds.com/msassets/images/icons/favorite.svg"
                    alt=""
                  />
                </Box>
                <Box borderBottom="2px" borderColor="gray.200" pr={5}>
                  <Text fontSize="17px" fontWeight={500} pt={8}>
                    My WishList
                  </Text>
                  <ChevronRightIcon
                    mt={-14}
                    ml={44}
                    w={8}
                    h={7}
                    color="#151B3980"
                  />
                </Box>
              </Box>

              <Box display={"flex"} mt={0} bg={"white"} width={338} height={85}>
                <Box p={7}>
                  <Avatar
                    size="sm"
                    src="https://www.netmeds.com/msassets/images/icons/offer_inactive.svg"
                    alt=""
                  />
                </Box>
                <Box borderBottom="2px" borderColor="gray.200" pr={5}>
                  <Text fontSize="17px" fontWeight={500} pt={8}>
                    Offers
                  </Text>
                  <ChevronRightIcon
                    mt={-14}
                    ml={44}
                    w={8}
                    h={7}
                    color="#151B3980"
                  />
                </Box>
              </Box>

              <Box display={"flex"} mt={0} bg={"white"} width={338} height={85}>
                <Box p={7}>
                  <Avatar
                    size="sm"
                    src="https://www.netmeds.com/msassets/images/icons/netmeds-elite_inactive.svg"
                    alt=""
                  />
                </Box>
                <Box borderBottom="2px" borderColor="gray.200" pr={5}>
                  <Text fontSize="17px" fontWeight={500} pt={8}>
                    Netmeds First
                  </Text>
                  <ChevronRightIcon
                    mt={-14}
                    ml={44}
                    w={8}
                    h={7}
                    color="#151B3980"
                  />
                </Box>
              </Box>

              <Box display={"flex"} mt={0} bg={"white"} width={338} height={85}>
                <Box p={7}>
                  <Avatar
                    size="sm"
                    src="https://www.netmeds.com/msassets/images/icons/delivery_inactive.svg"
                    alt=""
                  />
                </Box>
                <Box borderBottom="2px" borderColor="gray.200" pr={5}>
                  <Text fontSize="17px" fontWeight={500} pt={8}>
                    Delivery Addresses
                  </Text>
                  <ChevronRightIcon
                    mt={-14}
                    ml={44}
                    w={8}
                    h={7}
                    color="#151B3980"
                  />
                </Box>
              </Box>

              <Box display={"flex"} mt={0} bg={"white"} width={338} height={85}>
                <Box p={7}>
                  <Avatar
                    size="sm"
                    src="https://www.netmeds.com/msassets/images/icons/my-prescription_inactive.svg"
                    alt=""
                  />
                </Box>
                <Box borderBottom="2px" borderColor="gray.200" pr={5}>
                  <Text fontSize="17px" fontWeight={500} pt={8}>
                    My Prescription
                  </Text>
                  <ChevronRightIcon
                    mt={-14}
                    ml={44}
                    w={8}
                    h={7}
                    color="#151B3980"
                  />
                </Box>
              </Box>

              <Box display={"flex"} mt={0} bg={"white"} width={338} height={85}>
                <Box p={7}>
                  <Avatar
                    size="sm"
                    src="https://www.netmeds.com/msassets/images/icons/subscription_grey.svg"
                    alt=""
                  />
                </Box>
                <Box borderBottom="2px" borderColor="gray.200" pr={5}>
                  <Text fontSize="17px" fontWeight={500} pt={8}>
                    My Subscription
                  </Text>
                  <ChevronRightIcon
                    mt={-14}
                    ml={44}
                    w={8}
                    h={7}
                    color="#151B3980"
                  />
                </Box>
              </Box>

              <Box display={"flex"} mt={0} bg={"white"} width={338} height={85}>
                <Box p={7}>
                  <Avatar
                    size="sm"
                    src="https://www.netmeds.com/msassets/images/icons/refer_earn_grey.svg"
                    alt=""
                  />
                </Box>
                <Box borderBottom="2px" borderColor="gray.200" pr={5}>
                  <Text fontSize="17px" fontWeight={500} pt={8}>
                    Refer & Earn
                  </Text>
                  <ChevronRightIcon
                    mt={-14}
                    ml={44}
                    w={8}
                    h={7}
                    color="#151B3980"
                  />
                </Box>
              </Box>

              <Box display={"flex"} mt={0} bg={"white"} width={338} height={85}>
                <Box p={7}>
                  <Avatar
                    size="sm"
                    src="https://www.netmeds.com/msassets/images/icons/support_inactive.svg"
                    alt=""
                  />
                </Box>
                <Box borderBottom="2px" borderColor="gray.200" pr={5}>
                  <Text fontSize="17px" fontWeight={500} pt={8}>
                    Help
                  </Text>
                  <ChevronRightIcon
                    mt={-14}
                    ml={44}
                    w={8}
                    h={7}
                    color="#151B3980"
                  />
                </Box>
              </Box>

              <Box display={"flex"} mt={0} bg={"white"} width={338} height={85}>
                <Box p={7}>
                  <Avatar
                    size="sm"
                    src="ttps://www.netmeds.com/msassets/images/icons/document_inactive.svg"
                    alt=""
                  />
                </Box>
                <Box borderBottom="2px" borderColor="gray.200" pr={5}>
                  <Text fontSize="17px" fontWeight={500} pt={8}>
                    Legal Information
                  </Text>
                  <ChevronRightIcon
                    mt={-14}
                    ml={44}
                    w={8}
                    h={7}
                    color="#151B3980"
                  />
                </Box>
              </Box>

              <Box display={"flex"} mt={0} bg={"white"} width={338} height={85}>
                <Box p={7}>
                  <Avatar
                    size="sm"
                    src="https://www.netmeds.com/msassets/images/icons/contact-us_grey.svg"
                    alt=""
                  />
                </Box>
                <Box borderBottom="2px" borderColor="gray.200" pr={5}>
                  <Text fontSize="17px" fontWeight={500} pt={8}>
                    Contact Us
                  </Text>
                  <ChevronRightIcon
                    mt={-14}
                    ml={44}
                    w={8}
                    h={7}
                    color="#151B3980"
                  />
                </Box>
              </Box>

              <Box display={"flex"} mt={0} bg={"white"} width={338} height={85}>
                <Box p={7}>
                  <Avatar
                    size="sm"
                    src="https://www.netmeds.com/msassets/images/icons/document_inactive.svg"
                    alt=""
                  />
                </Box>
                <Box borderBottom="2px" borderColor="gray.200" pr={5}>
                  <Text fontSize="17px" fontWeight={500} pt={8}>
                    Rate Us
                  </Text>
                  <ChevronRightIcon
                    mt={-14}
                    ml={44}
                    w={8}
                    h={7}
                    color="#151B3980"
                  />
                </Box>
              </Box>

              <Box display={"flex"} mt={0} bg={"white"} width={338} height={85}>
                <Box p={7}>
                  <Avatar
                    size="sm"
                    src="https://www.netmeds.com/msassets/images/icons/lock_grey.svg"
                    alt=""
                  />
                </Box>
                <Box
                  as="button"
                  textAlign={"left"}
                  onClick={handleLogout}
                  borderBottom="2px"
                  borderColor="gray.200"
                >
                  <Text fontSize="17px" fontWeight={500} pt={8}>
                    Logout
                  </Text>
                  <ChevronRightIcon
                    mt={-14}
                    ml={174}
                    w={8}
                    h={7}
                    color="#151B3980"
                  />
                </Box>
              </Box>
            </Box>

            <Box>
              <Box rounded={5} bg={"white"} width={638} height={300}>
                <Box
                  color={"gray.500"}
                  fontWeight={500}
                  fontSize={15}
                  display={"flex"}
                >
                  <Text m={6} mr={20}>
                    LOGIN INFORMATION
                  </Text>
                  <Text m={6} pl={12}>
                    PERSONAL INFORMATION
                  </Text>
                </Box>

                <Box display={"flex"} gap={5}>
                  <Box>
                    <Text
                      m={8}
                      mt={0}
                      fontWeight="500"
                      fontSize={15}
                      color={"#24AEB1"}
                    >
                      EMAIL
                    </Text>
                    <Box
                      width="260px"
                      ml={8}
                      borderBottom="2px"
                      borderColor="gray.200"
                    >
                      <Text m={0} mt={-6} fontWeight="500" fontSize={15}>
                        {auth ? email : " "}
                      </Text>
                    </Box>
                  </Box>

                  <Box>
                    <Text
                      m={8}
                      mt={0}
                      fontWeight="500"
                      fontSize={15}
                      color={"#24AEB1"}
                    >
                      FULL NAME
                    </Text>
                    <Box
                      width="260px"
                      ml={8}
                      borderBottom="2px"
                      borderColor="gray.200"
                    >
                      <Text m={0} mt={-6} fontWeight="500" fontSize={15}>
                        {auth ? firstName + " " + lastName : " "}
                      </Text>
                    </Box>
                  </Box>
                </Box>

                <Box display={"flex"} pt={2} mt={19} gap={5}>
                  <Box>
                    <Text
                      m={8}
                      mt={0}
                      fontWeight="500"
                      fontSize={15}
                      color={"#24AEB1"}
                    >
                      MOBILE NUMBER
                    </Text>
                    <Box
                      width="260px"
                      ml={8}
                      borderBottom="2px"
                      borderColor="gray.200"
                    >
                      <Text m={0} mt={-6} fontWeight="500" fontSize={15}>
                        +91-{auth ? mobile : " "}
                      </Text>
                    </Box>
                  </Box>

                  <Box>
                    <Text
                      m={8}
                      mt={0}
                      fontWeight="500"
                      fontSize={15}
                      color={"#24AEB1"}
                    >
                      GENDER
                    </Text>
                    <Box
                      width="260px"
                      ml={8}
                      borderBottom="2px"
                      borderColor="gray.200"
                    >
                      <Text m={0} mt={-6} fontWeight="500" fontSize={15}>
                        No-Data
                      </Text>
                    </Box>
                  </Box>
                </Box>

                <Button
                  height={10}
                  width={40}
                  color={"#ef4281"}
                  p={6}
                  m={6}
                  ml={450}
                >
                  Modify
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SignIn;
