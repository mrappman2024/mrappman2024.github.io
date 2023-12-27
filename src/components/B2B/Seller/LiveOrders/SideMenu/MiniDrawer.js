import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import LiveOrdersHeader from "../LiveOrdersHeader";
import LiveOrdersSubHeader from "../LiveOrdersSubHeader";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Typography } from "@material-ui/core";
import LiveOrdersTable from "../LiveOrdersTable";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [selectedItem, setSelectedItem] = React.useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        open={open}
        style={{
          backgroundColor: "#ffffff",
        }}
      >
        <DrawerHeader
          style={{
            backgroundColor: "#E8E8E8",
          }}
        >
          <Stack direction="column">
            <IconButton
              onClick={open ? handleDrawerClose : handleDrawerOpen}
              style={{ marginRight: 5, marginTop: 40 }}
            >
              <MenuIcon style={{ color: "#000000" }} />
            </IconButton>

            <Avatar
              style={{
                bgcolor: "#555555",
                marginTop: "10px",
                marginBottom: "40px",
              }}
            >
              <Typography
                style={{
                  color: "#000000",
                  fontSize: "16px",
                  fontFamily: "ManropeMedium",
                }}
              >
                TM
              </Typography>
            </Avatar>
          </Stack>
        </DrawerHeader>
        <Divider
          style={{
            height: "5px", // Set the desired height for the Divider
          }}
        />
        <List
          style={{
            backgroundColor: "#E8E8E8",
            height: "100%",
            overflowY: "auto",
          }}
        >
          {[
            "Item 1",
            "Item 2",
            "Item 3",
            "Item 4",
            "Item 5",
            "Item 6",
            "Item 7",
            "Item 8",
            "Item 9",
            "Item 10",
          ].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                selected={selectedItem === index}
                onClick={()=>{handleItemClick(index)}}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: selectedItem === index ? '#2C74FF' : '#7D7D7D',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <LiveOrdersHeader></LiveOrdersHeader>
        <LiveOrdersSubHeader></LiveOrdersSubHeader>
        <LiveOrdersTable></LiveOrdersTable>
      </Box>
      
    </Box>
  );
}
