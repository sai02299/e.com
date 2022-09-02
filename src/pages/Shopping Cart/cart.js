/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// import MKButton from "components/MKButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
// import DefaultFooter from "examples/Footers/DefaultFooter";

// About Us page sections
// import Information from "pages/LandingPages/AboutUs/sections/Information";
// import Team from "pages/LandingPages/AboutUs/sections/Team";
// import Featuring from "pages/LandingPages/AboutUs/sections/Featuring";
// import Newsletter from "pages/LandingPages/AboutUs/sections/Newsletter";

// Routes
import routes from "routes";
// import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg-about-us.jpg";

import React, { useState } from "react"
import "./style.css"
import Button from "assets/theme/components/button";

const data = [
    {
        Title: "Mutton",
        price: "565",
        Benifits: [
            "dfghjkl",
            "gfghj",
            "hjkl",
            "jkl"
        ]
    },
    {
        Title: "Chicken",
        price: "565",
        Benifits: [
            "dfghjkl",
            "gfghj",
            "hjkl",
            "jkl"
        ]
    },
    {
        Title: "Fish",
        price: "565",
        Benifits: [
            "dfghjkl",
            "gfghj",
            "hjkl",
            "jkl"
        ]
    }

]
function AboutUs() {

    const [count, setCount] = useState(1)
    const countUp = () => {
        setCount(count+1)
    }
    const countDown = () => {
        setCount(count-1)
    }
    return (
        <>
          {/* <section id="hero">
        <div class="hero-container">
            <div class="hero-logo">
                <h1 class="font-weight-bold">Cart Products</h1>
            </div>
            </div>
    </section> */}
    {/* <section id="hero"> */}
        <center style={{backgroundColor:"green", height:"50px", paddingTop:"8px"}}>Cart Products</center>
    {/* </section> */}
    <section class="mt-5">
        <div class="container">
            <div class="cart" style={{border:"2px solid black"}}>
            <div class="table-responsive">
                <table class="table">
                    <thead class="thead-dark">
                        <tr style={{backgroundColor:"gray"}}>
                            <th scope="col"class="text-black">Product</th>
                            <th scope="col"class="text-black">Description</th>
                            <th scope="col"class="text-black">Price</th>
                            <th scope="col"class="text-black">Kg</th>
                            <th scope="col"class="text-black">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => {
                       return <tr style={{borderBottom:"2px solid black",height:"20px"}}>
                            <td>
                                <div class="main" style={{marginLeft:"0%"}}>
                                    <div class="d-flex">
                                       <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"alt="" width={"180px"}/>
                                    </div>
                                    <div class="des">
                                        <p>lorem ipsum</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <h6 style={{marginLeft:"0%"}}>New Product..........</h6>
                            </td>
                            <td>
                                <h6 style={{marginLeft:"0%"}}>$20.00</h6>
                            </td>
                            <td>
                                <h6 style={{marginLeft:"0%"}}>1 Kg</h6>
                            </td>
                            <td>
                                <button class="add-to-cart btn btn-warning">Delete</button>
                            </td>
                        </tr>                       
                     })}
                     <h3 style={{textAlign:"right", display:"flex"}}>Total:300</h3>
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    </section>
    <div class="col-lg-4 offset-lg-4">
        <div class="checkout">
            <h3>Apply Coupon</h3>
            <ul>
                <li class="subtotal">Coupon(Optional) : 
                    <input></input>
                </li>
                <center><button style={{backgroundColor:"black", color:"#fff", width:"170px"}}>Apply</button></center> 
            </ul>
        </div>
    </div>
    <div class="col-lg-4 offset-lg-4">
        <div class="checkout">
            <ul>
                <li class="subtotal">subtotal
                    <span>$60.00</span>
                </li>
                <li class="cart-total">Total
                <span>$60.00</span></li>
            </ul>
            <a href="#"class="proceed-btn">Proceed to Checkout</a>
        </div>
    </div>
        </>
    );
}

export default AboutUs;
