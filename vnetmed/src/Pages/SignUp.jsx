import * as React from "react";
import { HStack, PinInput, PinInputField } from "@chakra-ui/react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../Redux/actions";
import Navbar from "../components/Navbar";

export default function SignUp() {
  const [flag, setFlag] = React.useState(false);
  const [number, setNumber] = React.useState("");
  const [name, setName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [otp1, setOtp1] = React.useState("");
  const [otp2, setOtp2] = React.useState("");
  const [otp3, setOtp3] = React.useState("");
  const [otp4, setOtp4] = React.useState("");
  const [otp5, setOtp5] = React.useState("");
  const [otp6, setOtp6] = React.useState("");
  const navigate = useNavigate();

  // const auth = useSelector((state)=>state.isAuth.isAuth)

  const dispatch = useDispatch();

  const handleOTP = () => {
    setFlag(true);
  };
  console.log(email);

  let customerData = {
    email: email,
    firstName: name,
    lastName: lastName,
    mobile: number,
  };

  const handleVerify = () => {
    if (email !== "") {
      if (
        otp1 === "1" &&
        otp2 === "2" &&
        otp3 === "3" &&
        otp4 === "4" &&
        otp5 === "5" &&
        otp6 === "6"
      ) {
        localStorage.setItem("USERDATA", JSON.stringify(customerData));
        dispatch(login());
        alert("SignUp Successful...!!");
        navigate("/");
      } else {
        alert("FAILED >>>>> USE OTP 123456");
      }
    } else {
      alert("Please Fill Email Id");
    }
  };

  // handleChange = (otp) => this.setState({ otp });
  return (
    <>
      <Navbar />

      <Box
        m={50}
        rounded={20}
        p={20}
        pl={0}
        boxShadow="rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px"
        display="flex"
        gap={100}
      >
        <Box>
          <img
            border="1px solid green"
            style={{ marginTop: "-60px", marginRight: "200" }}
            width="508px"
            height="718px"
            src="https://www.netmeds.com/images/cms/wysiwyg/cms/1588773798_sign-in-banner-new.png"
            alt=""
          />
        </Box>

        {!flag ? (
          <>
            <Box>
              <Flex
                mt={-230}
                minH={"100vh"}
                align={"center"}
                justify={"center"}
              >
                <Stack
                  spacing={8}
                  mt={40}
                  mx={"auto"}
                  maxW={"lg"}
                  py={12}
                  px={6}
                >
                  <Stack>
                    <Heading fontSize={"4xl"}>Sign In /Sign Up</Heading>
                    <Text fontSize={"lg"} mb={80} color={"gray.600"}>
                      Sign up or Sign in to access your orders, special offers,
                      health tips and more!
                    </Text>
                  </Stack>
                  <Box rounded={"lg"}>
                    <Box spacing={4}>
                      <FormControl id="number">
                        <FormLabel
                          mb={-4}
                          ml={0}
                          color="#24AEB1"
                          fontSize={"small"}
                        >
                          PHONE NUMBER
                        </FormLabel>{" "}
                        <br></br>
                        <b>+91 - </b>
                        <Input
                          mb={18}
                          onChange={(e) => setNumber(e.target.value)}
                          mt={-200}
                          autoFocus
                          textDecoration="none"
                          border="none"
                          boxShadow="base"
                          placeholder="Enter your mobile no"
                          width={352}
                          type="number"
                        ></Input>
                      </FormControl>
                      <Stack spacing={10}>
                        <Button
                          width={400}
                          onClick={handleOTP}
                          bg={"#24AEB1"}
                          color={"white"}
                          _hover={{
                            bg: "#24AEB1.500",
                          }}
                        >
                          USE OTP
                        </Button>
                      </Stack>
                    </Box>
                  </Box>
                </Stack>
              </Flex>

              <Box mt={-10} pl={0} display="flex">
                <Button
                  border="1px solid lightgrey"
                  ml={10}
                  mr={10}
                  width={155}
                  height="50px"
                  bg={"white"}
                >
                  {" "}
                  <img
                    style={{ marginRight: "20px" }}
                    width="20px"
                    height="20px"
                    src="https://toppng.com/uploads/preview/google-g-logo-icon-11609362962anodywxeaz.png"
                    alt="google"
                  />
                  <b> </b> Google
                </Button>
                <Button
                  border="1px solid lightgrey"
                  width={155}
                  height="50px"
                  bg={"white"}
                >
                  {" "}
                  <img
                    style={{ marginRight: "20px" }}
                    width="20px"
                    height="20px"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/480px-Facebook_logo_%28square%29.png"
                    alt="fb"
                  />
                  Facebook
                </Button>
              </Box>
            </Box>
          </>
        ) : (
          <>
            <Box p={-30}>
              <Box pl={0}>
                <Heading fontSize={"4xl"}>Create Account</Heading>
                <FormControl id="email" isRequired>
                  <FormLabel
                    htmlFor="email"
                    mb={-4}
                    mt={7}
                    ml={0}
                    color="#24AEB1"
                    fontSize={"small"}
                  >
                    EMAIL ID
                  </FormLabel>{" "}
                  <br></br>
                  <Input
                    mb={19}
                    mt={-200}
                    autoFocus
                    textDecoration="none"
                    onChange={(e) => setEmail(e.target.value)}
                    border="none"
                    boxShadow="base"
                    placeholder="Enter your Email Id"
                    width={367}
                    type="email"
                  ></Input>
                </FormControl>

                <FormControl mt={19} id="firstname">
                  <FormLabel mb={-4} ml={0} color="#24AEB1" fontSize={"small"}>
                    FIRST NAME
                  </FormLabel>{" "}
                  <br></br>
                  <Input
                    mb={18}
                    mt={-200}
                    autoFocus
                    textDecoration="none"
                    onChange={(e) => setName(e.target.value)}
                    border="none"
                    boxShadow="base"
                    placeholder="Your First Name"
                    width={367}
                    type="text"
                  ></Input>
                </FormControl>

                <FormControl mt={19} id="lastname">
                  <FormLabel mb={-4} ml={0} color="#24AEB1" fontSize={"small"}>
                    LAST NAME
                  </FormLabel>{" "}
                  <br></br>
                  <Input
                    mb={18}
                    mt={-200}
                    autoFocus
                    textDecoration="none"
                    onChange={(e) => setLastName(e.target.value)}
                    border="none"
                    boxShadow="base"
                    placeholder="Your Last Name"
                    width={367}
                    type="text"
                  ></Input>
                </FormControl>

                <Flex justify="center" align="center" w="full">
                  <FormControl ml={0} w="60">
                    <Text mt={8} ml={-180}>
                      VERIFYING NUMBER
                    </Text>
                    <Box display="flex" width="600px">
                      <Text mt={1} ml={-180} mb={3}>
                        We have sent 6 digit OTP on +91-{number}
                      </Text>
                      <a
                        href="/SignUp"
                        style={{
                          marginLeft: "50px",
                          marginTop: "10px",
                          color: "#EF4281",
                          fontSize: "14px",
                        }}
                      >
                        Change
                      </a>
                    </Box>
                    <div
                      style={{
                        width: "500px",
                        textAlign: "left",
                        marginLeft: "-180px",
                      }}
                    >
                      {/* {otp.map((el, index) => {
    return (  <Input placeholder="1" mr={3} width={12} type="number" min={1}  max={1}
        name="otp"
        key={index}
        onFocus={(e) => e.target.select()}
          
        />
    )
  })} */}

                      <HStack>
                        <PinInput>
                          <PinInputField
                            onChange={(e) => setOtp1(e.target.value)}
                          />
                          <PinInputField
                            onChange={(e) => setOtp2(e.target.value)}
                          />
                          <PinInputField
                            onChange={(e) => setOtp3(e.target.value)}
                          />
                          <PinInputField
                            onChange={(e) => setOtp4(e.target.value)}
                          />
                          <PinInputField
                            onChange={(e) => setOtp5(e.target.value)}
                          />
                          <PinInputField
                            onChange={(e) => setOtp6(e.target.value)}
                          />
                        </PinInput>
                      </HStack>
                    </div>
                  </FormControl>
                </Flex>
                <Box width="600px">
                  <a
                    href="/SignUp"
                    style={{
                      marginLeft: "350px",
                      color: "#EF4281",
                      fontSize: "14px",
                    }}
                  >
                    Resend OTP
                  </a>
                </Box>

                <Button
                  width={380}
                  mt={2}
                  bg={"#24AEB1"}
                  color={"white"}
                  onClick={handleVerify}
                >
                  Verify
                </Button>

                <Box mt={50} pl={0} display="flex">
                  <Button
                    border="1px solid lightgrey"
                    ml={5}
                    mr={10}
                    width={155}
                    height="50px"
                    bg={"white"}
                  >
                    {" "}
                    <img
                      style={{ marginRight: "20px" }}
                      width="20px"
                      height="20px"
                      src="https://toppng.com/uploads/preview/google-g-logo-icon-11609362962anodywxeaz.png"
                      alt="google"
                    />
                    <b> </b> Google
                  </Button>
                  <Button
                    border="1px solid lightgrey"
                    width={155}
                    height="50px"
                    bg={"white"}
                  >
                    {" "}
                    <img
                      style={{ marginRight: "20px" }}
                      width="20px"
                      height="20px"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/480px-Facebook_logo_%28square%29.png"
                      alt="fb"
                    />
                    Facebook
                  </Button>
                </Box>
              </Box>
            </Box>
          </>
        )}
      </Box>

      <Text textAlign="center">
        By continuing you agree to our Terms of service <br></br>
        and Privacy & Legal Policy.
      </Text>
    </>
  );
}
