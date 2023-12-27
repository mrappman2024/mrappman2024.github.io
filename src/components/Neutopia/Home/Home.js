import React from "react";
import Course from "../Course/Course";
import "./Home.css";
import RecentlyViewed from "../Recently Viewed/RecentlyViewed";
import { Grid, Typography } from "@mui/material";
import UpcomingEvents from "../Upcoming Events/UpcomingEvents";

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
              color: "#ffffff",
              fontSize: "40px",
              fontFamily: "ManropeMedium",
            }}
          >
            HAPPY NEW YEAR 2024
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
            "Hoping the new year brings you the same love and laughter you always bring me."
          </Typography>
        </Grid>
      </Grid>
      <RecentlyViewed />
      <Course />
      <UpcomingEvents/>
    </div>
  );
}

export default Home;
