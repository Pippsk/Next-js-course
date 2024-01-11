"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const addTicket = async (formData) => {
  const ticket = Object.fromEntries(formData);

  const supabase = createServerActionClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  //insert the data

  const { error } = await supabase.from("ticketss").insert({
    ...ticket,
    user_email: session.user.email,
  });

  if (error) {
    throw new Error("Could not add the new ticket!");
  }

  revalidatePath("/tickets");
  redirect("/tickets");
};

export const DeleteTicket = async (id) => {
  const supabase = createServerActionClient({ cookies });

  //delete the data

  const { error } = await supabase.from("tickets").delete().eq("id", id);

  if (error) {
    throw new Error("Could not delete the ticket!");
  }

  revalidatePath("/tickets");
  redirect("/tickets");
};
