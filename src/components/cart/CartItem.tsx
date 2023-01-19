import { useDispatch } from "react-redux";

import { Box } from "@mui/system";
import AddRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import RemoveShoppingCart from '@mui/icons-material/RemoveShoppingCartRounded';
import { IconButton} from "@mui/material";

import { ProductDetail } from "../../types/type"
import { cartActions } from "../../redux/slice/cartList";

export default function CartItem({product}: ProductDetail) {
    const dispatch = useDispatch();
    return (
        <Box  sx={{boxShadow: 1, height: "180px", width: "800px", paddingTop: "20px"}}>
          <Box >
            <img src={product.image} width="5%" alt="product" />
          </Box>
          <Box >
            {product.title} - <strong>$ {product.price.toFixed(2)}</strong>
          </Box>
          <Box className="icons">
            <IconButton
                aria-label="increaseQuantity"
                onClick={() => {
                  dispatch(cartActions.increaseQuantity(product.id))
                }}
            >
                <AddRoundedIcon sx={{ color: "green"}}/>
            </IconButton>
              {product.quantity}
            <IconButton
                aria-label="decreaseQuantity"
                onClick={() => {
                  dispatch(cartActions.decreaseQuantity(product.id))
                }}
            >
                <RemoveIcon sx={{ color: "red"}}/>
            </IconButton>
            <IconButton
                aria-label="removeCart"
                onClick={() => {
                  dispatch(cartActions.removeFromCart(product.id))
                }}
            >
                <RemoveShoppingCart sx={{ color: "red"}}/>
            </IconButton>
          </Box>
        </Box>
    )
}