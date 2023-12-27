import { Typography,List, ListItem } from "@mui/material";
import React from "react";
import UpcomingEventCard from "../Upcoming Event Card/UpcomingEventCard";

function UpcomingEvents() {
const cards = Array.from({ length: 5 }, (_, index) => index + 1);
  return (
    <div>
      <Typography
        style={{
          color: "#ffffff",
          fontSize: "24px",
          fontFamily: "ManropeMedium",
          paddingLeft: "20px",
        }}
      >
        Upcoming Events
      </Typography>
      <List style={{ display: "flex", overflowX: "auto" }}>
        {cards.map((cardNumber) => (
          <ListItem key={cardNumber}>
            <UpcomingEventCard />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default UpcomingEvents;
