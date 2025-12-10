// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// // TYPES -----------------------
// interface User {
//   _id: string;
//   personalInfo: {
//     legalFirstName: string;
//     middleName: string;
//     legalLastName: string;
//     username: string;
//   };
//   contactDetail: {
//     email: string;
//     phone: string;
//     country: string;
//   };
//   accountSetup: { accountType: string };
//   status: "active" | "suspended";
//   balance: number;
//   uniqueId: string;
//   accountNumber: string;
// }

// interface Tx {
//   _id: string;
//   type: string;
//   amount: number;
//   method: string;
//   status: string;
//   createdAt: string;
// }

// // MAIN COMPONENT --------------
// export default function UserDetailsClient({ userId }: { userId: string }) {
//   const router = useRouter();

//   // UI State
//   const [tab, setTab] = useState<"profile" | "wallet" | "transactions" | "kyc">(
//     "profile"
//   );
//   const [user, setUser] = useState<User | null>(null);
//   const [transactions, setTransactions] = useState<Tx[]>([]);
//   const [page, setPage] = useState(1);
//   const [pages, setPages] = useState(1);

//   const token =
//     typeof window !== "undefined" ? localStorage.getItem("adminToken") : null;

//   // FETCH USER -------------------------------------------
//   const fetchUser = async () => {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/admin/user/${userId}`,
//       { headers: { Authorization: `Bearer ${token}` } }
//     );

//     const data = await res.json();
//     if (data.success) setUser(data.user);
//   };

//   // FETCH TRANSACTIONS ------------------------------------
//   const fetchTransactions = async (pageNum = 1) => {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/admin/user/${userId}/transactions?page=${pageNum}&limit=10`,
//       { headers: { Authorization: `Bearer ${token}` } }
//     );

//     const data = await res.json();
//     if (data.success) {
//       setTransactions(data.items);
//       setPage(data.page);
//       setPages(data.pages);
//     }
//   };

//   useEffect(() => {
//     fetchUser();
//     fetchTransactions(1);
//   }, []);

//   if (!user) return <p>Loading user...</p>;

//   // PROFILE SAVE ------------------------------------------
//   const saveProfile = async () => {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/admin/user/${userId}`,
//       {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(user),
//       }
//     );

//     const data = await res.json();
//     if (data.success) {
//       setUser(data.user);
//       alert("Profile updated!");
//     }
//   };

//   // USER STATUS --------------------------------------------
//   const updateStatus = async (status: "active" | "suspended") => {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/admin/user/${userId}/status`,
//       {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ status }),
//       }
//     );

//     const data = await res.json();
//     if (data.success) setUser(data.user);
//   };

//   // DELETE USER --------------------------------------------
//   const deleteUser = async () => {
//     if (!confirm("Are you sure? This action is irreversible.")) return;

//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/admin/user/${userId}`,
//       {
//         method: "DELETE",
//         headers: { Authorization: `Bearer ${token}` },
//       }
//     );

//     const data = await res.json();
//     if (data.success) {
//       alert("User deleted.");
//       router.replace("/admin/dashboard/user");
//     }
//   };

//   // WALLET ADJUST ------------------------------------------
//   const adjustBalance = async (action: "credit" | "debit") => {
//     const amount = Number(prompt(`Enter amount to ${action}:`));
//     if (!amount || amount <= 0) return alert("Invalid amount");
//     console.log("USER ID SENT:", userId);
// console.log("FULL URL:", `${process.env.NEXT_PUBLIC_API_URL}/admin/user/${userId}/wallet/adjust`);


//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/admin/user/${userId}/wallet/adjust`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ action, amount }),
//       }
//     );

//     const data = await res.json();
//     if (data.success) {
//       fetchUser();
//       fetchTransactions(page);
//     }
//   };

//   // TAB BUTTON COMPONENT -----------------------------------
//   const TabButton = (label: string, value: any) => (
//     <button
//       className={`px-4 py-2 rounded ${
//         tab === value ? "bg-blue-600 text-white" : "bg-gray-200"
//       }`}
//       onClick={() => setTab(value)}
//     >
//       {label}
//     </button>
//   );

//   return (
//     <div className="space-y-6">
//       {/* HEADER */}
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-3xl font-bold">
//             {user.personalInfo.legalFirstName} {user.personalInfo.legalLastName}
//           </h1>
//           <p className="text-gray-600">{user.personalInfo.username}</p>
//           <p className="text-gray-500">Account #: {user.accountNumber}</p>
//         </div>

//         <div className="flex gap-3">
//           <button
//             className="px-4 py-2 bg-yellow-600 text-white rounded"
//             onClick={() => updateStatus("suspended")}
//           >
//             Suspend
//           </button>

//           <button
//             className="px-4 py-2 bg-green-600 text-white rounded"
//             onClick={() => updateStatus("active")}
//           >
//             Activate
//           </button>

//           <button
//             className="px-4 py-2 bg-red-600 text-white rounded"
//             onClick={deleteUser}
//           >
//             Delete
//           </button>
//         </div>
//       </div>

//       {/* TABS */}
//       <div className="flex gap-3">
//         {TabButton("Profile", "profile")}
//         {TabButton("Wallet", "wallet")}
//         {TabButton("Transactions", "transactions")}
//         {TabButton("KYC", "kyc")}
//       </div>

//       {/* PROFILE TAB */}
//       {tab === "profile" && (
//         <div className="bg-white shadow p-6 rounded grid md:grid-cols-2 gap-4">
//           <h2 className="text-xl font-bold col-span-2">Profile Information</h2>

//           <input
//             className="input"
//             value={user.personalInfo.legalFirstName}
//             onChange={(e) =>
//               setUser({
//                 ...user,
//                 personalInfo: {
//                   ...user.personalInfo,
//                   legalFirstName: e.target.value,
//                 },
//               })
//             }
//           />
//           <input
//             className="input"
//             value={user.personalInfo.middleName}
//             onChange={(e) =>
//               setUser({
//                 ...user,
//                 personalInfo: { ...user.personalInfo, middleName: e.target.value },
//               })
//             }
//           />
//           <input
//             className="input"
//             value={user.personalInfo.legalLastName}
//             onChange={(e) =>
//               setUser({
//                 ...user,
//                 personalInfo: { ...user.personalInfo, legalLastName: e.target.value },
//               })
//             }
//           />
//           <input
//             className="input"
//             value={user.personalInfo.username}
//             onChange={(e) =>
//               setUser({
//                 ...user,
//                 personalInfo: { ...user.personalInfo, username: e.target.value },
//               })
//             }
//           />

//           <h2 className="text-xl font-bold col-span-2 mt-6">Contact Information</h2>

//           <input
//             className="input"
//             value={user.contactDetail.email}
//             onChange={(e) =>
//               setUser({
//                 ...user,
//                 contactDetail: { ...user.contactDetail, email: e.target.value },
//               })
//             }
//           />
//           <input
//             className="input"
//             value={user.contactDetail.phone}
//             onChange={(e) =>
//               setUser({
//                 ...user,
//                 contactDetail: { ...user.contactDetail, phone: e.target.value },
//               })
//             }
//           />
//           <input
//             className="input"
//             value={user.contactDetail.country}
//             onChange={(e) =>
//               setUser({
//                 ...user,
//                 contactDetail: { ...user.contactDetail, country: e.target.value },
//               })
//             }
//           />

//           <button
//             className="col-span-2 mt-4 bg-blue-600 text-white py-2 rounded"
//             onClick={saveProfile}
//           >
//             Save Profile
//           </button>
//         </div>
//       )}

//       {/* WALLET TAB */}
//       {tab === "wallet" && (
//         <div className="bg-white shadow p-6 rounded space-y-4">
//           <h2 className="text-xl font-bold">Wallet Balance</h2>
//           <p className="text-lg">
//             Balance:{" "}
//             <span className="font-bold text-green-700">${user.balance}</span>
//           </p>

//           <div className="flex gap-3">
//             <button
//               className="px-4 py-2 bg-blue-600 text-white rounded"
//               onClick={() => adjustBalance("credit")}
//             >
//               Credit
//             </button>
//             <button
//               className="px-4 py-2 bg-purple-600 text-white rounded"
//               onClick={() => adjustBalance("debit")}
//             >
//               Debit
//             </button>
//           </div>
//         </div>
//       )}

//       {/* TRANSACTIONS TAB */}
//       {tab === "transactions" && (
//         <div className="bg-white shadow p-6 rounded space-y-4">
//           <h2 className="text-xl font-bold">Transaction History</h2>

//           <div className="overflow-x-auto">
//             <table className="min-w-full">
//               <thead className="bg-gray-100">
//                 <tr>
//                   <th className="p-2 text-left">Date</th>
//                   <th className="p-2 text-left">Type</th>
//                   <th className="p-2 text-left">Amount</th>
//                   <th className="p-2 text-left">Method</th>
//                   <th className="p-2 text-left">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {transactions.map((tx) => (
//                   <tr key={tx._id} className="border-b">
//                     <td className="p-2">
//                       {new Date(tx.createdAt).toLocaleString()}
//                     </td>
//                     <td className="p-2">{tx.type}</td>
//                     <td className="p-2">${tx.amount}</td>
//                     <td className="p-2">{tx.method}</td>
//                     <td className="p-2">{tx.status}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Pagination */}
//           <div className="flex justify-between items-center mt-4">
//             <button
//               disabled={page === 1}
//               className="px-4 py-2 bg-gray-200 rounded"
//               onClick={() => {
//                 const newPage = page - 1;
//                 setPage(newPage);
//                 fetchTransactions(newPage);
//               }}
//             >
//               Prev
//             </button>

//             <span>
//               Page {page} of {pages}
//             </span>

//             <button
//               disabled={page === pages}
//               className="px-4 py-2 bg-gray-200 rounded"
//               onClick={() => {
//                 const newPage = page + 1;
//                 setPage(newPage);
//                 fetchTransactions(newPage);
//               }}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       )}

//       {/* KYC TAB */}
//       {tab === "kyc" && (
//         <div className="bg-white shadow p-6 rounded">
//           <h2 className="text-xl font-bold">KYC Status</h2>
//           <p className="text-gray-500 mt-2">KYC review interface coming soon.</p>
//         </div>
//       )}
//     </div>
//   );
// }
// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// // TYPES -----------------------
// interface User {
//   _id: string;
//   personalInfo: {
//     legalFirstName: string;
//     middleName: string;
//     legalLastName: string;
//     username: string;
//   };
//   contactDetail: {
//     email: string;
//     phone: string;
//     country: string;
//   };
//   accountSetup: { accountType: string };
//   status: "active" | "suspended";
//   account: {
//     balances: {
//       usd: { available: number };
//       usdt: { available: number };
//       btc: { available: number };
//     };
//   };
//   accountNumber: string;
// }

// // MAIN COMPONENT --------------
// export default function UserDetailsClient({ userId }: { userId: string }) {
//   const router = useRouter();

//   // UI State
//   const [tab, setTab] = useState<"profile" | "wallet" | "transactions" | "kyc">(
//     "profile"
//   );
//   const [user, setUser] = useState<User | null>(null);
//   const [transactions, setTransactions] = useState<any[]>([]);
//   const [page, setPage] = useState(1);
//   const [pages, setPages] = useState(1);

//   const token =
//     typeof window !== "undefined" ? localStorage.getItem("adminToken") : null;

//   // FETCH USER -------------------------------------------
//   const fetchUser = async () => {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/admin/user/${userId}`,
//       { headers: { Authorization: `Bearer ${token}` } }
//     );

//     const data = await res.json();
//     if (data.success) setUser(data.user);
//   };

//   // FETCH TRANSACTIONS ------------------------------------
//   const fetchTransactions = async (pageNum = 1) => {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/admin/user/${userId}/transactions?page=${pageNum}&limit=10`,
//       { headers: { Authorization: `Bearer ${token}` } }
//     );

//     const data = await res.json();
//     if (data.success) {
//       setTransactions(data.items);
//       setPage(data.page);
//       setPages(data.pages);
//     }
//   };

//   useEffect(() => {
//     fetchUser();
//     fetchTransactions(1);
//   }, []);

//   if (!user) return <p>Loading user...</p>;

//   // PROFILE SAVE ------------------------------------------
//   const saveProfile = async () => {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/admin/user/${userId}`,
//       {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(user),
//       }
//     );

//     const data = await res.json();
//     if (data.success) {
//       setUser(data.user);
//       alert("Profile & Wallet updated!");
//     }
//   };

//   // UPDATE STATUS --------------------------------------------
//   const updateStatus = async (status: "active" | "suspended") => {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/admin/user/${userId}/status`,
//       {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ status }),
//       }
//     );

//     const data = await res.json();
//     if (data.success) setUser(data.user);
//   };

//   // DELETE USER --------------------------------------------
//   const deleteUser = async () => {
//     if (!confirm("Are you sure? This action is irreversible.")) return;

//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/admin/user/${userId}`,
//       {
//         method: "DELETE",
//         headers: { Authorization: `Bearer ${token}` },
//       }
//     );

//     const data = await res.json();
//     if (data.success) {
//       alert("User deleted.");
//       router.replace("/admin/dashboard/user");
//     }
//   };

//   // TAB BUTTON -----------------------------------
//   const TabButton = (label: string, value: any) => (
//     <button
//       className={`px-4 py-2 rounded ${
//         tab === value ? "bg-blue-600 text-white" : "bg-gray-200"
//       }`}
//       onClick={() => setTab(value)}
//     >
//       {label}
//     </button>
//   );

//   return (
//     <div className="space-y-6">
//       {/* HEADER */}
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-3xl font-bold">
//             {user.personalInfo.legalFirstName} {user.personalInfo.legalLastName}
//           </h1>
//           <p className="text-gray-600">{user.personalInfo.username}</p>
//           <p className="text-gray-500">Account #: {user.accountNumber}</p>
//         </div>

//         <div className="flex gap-3">
//           <button
//             className="px-4 py-2 bg-yellow-600 text-white rounded"
//             onClick={() => updateStatus("suspended")}
//           >
//             Suspend
//           </button>

//           <button
//             className="px-4 py-2 bg-green-600 text-white rounded"
//             onClick={() => updateStatus("active")}
//           >
//             Activate
//           </button>

//           <button
//             className="px-4 py-2 bg-red-600 text-white rounded"
//             onClick={deleteUser}
//           >
//             Delete
//           </button>
//         </div>
//       </div>

//       {/* TABS */}
//       <div className="flex gap-3">
//         {TabButton("Profile", "profile")}
//         {TabButton("Wallet", "wallet")}
//         {TabButton("Transactions", "transactions")}
//         {TabButton("KYC", "kyc")}
//       </div>

      // {/* PROFILE TAB */}
      // {tab === "profile" && (
      //   <div className="bg-white shadow p-6 rounded grid md:grid-cols-2 gap-4">
      //     <h2 className="text-xl font-bold col-span-2">Profile Information</h2>

      //     {/* name fields */}
      //     <input
      //       className="input"
      //       value={user.personalInfo.legalFirstName}
      //       onChange={(e) =>
      //         setUser({
      //           ...user,
      //           personalInfo: {
      //             ...user.personalInfo,
      //             legalFirstName: e.target.value,
      //           },
      //         })
      //       }
      //     />
      //     <input
      //       className="input"
      //       value={user.personalInfo.middleName}
      //       onChange={(e) =>
      //         setUser({
      //           ...user,
      //           personalInfo: { ...user.personalInfo, middleName: e.target.value },
      //         })
      //       }
      //     />
      //     <input
      //       className="input"
      //       value={user.personalInfo.legalLastName}
      //       onChange={(e) =>
      //         setUser({
      //           ...user,
      //           personalInfo: { ...user.personalInfo, legalLastName: e.target.value },
      //         })
      //       }
      //     />
      //     <input
      //       className="input"
      //       value={user.personalInfo.username}
      //       onChange={(e) =>
      //         setUser({
      //           ...user,
      //           personalInfo: { ...user.personalInfo, username: e.target.value },
      //         })
      //       }
      //     />

      //     <h2 className="text-xl font-bold col-span-2 mt-6">Contact Info</h2>

      //     <input
      //       className="input"
      //       value={user.contactDetail.email}
      //       onChange={(e) =>
      //         setUser({
      //           ...user,
      //           contactDetail: { ...user.contactDetail, email: e.target.value },
      //         })
      //       }
      //     />
      //     <input
      //       className="input"
      //       value={user.contactDetail.phone}
      //       onChange={(e) =>
      //         setUser({
      //           ...user,
      //           contactDetail: { ...user.contactDetail, phone: e.target.value },
      //         })
      //       }
      //     />
      //     <input
      //       className="input"
      //       value={user.contactDetail.country}
      //       onChange={(e) =>
      //         setUser({
      //           ...user,
      //           contactDetail: { ...user.contactDetail, country: e.target.value },
      //         })
      //       }
      //     />

      //     <button
      //       className="col-span-2 mt-4 bg-blue-600 text-white py-2 rounded"
      //       onClick={saveProfile}
      //     >
      //       Save Profile
      //     </button>
      //   </div>
      // )}

//       {/* WALLET TAB */}
//       {tab === "wallet" && (
//         <div className="bg-white shadow p-6 rounded space-y-4">
//           <h2 className="text-xl font-bold mb-4">Wallet Balances</h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             {/* USD */}
//             <div>
//               <label className="text-sm font-semibold">USD Balance</label>
//               <input
//                 type="number"
//                 className="input mt-1"
//                 value={user.account.balances.usd.available}
//                 onChange={(e) =>
//                   setUser({
//                     ...user,
//                     account: {
//                       ...user.account,
//                       balances: {
//                         ...user.account.balances,
//                         usd: { available: Number(e.target.value) },
//                       },
//                     },
//                   })
//                 }
//               />
//             </div>

//             {/* USDT */}
//             <div>
//               <label className="text-sm font-semibold">USDT Balance</label>
//               <input
//                 type="number"
//                 className="input mt-1"
//                 value={user.account.balances.usdt.available}
//                 onChange={(e) =>
//                   setUser({
//                     ...user,
//                     account: {
//                       ...user.account,
//                       balances: {
//                         ...user.account.balances,
//                         usdt: { available: Number(e.target.value) },
//                       },
//                     },
//                   })
//                 }
//               />
//             </div>

//             {/* BTC */}
//             <div>
//               <label className="text-sm font-semibold">BTC Balance</label>
//               <input
//                 type="number"
//                 className="input mt-1"
//                 value={user.account.balances.btc.available}
//                 onChange={(e) =>
//                   setUser({
//                     ...user,
//                     account: {
//                       ...user.account,
//                       balances: {
//                         ...user.account.balances,
//                         btc: { available: Number(e.target.value) },
//                       },
//                     },
//                   })
//                 }
//               />
//             </div>
//           </div>

//           <button
//             className="px-4 py-2 bg-blue-600 text-white rounded mt-4"
//             onClick={saveProfile}
//           >
//             Save Balances
//           </button>
//         </div>
//       )}

//       {/* TRANSACTIONS TAB */}
//       {tab === "transactions" && (
//         <div className="bg-white shadow p-6 rounded space-y-4">
//           <h2 className="text-xl font-bold">Transaction History</h2>

//           <div className="overflow-x-auto">
//             <table className="min-w-full">
//               <thead className="bg-gray-100">
//                 <tr>
//                   <th className="p-2 text-left">Date</th>
//                   <th className="p-2 text-left">Type</th>
//                   <th className="p-2 text-left">Amount</th>
//                   <th className="p-2 text-left">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {transactions.map((tx) => (
//                   <tr key={tx._id} className="border-b">
//                     <td className="p-2">
//                       {new Date(tx.createdAt).toLocaleString()}
//                     </td>
//                     <td className="p-2">{tx.type}</td>
//                     <td className="p-2">${tx.amount}</td>
//                     <td className="p-2">{tx.status}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Pagination */}
//           <div className="flex justify-between items-center mt-4">
//             <button
//               disabled={page === 1}
//               className="px-4 py-2 bg-gray-200 rounded"
//               onClick={() => {
//                 const newPage = page - 1;
//                 setPage(newPage);
//                 fetchTransactions(newPage);
//               }}
//             >
//               Prev
//             </button>

//             <span>
//               Page {page} of {pages}
//             </span>

//             <button
//               disabled={page === pages}
//               className="px-4 py-2 bg-gray-200 rounded"
//               onClick={() => {
//                 const newPage = page + 1;
//                 setPage(newPage);
//                 fetchTransactions(newPage);
//               }}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       )}

//       {/* KYC TAB */}
//       {tab === "kyc" && (
//         <div className="bg-white shadow p-6 rounded">
//           <h2 className="text-xl font-bold">KYC Status</h2>
//           <p className="text-gray-500 mt-2">KYC review interface coming soon.</p>
//         </div>
//       )}
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// TYPES -----------------------
interface AccountData {
  balances: {
    usd: { available: number };
    usdt: { available: number };
    btc: { available: number };
  };
}

interface User {
  _id: string;
  personalInfo: {
    legalFirstName: string;
    middleName: string;
    legalLastName: string;
    username: string;
  };
  contactDetail: {
    email: string;
    phone: string;
    country: string;
  };
  accountSetup: { accountType: string };
  status: "active" | "suspended";
  account?: AccountData; // <-- optional
  accountNumber: string;
}

// MAIN COMPONENT --------------
export default function UserDetailsClient({ userId }: { userId: string }) {
  const router = useRouter();

  const [tab, setTab] = useState<"profile" | "wallet" | "transactions" | "kyc">(
    "profile"
  );
  const [user, setUser] = useState<User | null>(null);
  const [transactions, setTransactions] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  const token =
    typeof window !== "undefined" ? localStorage.getItem("adminToken") : null;


    const [showTxModal, setShowTxModal] = useState(false);

const [txForm, setTxForm] = useState({
  type: "deposit",
  direction: "credit",
  amount: "",
  currency: "usd",
  description: ""
});


  // DEFAULT empty account in case backend returns none
  const EMPTY_ACCOUNT: AccountData = {
    balances: {
      usd: { available: 0 },
      usdt: { available: 0 },
      btc: { available: 0 },
    },
  };

  // FETCH USER -------------------------------------------
  const fetchUser = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/user/${userId}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    const data = await res.json();
    
    if (data.success) {
      setUser({
        ...data.user,
        account: data.account ?? EMPTY_ACCOUNT, // safe fallback
        
      });
    }
  };

  // FETCH TRANSACTIONS ------------------------------------
  const fetchTransactions = async (pageNum = 1) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/user/${userId}/transactions?page=${pageNum}&limit=10`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    const data = await res.json();
    console.log("FETCH TX RESPONSE:", data);

    if (!data.success) {
      console.warn("No transactions found.");
      setTransactions([]);
      return;
    }

    setTransactions(data.items);
    setPage(data.page);
    setPages(data.pages);
    
  } catch (err) {
    console.error("FETCH TX ERROR:", err);
  }
};


  useEffect(() => {
    fetchUser();
    fetchTransactions(1);
  }, []);

  if (!user) return <p>Loading user...</p>;

  // PROFILE SAVE ------------------------------------------
  const saveProfile = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/user/${userId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(user),
      }
    );

    const data = await res.json();
    if (data.success) {
      setUser({
        ...data.user,
        account: user.account, // keep wallet locally updated
      });
      alert("Profile & Wallet updated!");
    }
  };

  // STATUS UPDATE -----------------------------------------
  const updateStatus = async (status: "active" | "suspended") => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/user/${userId}/status`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      }
    );

    const data = await res.json();
    if (data.success) setUser({ ...user, status });
  };

  // DELETE USER --------------------------------------------
  const deleteUser = async () => {
    if (!confirm("Are you sure? This action is irreversible.")) return;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/user/${userId}`,
      {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const data = await res.json();
    if (data.success) {
      alert("User deleted.");
      router.replace("/admin/dashboard/user");
    }
  };

  // TAB BUTTON -----------------------------------
  const TabButton = (label: string, value: any) => (
    <button
      className={`px-4 py-2 rounded ${
        tab === value ? "bg-blue-600 text-white" : "bg-gray-200"
      }`}
      onClick={() => setTab(value)}
    >
      {label}
    </button>
  );


  const submitTransaction = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/admin/user/${userId}/transaction`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(txForm),
    }
  );

  const data = await res.json();
  console.log("TX CREATE:", data);

  if (data.success) {
    alert("Transaction added!");
    setShowTxModal(false);
    fetchTransactions(page);  // refresh table
    fetchUser();              // refresh balances
  } else {
    alert(data.message || "Failed to create transaction");
  }
};


// const fetchTransactions = async (pageNum = 1) => {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/admin/user/${userId}/transactions?page=${pageNum}&limit=10`,
//     { headers: { Authorization: `Bearer ${token}` } }
//   );



  // SAFE ACCOUNT ACCESS
  const account = user.account ?? EMPTY_ACCOUNT;


//   const [showTxModal, setShowTxModal] = useState(false);

// const [txForm, setTxForm] = useState({
//   type: "deposit",
//   direction: "credit",
//   amount: "",
//   currency: "usd",
//   description: ""
// });


  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            {user.personalInfo.legalFirstName} {user.personalInfo.legalLastName}
          </h1>
          <p className="text-gray-600">{user.personalInfo.username}</p>
          <p className="text-gray-500">Account #: {user.accountNumber}</p>
        </div>

        <div className="flex gap-3">
          <button
            className="px-4 py-2 bg-yellow-600 text-white rounded"
            onClick={() => updateStatus("suspended")}
          >
            Suspend
          </button>

          <button
            className="px-4 py-2 bg-green-600 text-white rounded"
            onClick={() => updateStatus("active")}
          >
            Activate
          </button>

          <button
            className="px-4 py-2 bg-red-600 text-white rounded"
            onClick={deleteUser}
          >
            Delete
          </button>
          <button
  className="px-4 py-2 bg-green-600 text-white rounded"
  onClick={() => setShowTxModal(true)}
>
  + Add Transaction
</button>

        </div>
      </div>

      {/* TABS */}
      <div className="flex gap-3">
        {TabButton("Profile", "profile")}
        {TabButton("Wallet", "wallet")}
        {TabButton("Transactions", "transactions")}
        {TabButton("KYC", "kyc")}
      </div>

      {/* PROFILE TAB */}
      {tab === "profile" && (
        <div className="bg-white shadow p-6 rounded grid md:grid-cols-2 gap-4">
          <h2 className="text-xl font-bold col-span-2">Profile Information</h2>

          {/* name fields */}
          <input
            className="input"
            value={user.personalInfo.legalFirstName}
            onChange={(e) =>
              setUser({
                ...user,
                personalInfo: {
                  ...user.personalInfo,
                  legalFirstName: e.target.value,
                },
              })
            }
          />
          <input
            className="input"
            value={user.personalInfo.middleName}
            onChange={(e) =>
              setUser({
                ...user,
                personalInfo: { ...user.personalInfo, middleName: e.target.value },
              })
            }
          />
          <input
            className="input"
            value={user.personalInfo.legalLastName}
            onChange={(e) =>
              setUser({
                ...user,
                personalInfo: { ...user.personalInfo, legalLastName: e.target.value },
              })
            }
          />
          <input
            className="input"
            value={user.personalInfo.username}
            onChange={(e) =>
              setUser({
                ...user,
                personalInfo: { ...user.personalInfo, username: e.target.value },
              })
            }
          />

          <h2 className="text-xl font-bold col-span-2 mt-6">Contact Info</h2>

          <input
            className="input"
            value={user.contactDetail.email}
            onChange={(e) =>
              setUser({
                ...user,
                contactDetail: { ...user.contactDetail, email: e.target.value },
              })
            }
          />
          <input
            className="input"
            value={user.contactDetail.phone}
            onChange={(e) =>
              setUser({
                ...user,
                contactDetail: { ...user.contactDetail, phone: e.target.value },
              })
            }
          />
          <input
            className="input"
            value={user.contactDetail.country}
            onChange={(e) =>
              setUser({
                ...user,
                contactDetail: { ...user.contactDetail, country: e.target.value },
              })
            }
          />

          <button
            className="col-span-2 mt-4 bg-blue-600 text-white py-2 rounded"
            onClick={saveProfile}
          >
            Save Profile
          </button>
        </div>
      )}
{/* WALLET TAB */}
{tab === "wallet" && (
  <div className="bg-white shadow p-6 rounded space-y-6">
    <h2 className="text-xl font-bold">Wallet Balances</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* USD */}
      <div className="p-4 border rounded-xl bg-gray-50">
        <p className="text-sm text-gray-600 font-semibold">USD Balance</p>
        <p className="text-2xl font-bold mt-2">
          ${account.balances.usd.available.toLocaleString()}
        </p>
      </div>

      {/* USDT */}
      <div className="p-4 border rounded-xl bg-gray-50">
        <p className="text-sm text-gray-600 font-semibold">USDT Balance</p>
        <p className="text-2xl font-bold mt-2">
          {account.balances.usdt.available.toLocaleString()} USDT
        </p>
      </div>

      {/* BTC */}
      <div className="p-4 border rounded-xl bg-gray-50">
        <p className="text-sm text-gray-600 font-semibold">BTC Balance</p>
        <p className="text-2xl font-bold mt-2">
          {account.balances.btc.available} BTC
        </p>
      </div>

    </div>
  </div>
)}

      {/* WALLET TAB */}
      {/* {tab === "wallet" && (
        <div className="bg-white shadow p-6 rounded space-y-4">
          <h2 className="text-xl font-bold mb-4">Wallet Balances</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
           
            <div>
              <label className="text-sm font-semibold">USD Balance</label>
              <input
                type="number"
                className="input mt-1"
                value={account.balances.usd.available}
                onChange={(e) =>
                  setUser({
                    ...user,
                    account: {
                      ...account,
                      balances: {
                        ...account.balances,
                        usd: { available: Number(e.target.value) },
                      },
                    },
                  })
                }
              />
            </div>

       
            <div>
              <label className="text-sm font-semibold">USDT Balance</label>
              <input
                type="number"
                className="input mt-1"
                value={account.balances.usdt.available}
                onChange={(e) =>
                  setUser({
                    ...user,
                    account: {
                      ...account,
                      balances: {
                        ...account.balances,
                        usdt: { available: Number(e.target.value) },
                      },
                    },
                  })
                }
              />
            </div>

           
            <div>
              <label className="text-sm font-semibold">BTC Balance</label>
              <input
                type="number"
                className="input mt-1"
                value={account.balances.btc.available}
                onChange={(e) =>
                  setUser({
                    ...user,
                    account: {
                      ...account,
                      balances: {
                        ...account.balances,
                        btc: { available: Number(e.target.value) },
                      },
                    },
                  })
                }
              />
            </div>
          </div>

          <button
            className="px-4 py-2 bg-blue-600 text-white rounded mt-4"
            onClick={saveProfile}
          >
            Save Balances
          </button>
        </div>
      )} */}

      {/* TRANSACTIONS */}
      {/* TRANSACTIONS TAB */}
{tab === "transactions" && (
  <div className="bg-white shadow p-6 rounded space-y-4">
    <h2 className="text-xl font-bold">Transaction History</h2>

    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 text-left">Date</th>
            <th className="p-2 text-left">Type</th>
            <th className="p-2 text-left">Direction</th>
            <th className="p-2 text-left">Amount</th>
            <th className="p-2 text-left">Currency</th>
            <th className="p-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length === 0 && (
            <tr>
              <td colSpan={6} className="p-4 text-center text-gray-500">
                No transactions found.
              </td>
            </tr>
          )}

          {transactions.map((tx) => (
            <tr key={tx._id} className="border-b">
              <td className="p-2">{new Date(tx.createdAt).toLocaleString()}</td>
              <td className="p-2">{tx.type}</td>
              <td className="p-2">{tx.direction}</td>
              <td className="p-2">${tx.amount}</td>
              <td className="p-2">{tx.currency?.toUpperCase?.()}</td>
              <td className="p-2">{tx.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Pagination */}
    <div className="flex justify-between mt-4">
      <button
        className="px-4 py-2 bg-gray-200 rounded"
        disabled={page === 1}
        onClick={() => {
          const newPage = page - 1;
          fetchTransactions(newPage);
        }}
      >
        Prev
      </button>

      <span>
        Page {page} of {pages}
      </span>

      <button
        className="px-4 py-2 bg-gray-200 rounded"
        disabled={page === pages}
        onClick={() => {
          const newPage = page + 1;
          fetchTransactions(newPage);
        }}
      >
        Next
      </button>
    </div>
  </div>
)}


      {/* KYC TAB */}
      {tab === "kyc" && (
        <div className="bg-white shadow p-6 rounded">
          <h2 className="text-xl font-bold">KYC Status</h2>
          <p className="text-gray-500 mt-2">KYC review interface coming soon.</p>
        </div>
      )}

      {showTxModal && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">

      <h2 className="text-xl font-bold mb-4">Create Transaction</h2>

      {/* TYPE */}
      <label className="block text-sm font-medium">Transaction Type</label>
      <select
        className="input mb-3"
        value={txForm.type}
        onChange={e => setTxForm({ ...txForm, type: e.target.value })}
      >
        <option value="deposit">Deposit</option>
        <option value="withdrawal">Withdrawal</option>
        <option value="transfer">Transfer</option>
        <option value="card">Card</option>
        <option value="custom">Custom</option>
      </select>

      {/* DIRECTION */}
      <label className="block text-sm font-medium">Direction</label>
      <select
        className="input mb-3"
        value={txForm.direction}
        onChange={e => setTxForm({ ...txForm, direction: e.target.value })}
      >
        <option value="credit">Credit (+)</option>
        <option value="debit">Debit (-)</option>
      </select>

      {/* AMOUNT */}
      <label className="block text-sm font-medium">Amount</label>
      <input
        className="input mb-3"
        type="number"
        value={txForm.amount}
        onChange={e => setTxForm({ ...txForm, amount: e.target.value })}
      />

      {/* CURRENCY */}
      <label className="block text-sm font-medium">Currency</label>
      <select
        className="input mb-3"
        value={txForm.currency}
        onChange={e => setTxForm({ ...txForm, currency: e.target.value })}
      >
        <option value="usd">USD</option>
        <option value="usdt">USDT</option>
        <option value="btc">BTC</option>
      </select>

      {/* DESCRIPTION */}
      <label className="block text-sm font-medium">Description</label>
      <input
        className="input mb-4"
        placeholder="Optional"
        value={txForm.description}
        onChange={e => setTxForm({ ...txForm, description: e.target.value })}
      />

      {/* ACTION BUTTONS */}
      <div className="flex justify-end gap-3">
        <button
          className="px-4 py-2 bg-gray-300 rounded"
          onClick={() => setShowTxModal(false)}
        >
          Cancel
        </button>

        <button
          className="px-4 py-2 bg-blue-600 text-white rounded"
          onClick={submitTransaction}
        >
          Save Transaction
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );


  
}



