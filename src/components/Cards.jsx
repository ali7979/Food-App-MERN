import React from "react";

import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import ButtonGroup from "@mui/material/ButtonGroup";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SendIcon from "@mui/icons-material/Send";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { ThemeContext } from "../App";
import { useContext } from "react";
import {useCartContext} from './context/cartcontext'

export default function Cards(props) {
const {addToCart} =useCartContext();

  const [count, setCount] = React.useState(0);
  const [invisible, setInvisible] = React.useState(false);

  const { theme, settheme } = useContext(ThemeContext);

  const handleclick = () => {
    localStorage.getItem("authToken") ?
    addToCart(props.id,props.image,props.category,props.name,props.description,props.price,count)
    :
    alert("Login first");
  }
  

  const darkTheme = createTheme({
    palette: {
      mode: theme ? "dark" : "light",
    },
  });
 

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <Card
          sx={{
            borderRadius: 8,
            height: 420,
            maxWidth: 345,
            mt: 8,
            my: 3,
            mx: 7,
          }}
        >
          <CardMedia
            sx={{ height: 160 }}
            image={props.image}
            title="green iguana"
          />
          <Chip
            sx={{
              fontFamily: "'M PLUS Rounded 1c', sans-serif",
              backgroundColor: "var(--l1)",
              float: "right",
              mt: 2,
              mr: 1,
            }}
            label={props.category}
          />
          <CardContent>
            <Typography
              sx={{
                fontFamily: "'M PLUS Rounded 1c', sans-serif",
                height: 60,

                "@media (max-width: 768px)": {
                  fontSize: "1.5rem",
                },
                "@media (max-width: 480px)": {
                  fontSize: "1rem",
                },
              }}
              gutterBottom
              variant="h5"
              component="div"
            >
              {props.name}
            </Typography>

            <Typography
              sx={{
                fontFamily: "'Raleway', sans-serif",
                height: 60,
                "@media (max-width: 768px)": {
                  fontSize: "0.9rem",
                },
                "@media (max-width: 480px)": {
                  fontSize: "0.8rem",
                },
              }}
              variant="body2"
              color="text.secondary"
            >
              {props.description}
            </Typography>
          </CardContent>

          <CardActions>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  color: "action.active",
                  display: "flex",
                  flexDirection: "column",
                  "& > *": {
                    marginInline: 8,
                    marginX: 1.5,
                  },
                  "& .MuiBadge-root": {
                    marginX: 5,
                  },
                  "& .MuiButton-root": {
                    marginLeft: -2,
                  },
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Chip
                    sx={{
                      fontFamily: "'M PLUS Rounded 1c', sans-serif",
                      backgroundColor: "lightgreen",
                      float: "right",

                      ml: 1.5,
                    }}
                    label={`Price: ₹${props.price}`}




                  />
                 
                  <Badge color="secondary" badgeContent={count}>
                    <ShoppingCartIcon />
                  </Badge>
                  <ButtonGroup>
                    <Button
                      aria-label="reduce"
                      onClick={() => {
                        setCount(Math.max(count - 1, 0));
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </Button>
                    <Button
                      aria-label="increase"
                      onClick={() => {
                        setCount(count + 1);
                      }}
                    >
                      <AddIcon fontSize="small" />
                    </Button>
                  </ButtonGroup>
                </div>
              </Box>
            </Box>
          </CardActions>
          <hr></hr>
          <Box
            sx={{
              width: "50%",
              color: "action.active",
              display: "flex",
              flexDirection: "column",
              mx: "auto",
              mt: -0.5,
            }}
          >
            <Button
              sx={{ fontFamily: "'M PLUS Rounded 1c', sans-serif" }}
              variant="outline"
              size="small"
              endIcon={<SendIcon />}
              onClick={ handleclick } 

            >
              Add to cart
            </Button>
          </Box>
        </Card>
      </ThemeProvider>
    </div>
  );
}
