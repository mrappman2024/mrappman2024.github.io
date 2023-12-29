import React from "react";
import { List, ListItem, Typography, Stack } from "@mui/material";
import RVCard from "../Recently Viewed Card/RVCard";

function RecentlyViewed() {
  const imageList = [
    "https://firebasestorage.googleapis.com/v0/b/react-demo-788ae.appspot.com/o/Third-Set%2Fphoto2.jpeg?alt=media&token=8a4f3406-0e6f-4eef-956e-a3bb3db079f9",
    "https://firebasestorage.googleapis.com/v0/b/react-demo-788ae.appspot.com/o/Third-Set%2Fphoto_2023-12-28%2020.52.39.jpeg?alt=media&token=1fe285f3-408d-4c02-bd64-c20de3a2f7b7",
    "https://firebasestorage.googleapis.com/v0/b/react-demo-788ae.appspot.com/o/Third-Set%2Fphoto1.jpeg?alt=media&token=659dbc74-ed55-4f9b-a219-5330d75612c1",
    "https://firebasestorage.googleapis.com/v0/b/react-demo-788ae.appspot.com/o/Third-Set%2Fphoto11.png?alt=media&token=08fb3cd8-64bd-470a-b876-4824bacf3108",
    "https://firebasestorage.googleapis.com/v0/b/react-demo-788ae.appspot.com/o/Third-Set%2Fphoto4.jpeg?alt=media&token=747f008d-3936-44ab-8d42-2dc2d8a6d807",
    "https://firebasestorage.googleapis.com/v0/b/react-demo-788ae.appspot.com/o/Third-Set%2Fphoto5.jpeg?alt=media&token=e1e63a18-21be-4093-9218-55606a8a6ff8",
    "https://firebasestorage.googleapis.com/v0/b/react-demo-788ae.appspot.com/o/Third-Set%2Fphoto10.jpeg?alt=media&token=d430196f-9652-41ec-b3e5-9aa6756afb9f",
    "https://firebasestorage.googleapis.com/v0/b/react-demo-788ae.appspot.com/o/Third-Set%2Fphoto6.jpeg?alt=media&token=b9470cd5-f436-4c65-b479-71fa71855f40",
    "https://firebasestorage.googleapis.com/v0/b/react-demo-788ae.appspot.com/o/Third-Set%2Fphoto7.jpeg?alt=media&token=a76c0829-38a1-4254-9e99-9a224ceda036",
    "https://firebasestorage.googleapis.com/v0/b/react-demo-788ae.appspot.com/o/Third-Set%2Fphoto8.jpeg?alt=media&token=86844abe-28d7-46ba-9351-8b8cfb1e05fb",
    "https://firebasestorage.googleapis.com/v0/b/react-demo-788ae.appspot.com/o/Third-Set%2Fphoto8.jpeg?alt=media&token=f575978d-99be-4324-9993-cdd1ee7753a0",
  ];
  return (
    <div style={{ paddingTop: "20px",paddingLeft: "20px", paddingRight: "20px"  }}>
      <Typography
        style={{
          color: "#D5AF6C",
          fontSize: "24px",
          fontFamily: "ManropeMedium",
        }}
      >
        Random Clicks @ 2023
      </Typography>
      <List style={{ display: "flex", overflowX: "auto" }}>
        <Stack direction="row" spacing={3}>
          {imageList.map((imgUrl) => (
            <RVCard imgUrl={imgUrl} />
          ))}
        </Stack>
      </List>
    </div>
  );
}

export default RecentlyViewed;
