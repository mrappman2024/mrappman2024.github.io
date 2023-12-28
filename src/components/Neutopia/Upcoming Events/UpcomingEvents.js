import { Typography,List, ListItem } from "@mui/material";
import React from "react";
import UpcomingEventCard from "../Upcoming Event Card/UpcomingEventCard";

function UpcomingEvents() {
const cards = Array.from({ length: 5 }, (_, index) => index + 1);
const imageList = ["https://firebasestorage.googleapis.com/v0/b/react-demo-788ae.appspot.com/o/newOffice.jpeg?alt=media&token=efa0cbc4-8065-4f33-8883-b98214d606ce",'https://firebasestorage.googleapis.com/v0/b/react-demo-788ae.appspot.com/o/onam2023.jpeg?alt=media&token=42dd2f12-a5c4-4271-bab0-ac2aa2f3aa7b',"https://firebasestorage.googleapis.com/v0/b/react-demo-788ae.appspot.com/o/eid.jpeg?alt=media&token=4d7dcbb9-da98-46f7-a52f-ee1be50dcd84","https://firebasestorage.googleapis.com/v0/b/react-demo-788ae.appspot.com/o/teamLunch.jpeg?alt=media&token=55ad4d08-affd-449c-a6b0-d849ca53f339","https://firebasestorage.googleapis.com/v0/b/react-demo-788ae.appspot.com/o/christmas2023.jpeg?alt=media&token=83aff307-c735-42cd-a04f-b85708380315"];

  return (
    <div style={{paddingTop: '20px'}}>
      <Typography
        style={{
          color: "#D5AF6C",
          fontSize: "24px",
          fontFamily: "ManropeMedium",
          paddingLeft: "20px",
        }}
      >
        Team @ 2023 Celebrations Event
      </Typography>
      <List style={{ display: "flex", overflowX: "auto" }}>
        {imageList.map((imgUrl, index) => (
          <ListItem key={index}>
            <UpcomingEventCard imgUrl={imgUrl}/>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default UpcomingEvents;
