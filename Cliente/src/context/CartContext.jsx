import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

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
      const newCart = cart.map((item) =>
        item.id_producto === product.id_producto
          ? { ...item, count: item.count + 1 }
          : item
      );
      setCart(newCart);
    } else {
      setCart([...cart, { ...product, count: 1 }]);
    }
  };

  const removeFromCart = (id_producto) => {
    const foundProduct = cart.find((item) => item.id_producto === id_producto);
    if (!foundProduct) return;
    
    if (foundProduct.count > 1) {
      const newCart = cart.map((item) =>
        item.id_producto === id_producto
          ? { ...item, count: item.count - 1 }
          : item
      );
      setCart(newCart);
    } else {
      const newCart = cart.filter((item) => item.id_producto !== id_producto);
      setCart(newCart);
    }
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart, totalCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};