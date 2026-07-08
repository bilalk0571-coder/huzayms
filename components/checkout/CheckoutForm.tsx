"use client";

import { useEffect, useState } from "react";

import ShippingAddress, {
  ShippingData,
} from "./ShippingAddress";

import {
  loadShippingAddress,
  saveShippingAddress,
  isShippingValid,
} from "@/lib/checkout";

const emptyAddress: ShippingData = {
  fullName: "",
  phone: "",
  email: "",
  address: "",
  landmark: "",
  city: "",
  state: "",
  pincode: "",
};

interface CheckoutFormProps {
  onValidityChange: (valid: boolean) => void;
}

export default function CheckoutForm({
  onValidityChange,
}: CheckoutFormProps) {
  const [address, setAddress] =
    useState<ShippingData>(emptyAddress);

  useEffect(() => {
    const saved = loadShippingAddress();

    if (saved) {
      setAddress(saved);
    }
  }, []);

  useEffect(() => {
    saveShippingAddress(address);
  }, [address]);

  // Track address updates and relay validation status up to parent layout
  useEffect(() => {
    onValidityChange(
      isShippingValid(address)
    );
  }, [address, onValidityChange]);

  return (
    <ShippingAddress
      value={address}
      onChange={setAddress}
    />
  );
}