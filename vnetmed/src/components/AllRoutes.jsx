import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Beauty from "../Pages/Beauty/Beauty";
import Cart from "../Pages/Cart";
import CovidEssentialsPage from "../Pages/CovidEssentialsPage";
import Home from "../Pages/Home";
import LabTest from "../Pages/LabTest";
import Payment from "../Pages/Payment";
import ProductPage from "../Pages/ProductPage";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import Success from "../Pages/Success";
import Upload from "../Pages/Upload";
import Wellness from "../Pages/Wellness";
import PrivateAuth from "./PrivateAuth";

const AllRoutes = () => {
  return (
    <div>
      {/* <Link to='/wellness/covidEssentials'></Link> */}
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/" element={<Upload></Upload>} />
        <Route path="/signUp" element={<SignUp></SignUp>} />
        <Route path="/signIn" element={<SignIn></SignIn>} />
        <Route path="/wellness" element={<Wellness></Wellness>} />
        <Route
          path="/wellness/covidEssentials"
          element={<CovidEssentialsPage></CovidEssentialsPage>}
        />
        <Route
          path="/covidEssentials/productPage/:id"
          element={<ProductPage></ProductPage>}
        />
        <Route path="/labtest" element={<LabTest></LabTest>} />
        <Route path="/beauty" element={<Beauty></Beauty>} />
        <Route path="/cart" element={<Cart></Cart>}></Route>

        <Route
          path="/checkout/payment-information"
          element={
            <PrivateAuth>
              <Payment></Payment>
            </PrivateAuth>
          }
        />

        <Route
          path="/success"
          element={
            <PrivateAuth>
              <Success></Success>
            </PrivateAuth>
          }
        />
      </Routes>

      {/* <Footer/> */}
    </div>
  );
};

export default AllRoutes;
