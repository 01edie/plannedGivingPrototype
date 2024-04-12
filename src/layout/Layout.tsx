import * as React from "react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

import { domSensitivePaths, menuList } from "../config/menuConfig";
import DataContext from "../context/DataContext";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        PlannedGiving
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth: number = 260;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,

  transition: domSensitivePaths.includes(window.location.pathname)
    ? "none"
    : theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: domSensitivePaths.includes(window.location.pathname)
      ? "none"
      : theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,

    // test
    // marginTop:64,
    overflowY: "hidden",
    // height:'calc(100% - 64px)',

    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: domSensitivePaths.includes(window.location.pathname)
        ? 0
        : theme.transitions.duration.enteringScreen,
      // duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: domSensitivePaths.includes(window.location.pathname)
        ? "none"
        : theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
            // duration: theme.transitions.duration.leavingScreen,
          }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

export default function Layout() {
  const [mainData, setMainData] = React.useState({
    projectCost: 0,
    inflationRate: 0,
    constructionCostInflation: 0,
    annualDonationAmount: 0,
    annualROI: 0,
    loanInterestRate: 0,
    insuranceBenefitAmount: 0,
    insurancePremiumRate: 0,
    yearOfPassing: 0,
    clientAge: 0,
    estateDonation: 0,
    premiumAmount: 0,
  });

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <DataContext.Provider value={{ mainData, updateData: setMainData }}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px",
              position: "relative",
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { visibility: "hidden" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%,-50%)",
                fontFamily: "cursive",
              }}
            >
              Planned Giving
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {menuList.map((e) => (
              <ListItemButton
                sx={{
                  borderRight:
                    location.pathname === e.path ? "blue 3px solid" : "none",
                  backgroundColor:
                    location.pathname === e.path ? "#e4e8f8" : "inherit",
                }}
                onClick={() => navigate(e.path)}
                key={e.name}
              >
                <ListItemIcon>{<e.icon />}</ListItemIcon>
                <ListItemText primary={e.name} />
              </ListItemButton>
            ))}
            <Divider sx={{ my: 1 }} />
            {/* {secondaryListItems} */}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container
            maxWidth="lg"
            sx={{
              mt: 4,
              mb: 4,
            }}
          >
            <Box minHeight="calc(100vh - 64px - 36px - 32px - 53px)">
              <Outlet />
            </Box>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </DataContext.Provider>
  );
}
