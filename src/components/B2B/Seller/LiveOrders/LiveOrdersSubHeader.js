import {
  Box,
  Grid,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import React from "react";

export default function LiveOrdersSubHeader() {
  return (
    <Box
      style={{
        backgroundColor: "#D9D9D9",
        height: "130px",
        marginTop: "20px",
        marginLeft: "20px",
        marginRight: "20px",
      }}
    >
      <Grid
        container
        direction="row"
        style={{ paddingLeft: "30px", paddingRight: "30px" }}
        justifyContent="space-between"
      >
        <Grid item>
          <Grid
            container
            direction="row"
            spacing={6}
            style={{ paddingTop: "20px" }}
          >
            <Grid item>
              <Grid container direction="column">
                <Grid item>
                  <Typography
                    style={{
                      color: "#000000",
                      fontSize: "16px",
                      fontFamily: "ManropeMedium",
                    }}
                  >
                    Total Quantity
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography
                    style={{
                      color: "#000000",
                      fontSize: "16px",
                      fontFamily: "ManropeMedium",
                      textAlign: "left",
                    }}
                  >
                    190
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column">
                <Grid item>
                  <Typography
                    style={{
                      color: "#000000",
                      fontSize: "16px",
                      fontFamily: "ManropeMedium",
                    }}
                  >
                    Total Amount
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    style={{
                      color: "#000000",
                      fontSize: "16px",
                      fontFamily: "ManropeMedium",
                      textAlign: "left",
                    }}
                  >
                    $ 72500.00
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid
            container
            direction="row"
            spacing={6}
            style={{ paddingTop: "40px" }}
          >
            <Grid item>
              <Grid container direction="column" alignItems="center">
                <Grid item>
                  <Button
                    size="small"
                    variant="contained"
                    style={{
                      color: "white",
                      backgroundColor: "#2C74FF",
                      width: "150px",
                      height: "40px",
                    }}
                  >
                    Download PO
                  </Button>
                </Grid>
                <Grid item>
                  <FormControlLabel
                    control={<Checkbox color="#000000" />}
                    label={
                      <Typography
                        style={{
                          color: "#000000",
                          fontSize: "14px",
                          fontFamily: "ManropeLight",
                        }}
                      >
                        view as po
                      </Typography>
                    }
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column" alignItems="center">
                <Grid item>
                  <Button
                    size="small"
                    variant="contained"
                    style={{
                      color: "white",
                      backgroundColor: "#2C74FF",
                      width: "150px",
                      height: "40px",
                    }}
                  >
                    Download Order
                  </Button>
                </Grid>
                <Grid item>
                  <FormControlLabel
                    control={<Checkbox color="#000000" />}
                    label={
                      <Typography
                        style={{
                          color: "#000000",
                          fontSize: "14px",
                          fontFamily: "ManropeLight",
                        }}
                      >
                        view as order
                      </Typography>
                    }
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
