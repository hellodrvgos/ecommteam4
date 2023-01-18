import { Product } from "../../types/type"

import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import { Button } from "@mui/material";
import Rating from "@mui/material/Rating";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom"

type RelatedProduct = {
    product: Product
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: "none",
  }));
  

export default function RelatedProducts({product}: RelatedProduct) {
    return (
        <Grid item xs={4} >
        <Item sx={{boxShadow: 1, width: "95%", margin: "0 auto", paddingTop: 3, paddingBottom: 5}}>
            <img src={product.image} height="150px" />
            <Typography
                style={{ paddingBottom: 5, paddingTop: 15, height: "100px" }}
                gutterBottom
                variant="body1"
                component="div"
                fontWeight={900}
                >
                {product.title}
            </Typography>
            <Rating name="read-only" value={product.rating.rate} readOnly style={{ paddingBottom: 25, height: "50px" }}/>
            <Typography
                style={{ paddingBottom: 25, height: "50px" }}
                gutterBottom
                variant="body1"
                component="div"
                fontWeight={900}
                >
                $ {product.price}
            </Typography>
            <Button variant="contained" component={Link} to={`/products/${product.id}`}>View Product</Button>
        </Item>
    </Grid>
    )
}