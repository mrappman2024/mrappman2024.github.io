import { List, Stack, Typography } from "@mui/material";
import React from "react";
import CourseCard from "../Course Card/CourseCard.js";

function Course() {
  const imageList = [
    "https://firebasestorage.googleapis.com/v0/b/react-demo-788ae.appspot.com/o/Second-Set%2FnewOffice1.jpeg?alt=media&token=8b9243f1-90b4-4bee-8d14-0ff5f0ea724f",
    "https://firebasestorage.googleapis.com/v0/b/react-demo-788ae.appspot.com/o/Second-Set%2FplayConnect.jpeg?alt=media&token=55f70f0c-6bd7-4ec0-873e-e14dea2c7a7a",
    "https://firebasestorage.googleapis.com/v0/b/react-demo-788ae.appspot.com/o/Second-Set%2FhelpAlert.jpg?alt=media&token=3fade048-d0e8-4598-a8f3-db565f18de47",
    "https://firebasestorage.googleapis.com/v0/b/react-demo-788ae.appspot.com/o/Second-Set%2FsunniVoice.jpeg?alt=media&token=d337213b-d5cc-4d65-93d6-1ab52ad1b627",
  ];
  return (
    <div style={{paddingTop: '20px', paddingLeft:"20px",paddingRight:"20px"}}>
      <Typography
        style={{
          color: "#D5AF6C",
          fontSize: "24px",
          fontFamily: "ManropeMedium",
        }}
      >
        Achievements @ 2023
      </Typography>
      <List style={{display: "flex", overflowX: "auto" }}>
        <Stack direction="row" spacing={3}>
          {imageList.map((imgUrl) => (
            <CourseCard imgUrl={imgUrl} />
          ))}
        </Stack>
      </List>
    </div>
  );
}

export default Course;
