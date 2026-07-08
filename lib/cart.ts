import { PRODUCTS } from "@/data/products";
import type { CartItem } from "@/types/cart";
import type { Product } from "@/types";

export interface CartProduct extends CartItem {
  product: Product;
  lineTotal: number;
}

/**
 * Converts CartItems into Product objects.
 */
export function getCartProducts(
  cartItems: CartItem[]
): CartProduct[] {
  return cartItems
    .map((item) => {
      const product = PRODUCTS.find(
        (p) => p.id === item.productId
      );

      if (!product) return null;

      return {
        ...item,
        product,
        lineTotal: product.price * item.quantity,
      };
    })
    .filter(
      (item): item is CartProduct => item !== null
    );
}

/**
 * Cart subtotal before shipping/tax.
 */
export function calculateSubtotal(
  cartItems: CartItem[]
): number {
  return getCartProducts(cartItems).reduce(
    (total, item) => total + item.lineTotal,
    0
  );
}

/**
 * Total number of items in cart.
 * Example:
 * 2 × Mariana
 * 3 × Cinnabon
 * => 5
 */
export function calculateItemCount(
  cartItems: CartItem[]
): number {
  return cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
}

/**
 * Find a single product already enriched with cart data.
 */
export function getCartProduct(
  productId: string,
  cartItems: CartItem[]
): CartProduct | undefined {
  return getCartProducts(cartItems).find(
    (item) => item.product.id === productId
  );
}