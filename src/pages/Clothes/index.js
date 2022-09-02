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

import { useCart } from "react-use-cart"

import "./style.css"

const data =[
  {
    Title : "Shirt",
    price:"549",
    src:"https://5.imimg.com/data5/TJ/ML/GI/SELLER-23627912/men-shirt-500x500.jpg",
    // src:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.indianq.com%2Fwp-content%2Fuploads%2F2020%2F02%2FTrendy-Mufti-Branded-Shirts-For-Men-Yellow.jpg&imgrefurl=https%3A%2F%2Fwww.indianq.com%2Fproduct%2Ftrendy-mufti-branded-shirts-for-men%2F&tbnid=0jzvBaXgmR0AxM&vet=12ahUKEwiAxtD6w5r3AhX0x6ACHerGCMYQMyg5egQIARB4..i&docid=8UUoAU6qZAvy5M&w=800&h=800&q=shirts%20for%20men&ved=2ahUKEwiAxtD6w5r3AhX0x6ACHerGCMYQMyg5egQIARB4",
    Benifits : [
        "dfghjkl",
        "gfghj",
        "hjkl",
        "jkl"
    ]
  },
  {
    Title : "Jocket",
    price:"999",
    src:"data:image/jpeg;base64,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",
    // src:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fcf.shopee.ph%2Ffile%2F28997a0efbff113997a53aeaed288f45&imgrefurl=https%3A%2F%2Fshopee.ph%2Fjacket-with-zipper-jocket-for-men-leather-jacket-for-men-2020-adidas-Jacket-hood-with-zipper-i.399871391.7583453750&tbnid=H4yNnBx_cOT_iM&vet=10CDYQMyjjAWoXChMIoPiWjeyb9wIVAAAAAB0AAAAAEAM..i&docid=tDnkNjnPTH0kvM&w=800&h=800&itg=1&q=jockets&ved=0CDYQMyjjAWoXChMIoPiWjeyb9wIVAAAAAB0AAAAAEAM",
    Benifits : [
        "dfghjkl",
        "gfghj",
        "hjkl",
        "jkl"
    ]
  },
  {
    Title : "T-Shirt",
    price:"329",
    src:"data:image/jpeg;base64,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",
    Benifits : [
        "dfghjkl",
        "gfghj",
        "hjkl",
        "jkl"
    ]
  }

]
function AboutUs() {
  const { addItem } = useCart()
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
      <Grid container>
          {data.map((item) => {
            return <Grid item xs={4} style={{ gap: "2px", width: "20px", marginTop: "5%", borderRadius: "12px" }}>
              <div class="card" style={{ width: "80%", marginLeft: "8%" }}>
                <img class="card-img-top" src={item.src} alt="Card image cap" />
                <div class="card-block">
                  <h4 class="card-title">{item.Title}</h4>
                  {/* {item.Benifits.map((ben) => {
                    return <li class="card-text">{ben}</li>
                  })} */}
                  <p class="card-text">₹{item.price}</p>
                  <a  class="add-to-cart btn btn-primary" onClick={()=>addItem(item)}>Add to cart</a>
                </div>
              </div>
            </Grid>
          })}
        </Grid>
      </Card>
    </>
  );
}

export default AboutUs;
