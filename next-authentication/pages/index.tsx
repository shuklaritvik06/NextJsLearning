import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button
        onClick={() =>
          signIn("google", {
            callbackUrl: "/"
          })
        }
      >
        Sign in with Google
      </button>
    </>
  );
}
