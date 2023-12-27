import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  tableRow: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#f9f9f9",
    },
  },
});

function LiveOrdersTable() {
  const cards = Array.from({ length: 5 }, (_, index) => index + 1);
  const classes = useStyles();
  return (
    <Box
      style={{
        backgroundColor: "#ffffff",
        margin: "20px",
      }}
    >
      <TableContainer component={Paper} style={{maxHeight:430}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="left">No.</TableCell>
              <TableCell align="left" style={{ width: 400 }}>
                Product
              </TableCell>
              <TableCell align="left">Order Id</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cards.map((row, index) => (
              <TableRow key={row.name} className={classes.tableRow}>
                <TableCell align="left">{index + 1}</TableCell>
                <TableCell align="left">
                  {
                    "iphone 15 plus 125GB black,iphone 15 plus 125GB black,iphone 15 plus 125GB black,iphone 15 plus 125GB black,iphone 15 plus 125GB black-123"
                  }
                </TableCell>
                <TableCell align="left">{"s86758"}</TableCell>
                <TableCell align="center">{"20"}</TableCell>
                <TableCell align="center">{"$ 390.00"}</TableCell>
                <TableCell align="center">{"$ 7800.00"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default LiveOrdersTable;
