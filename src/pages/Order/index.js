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

import "./style.css"

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
  return (
    <>
      <DefaultNavbar
        routes={routes}
        // action={{
        //   type: "external",
        //   route: "https://www.creative-tim.com/product/material-kit-react",
        //   label: "free download",
        //   color: "default",
        // }}
        transparent
        light
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Work with an amazing design
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              We&apos;re constantly trying to express ourselves and actualize our dreams. If you
              have the opportunity to play this game
            </MKTypography>
          </Grid>

        </Container>
      </MKBox>
      <Card style={{backgroundColor:"gray"}}>
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
      </Card>
    </>
  );
}

export default AboutUs;
