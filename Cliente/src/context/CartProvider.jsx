import { useState, useEffect } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [totalCart, setTotalCart] = useState(0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    const newTotal = cart.reduce((acc, item) => acc + item.precio * item.count, 0);
    setTotalCart(newTotal);
  }, [cart]);

  const addToCart = (product) => {
    const foundProduct = cart.find((item) => item.id_producto === product.id_producto);
    if (foundProduct) {
      setCart(cart.map((item) =>
        item.id_producto === product.id_producto
          ? { ...item, count: item.count + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, count: 1 }]);
    }
  };

  const removeFromCart = (id_producto) => {
    const foundProduct = cart.find((item) => item.id_producto === id_producto);
    if (!foundProduct) return;
    if (foundProduct.count > 1) {
      setCart(cart.map((item) =>
        item.id_producto === id_producto
          ? { ...item, count: item.count - 1 }
          : item
      ));
    } else {
      setCart(cart.filter((item) => item.id_producto !== id_producto));
    }
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart, totalCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};