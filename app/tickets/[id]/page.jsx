import Loading from "@/app/loading";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";

export const dynamicParams = true;

export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:4000/tickets");

  const tickets = await res.json();

  return tickets.map((ticket) => ({
    id: ticket.id,
  }));
};

const getTicket = async (id) => {
  const response = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    return notFound();
  }
  return response.json();
};

const TicketDetail = async ({ params }) => {
  const ticket = await getTicket(params.id);

  return (
    <main>
      <nav>
        <h2>Ticket details</h2>
      </nav>

      <Suspense fallback={<Loading />}>
        <div className="card">
          <h3>{ticket.title}</h3>
          <small>Created by {ticket.user_email}</small>
          <p>{ticket.body}</p>
          <div className={`pill ${ticket.priority}`}>
            {ticket.priority} priority
          </div>
        </div>
      </Suspense>
    </main>
  );
};

export default TicketDetail;
