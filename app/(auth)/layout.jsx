import Link from "next/link";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const AuthLayout = async ({ children }) => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (data.session) {
    redirect("/");
  }
  return (
    <>
      <nav>
        <Link href="/">
          {" "}
          <h2>Pippo's Dashboard</h2>
        </Link>
        <Link href="/signup">Sign Up</Link>
        <Link href="/login">Log In</Link>
      </nav>
      {children}
    </>
  );
};

export default AuthLayout;
