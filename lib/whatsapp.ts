import { getCartProducts, calculateSubtotal } from "./cart";
import { loadShippingAddress } from "./checkout";
import { formatPrice } from "@/data/products";
import { CartItem } from "@/types/cart";

export function sendOrderToWhatsApp(items: CartItem[]) {
  const products = getCartProducts(items);
  const address = loadShippingAddress();

  if (!address) {
    alert("Please fill in your shipping address.");
    return;
  }

  const subtotal = calculateSubtotal(products);

  const FREE_SHIPPING_THRESHOLD = 1600;
  const SHIPPING_CHARGE = 79;

  const shipping =
    subtotal >= FREE_SHIPPING_THRESHOLD
      ? 0
      : SHIPPING_CHARGE;

  const total = subtotal + shipping;

  const productLines = products
    .map(
      (item, index) => `
${index + 1}. ${item.product.name}
   Qty : ${item.quantity}
   ${formatPrice(item.product.price * item.quantity)}`
    )
    .join("\n");

  const message = `━━━━━━━━━━━━━━━━━━━━━━━━━━

            HUZAYM'S
     Premium Fragrance Collection

━━━━━━━━━━━━━━━━━━━━━━━━━━

✨ NEW ORDER REQUEST

━━━━━━━━━━━━━━━━━━━━━━━━━━

🛍️ SELECTED FRAGRANCES

${productLines}

━━━━━━━━━━━━━━━━━━━━━━━━━━

💳 PURCHASE SUMMARY

Subtotal
${formatPrice(subtotal)}

Shipping
${shipping === 0 ? "FREE" : formatPrice(shipping)}

Grand Total
${formatPrice(total)}

━━━━━━━━━━━━━━━━━━━━━━━━━━

📍 DELIVERY ADDRESS

Name
${address.fullName}

Phone
+91 ${address.phone}

${address.email ? `Email
${address.email}

` : ""}Address
${address.address}

${address.landmark ? `Landmark
${address.landmark}

` : ""}City
${address.city}

State
${address.state}

Pincode
${address.pincode}

━━━━━━━━━━━━━━━━━━━━━━━━━━

🕒 ORDER PLACED

${new Date().toLocaleString("en-IN", {
  dateStyle: "medium",
  timeStyle: "short",
})}

━━━━━━━━━━━━━━━━━━━━━━━━━━

Kindly confirm this order and
share the payment instructions.

Thank you.

━━━━━━━━━━━━━━━━━━━━━━━━━━`;

  const url = `https://wa.me/918928042335?text=${encodeURIComponent(
    message
  )}`;

  window.open(url, "_blank");
}