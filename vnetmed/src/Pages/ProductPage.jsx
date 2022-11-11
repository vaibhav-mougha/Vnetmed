import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { postToCart } from "../Redux/actions";

const ProductPage = (id) => {
  const [data, setData] = useState(null);

  // const [cartData,setCartData] = useState("")
  // const dispatch = useDispatch()
  // // console.log(cartData)
  const params = useParams();
  console.log(id);

  useEffect(() => {
    const user_id = params.id;
    console.log(user_id);

    axios({
      url: `https://netmeds-server-data.herokuapp.com/api/data/${user_id}`,
      method: "GET",
    })
      .then((res) => {
        setData(res.data);
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });

    axios
      .post("https://netmeds-server-data.herokuapp.com/api/cart", data)
      .then((res) => {
        alert("post success");
      })
      .catch((e) => {
        alert("post failed");
        console.log(e);
      });
  }, [params.user_id]);

  //     const handleSave=(data)=>{

  //     console.log(data)

  // }

  // handleSave(data)

  return (
    <>
      {/* <center><h2>{data?.name}</h2>
    <div>
      

        <div style={{display:"flex",gap:"20px",padding:"20px",marginLeft:"150px"}}>
            <img src={data?.imageUrl} width="300px" height="300px" alt="" />
            <div>
                 <h4>Product Name: {data?.title}</h4>
                 <h4>Price: {data?.salePrice}</h4>
                 <h4>Description:{data?.seller}</h4>
                 <button onClick={()=>handleSave(data)} style={{cursor:"pointer",height:"50px",border:"none",borderRadius:"10px",padding:"20px",background:"black",color:"white"}}>Add To Cart</button>     
            </div>  
        </div>
       
    </div>
   
    </center> 
     */}
    </>
  );
};

export default ProductPage;
