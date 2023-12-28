import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <h2>Pippo's Helpdesk</h2>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
};

export default Navbar;
