import React from "react";
import MiniDrawer from "../../../components/B2B/Seller/LiveOrders/SideMenu/MiniDrawer";
import LiveOrdersHeader from "../../../components/B2B/Seller/LiveOrders/LiveOrdersHeader";
import LiveOrdersSubHeader from "../../../components/B2B/Seller/LiveOrders/LiveOrdersSubHeader";
import LiveOrdersTable from "../../../components/B2B/Seller/LiveOrders/LiveOrdersTable";
import { Box } from "@material-ui/core";

function LiveOrders() {
  return (
    <Box>
      <MiniDrawer></MiniDrawer>
      {/* <LiveOrdersHeader></LiveOrdersHeader>
      <LiveOrdersSubHeader></LiveOrdersSubHeader>
      <LiveOrdersTable></LiveOrdersTable> */}
    </Box>
  );
}

export default LiveOrders;
