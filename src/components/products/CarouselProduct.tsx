import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Product } from "../../types/type";
import { Box } from "@mui/system";
import "react-multi-carousel/lib/styles.css";
import Rating from "@mui/material/Rating";

type Props = {
  product: Product;
};

function CarouselProduct({ product }: Props) {
  return (
    <Box>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={product.image}
            alt="green iguana"
            sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Rating name="read-only" value={product.rating.rate} readOnly />
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}

export default CarouselProduct;
