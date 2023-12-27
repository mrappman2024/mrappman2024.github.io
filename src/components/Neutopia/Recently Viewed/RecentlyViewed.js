import React from "react";
import { List, ListItem, Typography } from "@mui/material";
import RVCard from "../Recently Viewed Card/RVCard";

function RecentlyViewed() {
  const cards = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <div style={{paddingTop: '20px'}}>
      <Typography
        style={{
          color: "#D5AF6C",
          fontSize: "24px",
          fontFamily: "ManropeMedium",
          paddingLeft: '20px'   
        }}
      >
        Christmas 2023
      </Typography>
      <List style={{ display: "flex", overflowX: "auto" }}>
        {cards.map((cardNumber) => (
          <ListItem key={cardNumber}>
            <RVCard />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default RecentlyViewed;
