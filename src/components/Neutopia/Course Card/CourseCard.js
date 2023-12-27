import { Card,Typography, makeStyles, CardMedia } from "@material-ui/core";
import React from "react";

const componentStyles = makeStyles({
  cardStyle: {
    maxHeight: 240,
    backgroundColor: "#303947",
    borderRadius: 10,
    width: 240,
  },
  twoLineTypography: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2, // Number of lines to display
  },
});

function CourseCard() {
  const classes = componentStyles();
  return (
    <Card
      style={{
        borderRadius: 10,
        position: "relative"
      }}
      className={classes.cardStyle}
    >
      <div>
        <CardMedia
          component="img"
          alt="ai_image"
          image="https://st1.bollywoodlife.com/wp-content/uploads/2022/10/FotoJet-2022-10-08T205207.228.jpg"
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.4)",
          }}
        />
        {/* <div
          style={{
            position: "absolute",
            color: "white",
            bottom: 10,
            left: 10,
            right: 10,
          }}
        >
          <Typography
            style={{
              color: "#ffffff",
              fontSize: "15px",
              fontFamily: "ManropeMedium",
            }}
            className={classes.twoLineTypography}
            align="left"
          >
            Advanced 3D Animation Diploma
          </Typography>
        </div> */}
      </div>
    </Card>
  );
}

export default CourseCard;
