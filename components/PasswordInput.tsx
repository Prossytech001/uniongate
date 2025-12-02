"use client";
import { useState } from "react";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

export default function PasswordInput({
  value,
  onChange,
  placeholder = "Password",
  className = "input"
}: Props) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative w-full">
      <input
        type={show ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={className + " pr-10"} // extra space for eye icon
      />

      {/* Eye toggle button */}
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
      >
        {show ? (
          // eye-off icon
          <svg width="22" height="22" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12 6c3.86 0 7.16 2.24 8.82 5.5c-.63 1.24-1.52 2.31-2.59 3.15l1.41 1.41c1.39-1.17 2.56-2.69 3.36-4.56C20.84 7.76 16.54 5.5 12 5.5c-1.44 0-2.82.28-4.09.78l1.53 1.53C10.21 7.2 11.08 7 12 7m0 10c-3.86 0-7.16-2.24-8.82-5.5c.54-1.07 1.28-2.03 2.17-2.82l1.47 1.47C6.17 10.85 6 11.41 6 12c0 3.31 2.69 6 6 6c.59 0 1.15-.17 1.65-.45l1.47 1.47c-.79.89-1.75 1.63-2.82 2.17c1.76-.37 3.29-1.54 4.47-3.01L17.5 14.5c-.84 1.07-1.91 1.96-3.15 2.59c1.76-.37 3.29-1.54 4.47-3.01l1.41 1.41c-1.17 1.39-2.69 2.56-4.56 3.36c-1.24.63-2.69 1-4.17 1c-4.54 0-8.84-2.26-11.63-5.5C3.16 8.76 7.46 6.5 12 6.5c1.48 0 2.93.37 4.17 1c1.24.63 2.39 1.5 3.36 2.59L17.5 12.5c-1.07-.84-2.03-1.52-3.15-2.06c-1.12-.54-2.14-.94-3.35-.94Z"
            />
          </svg>
        ) : (
          // eye icon
          <svg width="22" height="22" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12 5c-7 0-10 7-10 7s3 7 10 7s10-7 10-7s-3-7-10-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5zm0-8a3 3 0 1 0 3 3a3 3 0 0 0-3-3z"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
