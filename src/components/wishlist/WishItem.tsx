import React from "react";
import { styled } from "@mui/material/styles";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";
import CardActions from "@mui/material/CardActions";

import { useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";

import { AppDispatch } from "../../redux/store";
import { Product } from "../../types/type";
import { Box } from "@mui/system";
import { wishActions } from "../../redux/slice/wishList";

type Prop = {
  product: Product;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function WishItem({ product, setOpen }: Prop) {
  const dispatch = useDispatch<AppDispatch>();

  const removeFav = () => {
    dispatch(wishActions.removeFav(product.id));
    setOpen(true);
  };

  // expanded mode
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Box style={{ margin: "auto" }}>
      <Card
        sx={{
          width: 300,
          height: "auto",
          marginInline: "1rem",
          marginBlock: "1rem",
        }}
      >
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ height: 100 }}
          >
            {product.title}
          </Typography>

          <Typography>{product.category}</Typography>
        </CardContent>

        <Rating name="read-only" value={product.rating.rate} readOnly />
        <CardActions>
          <DeleteIcon
            color="action"
            aria-label="removeFav"
            onClick={removeFav}
          />
        </CardActions>
        <Typography>Description</Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Typography> {product.description}</Typography>
        </Collapse>
      </Card>
    </Box>
  );
}

export default WishItem;
