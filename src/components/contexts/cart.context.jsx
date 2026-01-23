import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  //find if product already exists in cart
  const existingCartItem = cartItems.find(
    (item) => item.id === productToAdd.id,
  );
  //if found increase the quantity
  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item,
    );
  }
  //else return modified cart with quantity of new item as 1
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  useEffect(() => {
    setCartCount(cartItems.reduce((acc, curEl) => acc + curEl.quantity, 0));
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
