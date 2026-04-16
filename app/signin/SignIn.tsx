"use client";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import Btn from "@/components/ui/Btn";

function SignIn() {
  const { data: session } = authClient.useSession();
  if (session) redirect("/admin");

  async function handleSignIn() {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/admin",
    });
  }

  return <Btn text="Sign In" onclick={() => handleSignIn()} primary />;
}

export default SignIn;
