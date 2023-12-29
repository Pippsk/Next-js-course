import Image from "next/image";
import Link from "next/link";

import Logo from "./logo.png";

const Navbar = () => {
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
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
};

export default Navbar;
