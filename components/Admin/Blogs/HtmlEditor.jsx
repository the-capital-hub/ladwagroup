"use client";

import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function HtmlEditor({ value, onChange, className, placeholder }) {
  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current && divRef.current.innerHTML !== (value || "")) {
      divRef.current.innerHTML = value || "";
    }
  }, [value]);

  const handleInput = (e) => {
    if (onChange) onChange(e.currentTarget.innerHTML);
  };

  return (
    <div
      ref={divRef}
      contentEditable
      onInput={handleInput}
      className={cn(
        "min-h-40 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#097362] focus:border-transparent prose",
        className
      )}
      style={{ whiteSpace: "pre-wrap" }}
      data-placeholder={placeholder}
    />
  );
}
