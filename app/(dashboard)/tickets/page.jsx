import React, { Suspense } from "react";
import TicketsList from "./TicketsList";
import Loading from "../loading";
import Link from "next/link";

export const metadata = {
  title: "Pippo's Helpdesk | Tickets",
};

const Tickets = () => {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently open tickets</small>
          </p>
        </div>

        <Link href="/tickets/create" className="ml-auto">
          <button className="btn-primary">Create Ticket</button>
        </Link>
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketsList />
      </Suspense>
    </main>
  );
};

export default Tickets;
