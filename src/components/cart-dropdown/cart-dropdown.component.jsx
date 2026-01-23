import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";

const CartDropDown = ({ toggle }) => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span>No Items</span>
        )}
      </div>
      <Button>CHECKOUT</Button>
    </div>
  );
};

export default CartDropDown;
