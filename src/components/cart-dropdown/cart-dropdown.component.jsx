import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";

import { useNavigate } from "react-router-dom";

const CartDropDown = ({ toggle }) => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);

  const navigate = useNavigate();

  const checkoutHandler = () => {
    navigate("/checkout");
    setIsCartOpen(false);
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span>No Items</span>
        )}
      </div>
      <Button onClick={checkoutHandler}>CHECKOUT</Button>
    </div>
  );
};

export default CartDropDown;
