import React from "react";
import Course from "../Course/Course";
import "./Home.css";
import RecentlyViewed from "../Recently Viewed/RecentlyViewed";
import { Grid, Typography } from "@mui/material";
import UpcomingEvents from "../Upcoming Events/UpcomingEvents";
import Snowfall from "react-snowfall";

function Home() {
  return (
    <div>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{paddingTop:"50px"}}
      >
        <Grid item> 
          <Typography
            style={{
              letterSpacing: 3,
              color: "#ffffff",
              fontSize: "45px",
              fontFamily: "ManropeMedium",
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
            }}
          >
            "May the New Year bring us more opportunities to collaborate, innovate, and achieve success as a team. Happy New Year, colleagues!"
          </Typography>
        </Grid>
      </Grid>
      <UpcomingEvents/>
      {/* <RecentlyViewed/> */}
      <Course/>
      <RecentlyViewed/>
      {/* <UpcomingEvents/> */}
      <Snowfall color="#dee4fd" snowflakeCount={60}/>
    </div>
    
  );
}

export default Home;
