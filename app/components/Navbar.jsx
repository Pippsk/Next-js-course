import Image from "next/image";
import Link from "next/link";

import Logo from "./logo.png";
import LogoutButton from "./LogoutButton";

const Navbar = ({ user }) => {
  return (
    <nav>
      <Image
        src={Logo}
        alt="helpdesk logo"
        width={70}
        quality={100}
        placeholder="blur"
      />
      <h2>Pippo's Helpdesk</h2>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets" className="mr-auto">
        Tickets
      </Link>
      {user && <span>Hello, {user.email}</span>}
      <LogoutButton />
    </nav>
  );
};

export default Navbar;
