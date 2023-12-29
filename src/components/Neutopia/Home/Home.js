import React from "react";
import Course from "../Course/Course";
import "./Home.css";
import RecentlyViewed from "../Recently Viewed/RecentlyViewed";
import { Grid, Typography } from "@mui/material";
import UpcomingEvents from "../Upcoming Events/UpcomingEvents";
import Snowfall from "react-snowfall";

function Home() {
  return (
    <div style={{ position: 'relative' }}>
      <Grid
        container
        direction="column"
        alignItems="center"
        //justifyContent="center"
        style={{paddingTop:"20px"}}
      >
        <Grid item> 
          <Typography
            style={{
              letterSpacing: 3,
              color: "#ffffff",
              fontSize: "45px",
              fontFamily: "ManropeMedium",
              textAlign: 'center',
            }}
          >
            WELCOME 2024
          </Typography>
          </Grid>

          <Grid item> 
          <Typography
            style={{
              color: "#ffffff",
              fontSize: "16px",
              fontFamily: "ManropeLight",
              textAlign: 'center',
            }}
          >
            "May the New Year bring us more opportunities to collaborate, innovate, and achieve success as a team. Happy New Year, colleagues!"
          </Typography>
        </Grid>
        <Grid item> 
          <Typography
            style={{
              marginTop: "30px",
              color: "#D5AF6C",
              fontSize: "22px",
              fontFamily: "ManropeMedium",
              border: '1px solid #000', 
              padding: '15px',
              borderColor: "#D5AF6C",
              borderRadius:"40px",
              textAlign: 'center',

            }}
          >
            A glimpse into the moments of 2023
          </Typography>
        </Grid>
      </Grid>
      <UpcomingEvents/>
      {/* <RecentlyViewed/> */}
      <Course/>
      <RecentlyViewed/>
      {/* <UpcomingEvents/> */}
      <Snowfall color="#dee4fd" snowflakeCount={80}/>
    </div>
    
  );
}

export default Home;
