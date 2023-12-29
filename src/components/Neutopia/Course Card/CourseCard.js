import { Card,Typography, makeStyles, CardMedia } from "@material-ui/core";
import React from "react";

const componentStyles = makeStyles({
  cardStyle: {
    backgroundColor: "#303947",
    borderRadius: 10,
    width: 270,
    height: 270
  },
  twoLineTypography: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2, // Number of lines to display
  },
});

const CourseCard = ({ imgUrl }) => {
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
          style={{objectFit: 'cover'}}
          component="img"
          alt="ai_image"
          image={imgUrl}
          height="270"
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0)",
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
