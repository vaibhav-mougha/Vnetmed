import React from "react";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterDiv = styled.div`
  background-color: #fff;
`;

const Wrapper = styled.footer`
  width: 85%;
  margin: auto;
`;
const FooterTop = styled.div`
  display: flex;
  margin: 30px 10px;
`;
const Pmed = styled.p`
  width: 60%;
  margin: auto;
  left: -50px;
  line-height: 1.5;
  color: rgba(11, 18, 25, 0.5);
  font-size: 16px;
  margin-top: 30px;
`;
const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  font-size: 14px;
`;
const FooterComDiv = styled.div`
  color: #0b1219;
`;
const Input = styled.input`
  border: none;
  padding: 5px 15px;
`;
const ButtonAro = styled.button`
  border: none;
  color: #45babc;
  background-color: #fff;
  margin-left: 30px;
`;
const FooterSub = styled.div`
  width: 21%;
`;
const Footer = () => {
  return (
    <FooterDiv>
      <Wrapper>
        <FooterTop>
          <div>
            <img
              src="https://www.netmeds.com/assets/gloryweb/images/netmeds-footer-logo.svg"
              alt="netmeds"
            />
          </div>
          <Pmed>
            Netmeds.com, India Ki Pharmacy, is brought to you by the Dadha &
            Company – one of India’s most trusted pharmacies, with over 100
            years’ experience in dispensing quality medicines.
          </Pmed>
        </FooterTop>
        <hr />
        <FooterContainer>
          <div>
            <h4>COMPANY</h4>
            <FooterComDiv>
              <p>About Netmeds</p>
              <p>Customers Speak</p>
              <p>In the News</p>
              <p>Carrer</p>
              <p>Terms and Conditions</p>
              <p>Privacy Policy</p>
              <p>Fees and Payments Policy</p>
              <p>Shipping and Delivery Policy</p>
              <p>Return, Refund and Cancellation Policy</p>
              <p>Contact</p>
            </FooterComDiv>
          </div>
          <div>
            <h4>SHOPPING</h4>
            <FooterComDiv>
              <p>Browse by A-Z</p>
              <p>Browse by Manufacturers</p>
              <p>Health Articles</p>
              <p>Offers / Coupons</p>
              <p>FAQs</p>
            </FooterComDiv>
          </div>
          <div>
            <h4>SOCIAL</h4>
            <FooterComDiv>
              <p>Patients Alike</p>
              <p>Facebook</p>
              <p>Twitter</p>
              <p>pedIn</p>
              <p>Youtube</p>
              <p>Refer & Earn</p>
            </FooterComDiv>
          </div>
          <FooterSub>
            <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
            <p>
              Get a free subscription to our health and fitness tip and stay
              tuned to our latest offers
            </p>
            <Input type="text" name="" placeholder="Enter your email address" />
            <ButtonAro>
              {/* <FontAwesomeIcon  /> */}
              {/* icon={faArrowRight} */}
            </ButtonAro>
            <hr />
            <div style={{ display: "flex", marginTop: "10px" }}>
              <a href='https://play.google.com/store/apps/details?id=com.NetmedsMarketplace.Netmeds&hl=en'  target='_blank'>
              <img
                style={{ width: "130px", height: "35px" }}
                src="https://www.netmeds.com/assets/gloryweb/images/icons/play_store.png"
                alt="gPlay"
              />
              </a>
              <a href="https://apps.apple.com/in/app/netmeds-india-ki-pharmacy/id1011070011"  target='_blank'>
              <img
                style={{ width: "130px", height: "35px", marginLeft: "15px" }}
                src="https://www.netmeds.com/assets/gloryweb/images/icons/app_store.png"
                alt="app store"
              />
              </a>
             
            </div>
          </FooterSub>
        </FooterContainer>
        <hr />
        <FooterContainer>
          <div>
            <Link to="/" style={{ color: "rgba(11,18,25,.5)" }}>
              Medicine
            </Link>
          </div>
          <div>
            <Link to="/" style={{ color: "rgba(11,18,25,.5)" }}>
              Wellness
            </Link>
          </div>
          <div>
            <Link to="/" style={{ color: "rgba(11,18,25,.5)" }}>
              Lab Test
            </Link>
          </div>
          <div>
            <Link to="/" style={{ color: "rgba(11,18,25,.5)" }}>
              Beauty
            </Link>
          </div>
          <div>
            <p style={{ margin: "0px", color: "rgba(11,18,25,.5)" }}>
              Copyright© 2022. All Rights Reserved.
            </p>
          </div>
        </FooterContainer>
      </Wrapper>
    </FooterDiv>
  );
};

export default Footer;