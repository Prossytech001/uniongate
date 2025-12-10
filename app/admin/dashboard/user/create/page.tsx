// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function CreateUser() {
//   const router = useRouter();

//   const [form, setForm] = useState({
//     legalFirstName: "",
//     middleName: "",
//     legalLastName: "",
//     username: "",
//     email: "",
//     phone: "",
//     country: "",
//     accountType: "Checking Account",
//     passwordHash: "",
//     transactionPinHash: "",
//   });

//   const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const submit = async () => {
//     const token = localStorage.getItem("adminToken");

//     const payload = {
//       personalInfo: {
//         legalFirstName: form.legalFirstName,
//         middleName: form.middleName,
//         legalLastName: form.legalLastName,
//         username: form.username,
//       },
//       contactDetail: {
//         email: form.email,
//         phone: form.phone,
//         country: form.country,
//       },
//       accountSetup: {
//         accountType: form.accountType,
//         transactionPinHash: form.transactionPinHash,
//       },
//       security: {
//         passwordHash: form.passwordHash,
//         termsAcceptedAt: new Date(),
//       },
//       createdBy: "admin",
//     };

//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/user`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
//       body: JSON.stringify(payload),
//     });

//     const data = await res.json();
//     if (data.success) {
//       router.push(`/admin/dashboard/user/${data.user._id}`);
//     }
//   };

//   return (
//     <div className="max-w-xl space-y-4">
//       <h1 className="text-2xl font-bold">Create New User</h1>

//       <input className="input" name="legalFirstName" placeholder="First name" onChange={onChange} />
//       <input className="input" name="middleName" placeholder="Middle name" onChange={onChange} />
//       <input className="input" name="legalLastName" placeholder="Last name" onChange={onChange} />
//       <input className="input" name="username" placeholder="Username" onChange={onChange} />

//       <input className="input" name="email" placeholder="Email" onChange={onChange} />
//       <input className="input" name="phone" placeholder="Phone" onChange={onChange} />
//       <input className="input" name="country" placeholder="Country" onChange={onChange} />

//       <select name="accountType" className="input" onChange={onChange}>
//         <option>Checking Account</option>
//         <option>Savings Account</option>
//         <option>Current Account</option>
//       </select>

//       <input className="input" name="passwordHash" placeholder="Password hash" onChange={onChange} />
//       <input className="input" name="transactionPinHash" placeholder="PIN hash" onChange={onChange} />

//       <button className="btn-primary" onClick={submit}>Create User</button>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateUser() {
  const router = useRouter();

  const [form, setForm] = useState({
    legalFirstName: "",
    middleName: "",
    legalLastName: "",
    username: "",
    email: "",
    phone: "",
    country: "",
    accountType: "Checking Account",
    password: "",          // <-- FIXED
    transactionPin: "",    // <-- FIXED
  });

  const onChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async () => {
    const token = localStorage.getItem("adminToken");

    const payload = {
  personalInfo: {
    legalFirstName: form.legalFirstName,
    middleName: form.middleName,
    legalLastName: form.legalLastName,
    username: form.username,
  },
  contactDetail: {
    email: form.email,
    phone: form.phone,
    country: form.country,
  },
  accountSetup: {
    accountType: form.accountType,
  },
  security: {
    password: form.password,              // ✔ FIXED
  transactionPin: form.transactionPin,
    termsAcceptedAt: new Date(),
  },
  createdBy: "admin",
};

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    console.log("CREATE RESPONSE:", data);

    if (data.success) {
      router.push(`/admin/dashboard/user/${data.user._id}`);
    } else {
      alert(data.message || "Failed to create user");
    }
  };

  return (
    <div className="max-w-xl space-y-4">
      <h1 className="text-2xl font-bold">Create New User</h1>

      <input className="input" name="legalFirstName" placeholder="First name" onChange={onChange} />
      <input className="input" name="middleName" placeholder="Middle name" onChange={onChange} />
      <input className="input" name="legalLastName" placeholder="Last name" onChange={onChange} />
      <input className="input" name="username" placeholder="Username" onChange={onChange} />

      <input className="input" name="email" placeholder="Email" onChange={onChange} />
      <input className="input" name="phone" placeholder="Phone" onChange={onChange} />
      <input className="input" name="country" placeholder="Country" onChange={onChange} />

      <select name="accountType" className="input" onChange={onChange}>
        <option>Checking Account</option>
        <option>Savings Account</option>
        <option>Current Account</option>
      </select>

      <input
        className="input"
        type="password"
        name="password"
        placeholder="Account Password"
        onChange={onChange}
      />

      <input
        className="input"
        type="password"
        name="transactionPin"
        placeholder="4-Digit Transaction PIN"
        onChange={onChange}
      />

      <button className="btn-primary" onClick={submit}>
        Create User
      </button>
    </div>
  );
}
