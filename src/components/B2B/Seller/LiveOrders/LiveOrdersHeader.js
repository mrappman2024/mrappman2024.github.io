import React from "react";
import { Typography, Grid, TextField, Box } from "@material-ui/core";

function LiveOrdersHeader() {
  return (
    <Box
      style={{
        backgroundColor: "#D9D9D9",
        height: "90px",
        marginTop: "20px",
        marginLeft: "20px",
        marginRight: "20px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid
        container
        alignItems="center"
        direction="row"
        style={{ paddingLeft: "30px", paddingRight: "30px" }}
        justifyContent="space-between"
      >
        <Grid item>
          <Grid container alignItems="center" direction="row" spacing={6}>
            <Grid item>
              <Typography
                style={{
                  color: "#2C74FF",
                  fontSize: "20px",
                  fontFamily: "ManropeMedium",
                }}
              >
                Live orders
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                style={{
                  backgroundColor: "#CCCCCC",
                  width: "350px",
                }}
                label="Search"
                variant="outlined"
                onChange={(e) => {
                  console.log(e.target.value);
                }}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Typography
            style={{
              color: "red",
              fontSize: "16px",
              fontFamily: "ManropeMedium",
            }}
          >
            order close on: 3:00PM
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LiveOrdersHeader;
