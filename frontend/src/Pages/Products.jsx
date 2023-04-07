import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

import { Close, Filter } from "@mui/icons-material";
import {
  Divider,
  Fab,
  Rating,
  Stack,
  Typography,
  IconButton,
  Slider,
} from "@mui/material";
import GridLayout from "../components/Home/GridLayout";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import StateContext from "../Context/hooks/StateContext";
import FunctionContext from "../Context/Function/FunctionContext";
import Navbar from "../utils/Navbar";
const Products = () => {
  const [state, setState] = React.useState(false);
  const { category, setCategory, value, setValue } =
    React.useContext(StateContext);
  const { handleCategory, handleValue } = React.useContext(FunctionContext);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const Items = [
    "Top",
    "Bottom",
    "attire",
    "Appliances",
    "electronics",
    "Laptop & tech",
  ];

  const list = (anchor) => (
    <Stack
      alignItems={"center"}
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <Stack width={"50%"}>
        <Stack
          justifyContent={"space-between"}
          alignItems={"center"}
          direction={"row"}
        >
          <Typography
            variant="h5"
            fontWeight={"bold"}
            sx={{ mx: "20px", mb: "30px", mt: "20px" }}
            color="initial"
          >
            FILLTERS
          </Typography>
          <IconButton onClick={toggleDrawer(anchor, false)}>
            <Close />
          </IconButton>
        </Stack>
        <Stack sx={{ mx: "20px" }}>
          <Box sx={{ width: "220px", mb: "20px" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="Age"
                onChange={handleCategory}
              >
                {Items.map((ele, id) => {
                  return (
                    <MenuItem key={id} value={ele}>
                      {ele}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
          <Stack width={"max-content"}>
            <Typography variant="body1" color="initial">
              Choose by Ratings:
            </Typography>
            <Rating size="large" precision={0.5} />
          </Stack>
          <Box sx={{ width: 200, my: "20px" }}>
            <Typography variant="body1" color="initial">
              Choose by price:
            </Typography>
            <Slider
              size="small"
              value={value}
              onChange={handleValue}
              valueLabelDisplay="auto"
              max={100000}
            />
          </Box>
          <Stack
            direction={"row"}
            justifyContent={"flex-end"}
            alignItems={"center"}
          >
            <Button
              variant="text"
              color="error"
              sx={{ mb: "20px", width: "100px" }}
            >
              Remove
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ mb: "20px", ml: "10px", width: "100px" }}
            >
              Apply
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
  return (
    <>
      <Navbar />
      <div>
        {["top"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Fab
              variant="extended"
              color="primary"
              onClick={toggleDrawer(anchor, true)}
              sx={{
                position: "fixed",
                right: "5%",
                bottom: "10%",
                zIndex: 1000,
              }}
            >
              <Filter sx={{ mr: 1 }} />
              Fillters
            </Fab>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
      <Box sx={{ my: "7%" }}>
        <Stack mx={"40px"} mb={"40px"}>
          <Typography variant="h4" fontWeight={"bold"} color="initial">
            ALL PRODUCTS
          </Typography>
          <Box width={"15%"}>
            <Divider />
          </Box>
        </Stack>
        <GridLayout />
      </Box>
    </>
  );
};

export default Products;
