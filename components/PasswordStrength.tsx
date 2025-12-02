"use client";
import { useState, useEffect } from "react";

export default function PasswordStrength({ password }: { password: string }) {
  const [strength, setStrength] = useState(0);
  const [label, setLabel] = useState("");

  // Conditions
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const hasLength = password.length >= 8;

  useEffect(() => {
    let score = 0;
    if (hasLength) score++;
    if (hasUppercase) score++;
    if (hasNumber) score++;
    if (hasSpecial) score++;

    setStrength(score);

    if (score <= 1) setLabel("Weak");
    else if (score === 2) setLabel("Fair");
    else if (score === 3) setLabel("Good");
    else if (score === 4) setLabel("Strong");
  }, [password]);

  const percent = (strength / 4) * 100;

  return (
    <div className="mt-2">
      <div className="text-sm font-medium text-gray-700">
        Password strength: <span className="text-green-600">{label}</span>
      </div>

      <div className="w-full h-2 bg-gray-200 rounded-full mt-1">
        <div
          className={`h-2 rounded-full transition-all duration-300 ${
            strength === 1
              ? "bg-red-500"
              : strength === 2
              ? "bg-orange-400"
              : strength === 3
              ? "bg-yellow-500"
              : strength === 4
              ? "bg-green-500"
              : "bg-gray-300"
          }`}
          style={{ width: `${percent}%` }}
        ></div>
      </div>

      <ul className="mt-2 text-sm space-y-1">
        <CheckItem label="At least 8 characters" checked={hasLength} />
        <CheckItem label="At least one uppercase letter" checked={hasUppercase} />
        <CheckItem label="At least one number" checked={hasNumber} />
        <CheckItem label="At least one special character" checked={hasSpecial} />
      </ul>
    </div>
  );
}

function CheckItem({ label, checked }: { label: string; checked: boolean }) {
  return (
    <li className="flex items-center gap-2">
      <span
        className={`w-4 h-4 flex items-center justify-center rounded-full border ${
          checked
            ? "bg-green-500 border-green-500 text-white"
            : "border-gray-400 text-gray-400"
        }`}
      >
        {checked ? "✓" : "○"}
      </span>
      <span className={checked ? "text-green-700" : "text-gray-600"}>
        {label}
      </span>
    </li>
  );
}
