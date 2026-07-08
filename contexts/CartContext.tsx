"use client";

import {
  createContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { CART_STORAGE_KEY } from "@/lib/constants";
import type { CartContextType, CartItem } from "@/types/cart";

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
  try {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);

    if (storedCart) {
      const parsedCart: CartItem[] = JSON.parse(storedCart);
      setItems(parsedCart);
    }
  } catch (error) {
    console.error("Failed to load cart:", error);
    localStorage.removeItem(CART_STORAGE_KEY);
  } finally {
    setIsLoaded(true);
  }
}, []);

  // Save cart to localStorage when items change
  useEffect(() => {
    // Guard to prevent overwriting localStorage with an empty array before initial load completes
    if (!isLoaded) return;

    localStorage.setItem(
      CART_STORAGE_KEY,
      JSON.stringify(items)
    );
  }, [items, isLoaded]);

  const addToCart = (productId: string) => {
    setItems((prev) => {
      const existingItem = prev.find(
        (item) => item.productId === productId
      );

      let updatedItems: CartItem[];

      if (existingItem) {
        updatedItems = prev.map((item) =>
          item.productId === productId
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      } else {
        updatedItems = [
          ...prev,
          {
            productId,
            quantity: 1,
          },
        ];
      }

      return updatedItems;
    });

    // Notify the rest of the app that an item was added
    window.dispatchEvent(
      new CustomEvent("cart:added", {
        detail: {
          productId,
        },
      })
    );
  };

  const removeFromCart = (productId: string) => {
    setItems((prev) =>
      prev.filter((item) => item.productId !== productId)
    );
  };

  const updateQuantity = (
    productId: string,
    quantity: number
  ) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setItems((prev) =>
      prev.map((item) =>
        item.productId === productId
          ? {
              ...item,
              quantity,
            }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = useMemo(() => {
    return items.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }, [items]);

  const value: CartContextType = {
  items,
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  totalItems,
  isLoaded,
};

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}