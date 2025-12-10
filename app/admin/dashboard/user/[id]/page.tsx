import { use } from "react";
import UserDetailsClient from "./UserDetailsClient";

export default function UserPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return <UserDetailsClient userId={id} />;
}


