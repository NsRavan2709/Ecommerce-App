import { Search, ShoppingCartRounded } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import Badge from "@mui/material/Badge";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import StateContext from "../Context/hooks/StateContext";
import FunctionContext from "../Context/Function/FunctionContext";

const Navbar = () => {
  const { isLogin, setIsLogin } = useContext(StateContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { handleOpen } = useContext(FunctionContext);

  return (
    <>
      <Stack
        direction={"row"}
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          height: "8vh",
          background: "#fff",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: "100",
          boxShadow: "0 0 2px #111",
        }}
        className="Nav-main"
      >
        <Stack
          direction={"row"}
          sx={{ alignItems: "center" }}
          className="rubik "
          width={"33%"}
        >
          <Link className="mx-2">
            <Typography fontSize={".75em"} variant="subtitle2" color="initial">
              HOME
            </Typography>
          </Link>

          <Link className="mx-2 ">
            <Typography fontSize={".75em"} variant="subtitle2" color="initial">
              ABOUT
            </Typography>
          </Link>

          <Link className="mx-2 ">
            <Typography fontSize={".75em"} variant="subtitle2" color="initial">
              PAGES
            </Typography>
          </Link>
        </Stack>

        <Stack width={"34%"} alignItems="center">
          <Typography fontSize={"1.10em"} className="obitron">
            ONESTOPSHOP
          </Typography>
        </Stack>

        <Stack
          width={"33%"}
          direction="row"
          sx={{ alignItems: "center", justifyContent: "flex-end" }}
        >
          <IconButton sx={{ color: "#000" }} onClick={handleOpen}>
            {" "}
            <Search />{" "}
          </IconButton>
          {isLogin === false ? (
            <Link
              className="mx-2"
              style={{
                background: "darkviolet",
                borderRadius: "2px",
                padding: "5px 15px",
                boxShadow: "0 0 2px #111",
              }}
              to="/login"
            >
              <Typography variant="subtitle2" color="white" fontSize={".75em"}>
                SIGN IN
              </Typography>
            </Link>
          ) : (
            <>
              <Link to={"/addcart"} className="mx-2">
                <Badge badgeContent={4} color="primary">
                  <ShoppingCartRounded sx={{ color: "#000" }} />
                </Badge>
              </Link>
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <Avatar
                    variant="circular"
                    src=""
                    alt=""
                    sx={{ width: "30px", height: "30px" }}
                  />
                </IconButton>

                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
              </div>
            </>
          )}
        </Stack>
      </Stack>
    </>
  );
};

export default Navbar;