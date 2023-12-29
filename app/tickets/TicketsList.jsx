import Link from "next/link";
import React from "react";

const getTickets = async () => {
  const response = await fetch("http://localhost:4000/tickets", {
    next: {
      revalidate: 0,
    },
  });
  return response.json();
};

const TicketsList = async () => {
  const tickets = await getTickets();
  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card">
          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </Link>
        </div>
      ))}
      {tickets.length === 0 && (
        <p className="text-center"> There are no open tickets!</p>
      )}
    </>
  );
};

export default TicketsList;
