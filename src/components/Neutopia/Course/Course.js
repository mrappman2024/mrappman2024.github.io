import { List, ListItem, Typography } from "@mui/material";
import React from "react";
import CourseCard from "../Course Card/CourseCard.js";

function Course() {
  const cards = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <div>
      <Typography
        style={{
          color: "#D5AF6C",
          fontSize: "24px",
          fontFamily: "ManropeMedium",
          paddingLeft: "20px",
        }}
      >
        Birthday 2023
      </Typography>
      <List style={{ display: "flex", overflowX: "auto" }}>
        {cards.map((cardNumber) => (
          <ListItem key={cardNumber}>
            <CourseCard />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Course;
