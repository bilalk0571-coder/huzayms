import type { ShippingData } from "@/components/checkout/ShippingAddress";
import { CHECKOUT_STORAGE_KEY } from "./constants";

// ===============================
// Local Storage
// ===============================

export function saveShippingAddress(data: ShippingData) {
  localStorage.setItem(
    CHECKOUT_STORAGE_KEY,
    JSON.stringify(data)
  );
}

export function loadShippingAddress(): ShippingData | null {
  const saved = localStorage.getItem(CHECKOUT_STORAGE_KEY);

  if (!saved) return null;

  try {
    return JSON.parse(saved);
  } catch {
    return null;
  }
}

// ===============================
// Validation
// ===============================

export function validateShippingAddress(
  data: ShippingData
) {
  return {
    fullName: data.fullName.trim().length > 0,

    phone: /^[0-9]{10}$/.test(data.phone),

    address: data.address.trim().length > 0,

    city: data.city.trim().length > 0,

    state: data.state.trim().length > 0,

    pincode: /^[0-9]{6}$/.test(data.pincode),
  };
}

export function isShippingValid(
  data: ShippingData
) {
  const validation = validateShippingAddress(data);

  return Object.values(validation).every(Boolean);
}