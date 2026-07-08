"use client";

import { useState } from "react";

export interface ShippingData {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  landmark: string;
  city: string;
  state: string;
  pincode: string;
}

interface ShippingAddressProps {
  value: ShippingData;
  onChange: (data: ShippingData) => void;
}

export default function ShippingAddress({
  value,
  onChange,
}: ShippingAddressProps) {
  const [errors, setErrors] = useState<
    Partial<Record<keyof ShippingData, string>>
  >({});

  function validateField(
    field: keyof ShippingData,
    fieldValue: string
  ): string {
    switch (field) {
      case "fullName":
        if (!fieldValue.trim()) {
          return "Full name is required";
        }
        break;

      case "phone":
        if (!/^[0-9]{10}$/.test(fieldValue)) {
          return "Enter a valid 10-digit phone number";
        }
        break;

      case "address":
        if (!fieldValue.trim()) {
          return "Address is required";
        }
        break;

      case "city":
        if (!fieldValue.trim()) {
          return "City is required";
        }
        break;

      case "state":
        if (!fieldValue.trim()) {
          return "State is required";
        }
        break;

      case "pincode":
        if (!/^[0-9]{6}$/.test(fieldValue)) {
          return "Enter a valid 6-digit pincode";
        }
        break;
    }

    return "";
  }

  function updateField(
    field: keyof ShippingData,
    fieldValue: string
  ) {
    const updated = {
      ...value,
      [field]: fieldValue,
    };

    onChange(updated);

    setErrors((prev) => ({
      ...prev,
      [field]: validateField(field, fieldValue),
    }));
  }

  function renderInput(
    label: string,
    field: keyof ShippingData,
    placeholder: string,
    type = "text",
    required = true
  ) {
    return (
      <div>
        <label className="mb-2 block text-sm text-slate-300">
          {label}
          {!required && (
            <span className="text-slate-500">
              {" "}
              (Optional)
            </span>
          )}
        </label>

        {field === "phone" ? (
          <div className="flex overflow-hidden rounded-2xl border border-white/10 bg-[#071225] focus-within:border-[#D4AF37] focus-within:ring-2 focus-within:ring-[#D4AF37]/20">
            <div
              className="
                flex
                items-center
                px-5
                text-white
                border-r
                border-white/10
                bg-white/5
                font-medium
              "
            >
              +91
            </div>

            <input
              type="tel"
              value={value.phone}
              onChange={(e) =>
                updateField(
                  "phone",
                  e.target.value.replace(/\D/g, "")
                )
              }
              placeholder="9876543210"
              inputMode="numeric"
              autoComplete="tel"
              maxLength={10}
              className="
                flex-1
                bg-transparent
                px-5
                py-4
                text-white
                outline-none
                placeholder:text-slate-500
              "
            />
          </div>
        ) : (
          <input
            type={type}
            value={value[field]}
            onChange={(e) => {
              let val = e.target.value;

              if (field === "pincode") {
                val = val.replace(/\D/g, "");
              }

              updateField(field, val);
            }}
            placeholder={placeholder}
            autoComplete={
              field === "fullName"
                ? "name"
                : field === "email"
                ? "email"
                : field === "address"
                ? "street-address"
                : field === "city"
                ? "address-level2"
                : field === "state"
                ? "address-level1"
                : field === "pincode"
                ? "postal-code"
                : "off"
            }
            inputMode={
              field === "pincode"
                ? "numeric"
                : "text"
            }
            maxLength={
              field === "pincode"
                ? 6
                : undefined
            }
            className="
              w-full
              rounded-2xl
              border
              border-white/10
              bg-[#071225]
              px-5
              py-4
              text-white
              outline-none
              transition-all
              duration-300
              placeholder:text-slate-500
              focus:border-[#D4AF37]
              focus:ring-2
              focus:ring-[#D4AF37]/20
            "
          />
        )}

        {errors[field] && (
          <p className="mt-2 text-sm text-red-400">
            {errors[field]}
          </p>
        )}
      </div>
    );
  }

  return (
    <section
      className="
        rounded-3xl
        border
        border-white/10
        bg-[#071225]
        p-8
      "
    >
      <p className="uppercase tracking-[0.35em] text-[11px] text-[#D4AF37]">
        Shipping Address
      </p>

      <h2 className="mt-4 font-serif text-3xl text-white">
        Delivery Details
      </h2>

      <div className="mt-10 space-y-6">
        {renderInput(
          "Full Name",
          "fullName",
          "Bilal Ansari"
        )}

        {renderInput(
          "Phone Number",
          "phone",
          "9876543210",
          "tel"
        )}

        {renderInput(
          "Email",
          "email",
          "you@example.com",
          "email",
          false
        )}

        {renderInput(
          "House / Flat / Apartment",
          "address",
          "Flat 301, ABC Residency"
        )}

        {renderInput(
          "Landmark",
          "landmark",
          "Near Metro Station",
          "text",
          false
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {renderInput(
            "City",
            "city",
            "Mumbai"
          )}

          {renderInput(
            "State",
            "state",
            "Maharashtra"
          )}
        </div>

        {renderInput(
          "Pincode",
          "pincode",
          "400001"
        )}
      </div>
    </section>
  );
}