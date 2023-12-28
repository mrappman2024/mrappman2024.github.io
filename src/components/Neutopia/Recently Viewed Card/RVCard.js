import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { Typography, makeStyles } from "@material-ui/core";
import IconButton from "@mui/material/IconButton";
import { BookmarkAddRounded, FavoriteRounded } from "@mui/icons-material";

const componentStyles = makeStyles({
  cardStyle: {
   //maxWidth: 320,
    maxHeight: 292,
    backgroundColor: "#303947",
    borderRadius: 10,
    width: 320,
  },
  parentFlexRight: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardMediaPadding: {
    maxWidth: 288,
    marginTop: "16px",
    marginLeft: "16px",
    marginRight: "16x",
    borderRadius: "10px 10px 10px 10px",
  },
  twoLineTypography: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2, // Number of lines to display
  },
  singleLineTypography: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 1, // Number of lines to display
  },
});


const RVCard = ({ imgUrl }) => {
  const classes = componentStyles();
  return (
    <Card
      style={{
        backgroundColor: "#303947",
        borderRadius: 10,
        marginBottom: 20,
      }}
      className={classes.cardStyle}
    >
      <CardMedia
        className={classes.cardMediaPadding}
        component="img"
        alt="ai_image"
        height="180"
        image= {imgUrl}
      />
      <CardContent>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item xs={8}>
            <Typography
              style={{
                color: "#ffffff",
                opacity: 0.5,
                fontSize: "14px",
                fontFamily: "ManropeLight",
              }}
              className={classes.singleLineTypography}
            >
              Jack Jones
            </Typography>
            <Typography
              style={{
                color: "#ffffff",
                fontSize: "16px",
                fontFamily: "ManropeMedium",
              }}
              className={classes.twoLineTypography}
            >
              Top Visual Effects Companies
            </Typography>
          </Grid>
          <Grid item>
            <Grid container>
              <Grid item>
                <IconButton
                  aria-label="add to shopping cart"
                  style={{ color: "#FF4E6B" }}
                >
                  <FavoriteRounded />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  aria-label="add an alarm"
                  style={{ color: "#FF4E6B" }}
                >
                  <BookmarkAddRounded />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default RVCard;
