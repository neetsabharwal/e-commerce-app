import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";
import "./checkoutItem.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { addItemToCart, removeItemFromCart, deleteFromCart } =
    useContext(CartContext);

  const incHandler = () => addItemToCart(cartItem);
  const decHanlder = () => removeItemFromCart(cartItem);
  const deleteHandler = () => deleteFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div onClick={decHanlder} className="arrow">
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={incHandler} className="arrow">
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={deleteHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
