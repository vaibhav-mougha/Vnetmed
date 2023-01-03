import axios from "axios";
import {
  BESTSELLER_SUCCESS,
  CART_SUCCESS,
  COVIDESSENTIALS_SUCCESS,
  FETCHFILTERDATA,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  NEWONNETMEDS_SUCCESS,
  SUPP_SUCCESS,
} from "./actionTypes";

export const login = () => ({
  type: LOGIN_SUCCESS,
});

export const logout = () => ({
  type: LOGOUT_SUCCESS,
  payload: null,
});

export const suppSuccess = (data) => ({
  type: SUPP_SUCCESS,
  payload: data,
});

export const newOnNetmeds = (data) => ({
  type: NEWONNETMEDS_SUCCESS,
  payload: data,
});

export const covidEssentialSuccess = (data) => ({
  type: COVIDESSENTIALS_SUCCESS,
  payload: data,
});

export const bestSellerSuccess = (data) => ({
  type: BESTSELLER_SUCCESS,
  payload: data,
});

export const fetchFilterData = (data) => ({
  type: FETCHFILTERDATA,
  payload: data,
});

export const takeMeToCart = (data) => ({
  type: CART_SUCCESS,
  payload: data,
});

// FETCH FUNCTIONS

export const fetchSupplement = (payload) => async (dispatch) => {
  axios({
    url: "https://json-server-main.vercel.app/data",
    method: "GET",
    params: {
      q: "vitaminsAndSuppliments",
      _limit: 10,
    },
  })
    .then((res) => {
      console.log(res.data);
      let success = suppSuccess(res.data);
      dispatch(success);
      // alert("Success...!!")
    })
    .catch((e) => {
      console.log(e);
    });
};

export const fetchNewOnNetmeds = (payload) => async (dispatch) => {
  axios({
    url: "https://json-server-main.vercel.app/topProducts",
    method: "GET",
    params: {
      q: "newnetmeds",
      _limit: 10,
    },
  })
    .then((res) => {
      console.log(res.data);
      let success = newOnNetmeds(res.data);
      dispatch(success);
    })
    .catch((e) => {
      console.log(e);
    });
};

export const fetchCovidEssentials = (payload) => async (dispatch) => {
  axios({
    url: "https://json-server-main.vercel.app/data",
    method: "GET",
    params: {
      q: "covidEssentials",
      _limit: 10,
    },
  })
    .then((res) => {
      console.log(res.data);
      let success = covidEssentialSuccess(res.data);
      dispatch(success);
    })
    .catch((e) => {
      console.log(e);
    });
};

export const fetchBestSeller = (payload) => async (dispatch) => {
  axios({
    url: "https://json-server-main.vercel.app/topProducts",
    method: "GET",
    params: {
      q: "bestSeller",
      _limit: 10,
    },
  })
    .then((res) => {
      console.log(res.data);
      let success = bestSellerSuccess(res.data);
      // alert("success")
      dispatch(success);
    })
    .catch((e) => {
      console.log(e);
    });
};

export const fetchData = (payload, page, q, costOrder) => {
  return (dispatch) => {
    axios("https://json-server-main.vercel.app/data", {
      params: {
        ...payload,
        // _page: page,
        // _limit: 20,
        q: q,
        _sort: "salePrice",
        _order: `${costOrder}`,
      },
    })
      .then((r) => {
        dispatch(fetchFilterData(r.data));
        // console.log(r.data)
      })
      .catch((e) => console.log(e));
  };
};

export const cartData = (payload) => (dispatch) => {
  axios("https://json-server-main.vercel.app/cart")
    .then((res) => {
      console.log(res.data);
      let cartAction = takeMeToCart(res.data);
      dispatch(cartAction);
      // alert('cart success')
    })
    .catch((e) => {
      console.log(e);
    });
};
