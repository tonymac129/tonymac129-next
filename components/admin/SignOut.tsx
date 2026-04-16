"use client";

import { FaSignOutAlt } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import Btn from "../ui/Btn";

function SignOut() {
  async function handleSignOut() {
    await authClient.signOut();
    window.location.reload();
  }

  return (
    <Btn text="" onclick={() => handleSignOut()} left primary>
      <FaSignOutAlt size={20} /> Sign Out
    </Btn>
  );
}

export default SignOut;
