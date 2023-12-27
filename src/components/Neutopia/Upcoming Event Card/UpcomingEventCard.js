import React from "react";
import {
  Card,
  Typography,
  makeStyles,
  CardMedia,
  Grid,
  Button,
} from "@material-ui/core";

const componentStyles = makeStyles({
  cardStyle: {
    maxHeight: 350,
    backgroundColor: "#303947",
    borderRadius: 10,
    width: 500,
  },
  twoLineTypography: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2, // Number of lines to display
  },
});

function UpcomingEventCard() {
  const classes = componentStyles();
  return (
    <Card
      style={{
        borderRadius: 10,
        position: "relative",
      }}
      className={classes.cardStyle}
    >
      <div>
        <CardMedia
          component="img"
          alt="ai_image"
          image="https://www.84westevents.com/wp-content/uploads/2020/09/How-to-Host-a-Virtual-Event-During-COVID-19.jpg"
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.7)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 10,
            right: 10,
          }}
        >
          <Grid
            container
            direction="column"
            alignItems="left"
          >
            <Grid item>
              <Typography
                style={{
                  color: "#ffffff",
                  fontSize: "16px",
                  fontFamily: "ManropeMedium",
                  marginBottom: "5px"
                }}
                className={classes.twoLineTypography}
                align="left"
              >
                Digital Media Virtual Event Digital Media Virtual Event
              </Typography>
              <Typography
                style={{
                  color: "#ffffff",
                  fontSize: "12px",
                  fontFamily: "ManropeMedium",
                  marginBottom: "5px"
                }}
                className={classes.twoLineTypography}
                align="left"
              >
                Think Tank Canada
              </Typography>
              <Typography
                style={{
                  color: "#ffffff",
                  fontSize: "12px",
                  fontFamily: "ManropeMedium",
                  marginBottom: "15px"
                }}
                className={classes.twoLineTypography}
                align="left"
              >
                10:00 AM (AEST)
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="row"> 
              <Grid item>
                <Button size="small" variant="contained" style={{color:"white",backgroundColor:"#FF4E6B", marginRight: '10px', width: "150px", height: "40px"}}>Interested</Button>
                <Button size="small" variant="outlined" style={{color:"white", borderColor:"white", width: "150px",  height: "40px"}}>Not Interested</Button>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </Card>
  );
}

export default UpcomingEventCard;
