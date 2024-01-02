import { NextResponse } from "next/server";

const GET = async () => {
  const res = await fetch("http://localhost:4000/tickets");

  const tickets = await res.json();

  return NextResponse.json(tickets, {
    status: 200,
  });
};
