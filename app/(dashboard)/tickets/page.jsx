import React, { Suspense } from "react";
import TicketsList from "./TicketsList";
import Loading from "../loading";

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
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketsList />
      </Suspense>
    </main>
  );
};

export default Tickets;
