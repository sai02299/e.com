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

const data =[
  {
    Title : "Tops",
    price:"549",
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrjHdu1_xrmOfHqjM-Pq_v9qenyP7puvzb7w&usqp=CAU",
    // src:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.indianq.com%2Fwp-content%2Fuploads%2F2020%2F02%2FTrendy-Mufti-Branded-Shirts-For-Men-Yellow.jpg&imgrefurl=https%3A%2F%2Fwww.indianq.com%2Fproduct%2Ftrendy-mufti-branded-shirts-for-men%2F&tbnid=0jzvBaXgmR0AxM&vet=12ahUKEwiAxtD6w5r3AhX0x6ACHerGCMYQMyg5egQIARB4..i&docid=8UUoAU6qZAvy5M&w=800&h=800&q=shirts%20for%20men&ved=2ahUKEwiAxtD6w5r3AhX0x6ACHerGCMYQMyg5egQIARB4",
    Benifits : [
        "dfghjkl",
        "gfghj",
        "hjkl",
        "jkl"
    ]
  },
  {
    Title : "Jeans",
    price:"999",
    src:"https://pimg.bucklecontent.com/images/products/73910Y4098/FYT/f/512c70fc3880c22ca45cf5bea4bb1565v3?quality=0.8&width=392",
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
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTFr6T420wU1DOc4FgdZoB9a1P7ATm34FjDw&usqp=CAU",
    Benifits : [
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
                  <a href="#" data-name="Banana" data-price="1.22" class="add-to-cart btn btn-primary">Add to cart</a>
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
