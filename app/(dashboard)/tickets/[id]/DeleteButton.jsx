"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { TiDelete } from "react-icons/ti";
import { useTransition } from "react";
import { DeleteTicket } from "../actions";

const DeleteButton = ({ id }) => {
  const [isPending, startTransition] = useTransition();

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    setIsLoading(true);

    const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
      method: "DELETE",
    });

    const json = await res.json();

    if (json.error) {
      console.log(error);
      setIsLoading(false);
    }

    if (!json.error) {
      router.refresh();
      router.push("/tickets");
    }
  };

  return (
    <button
      className="btn-primary"
      onClick={() => startTransition(() => DeleteTicket(id))}
      disabled={isPending}
    >
      {isPending && (
        <>
          <TiDelete />
          Deleting...
        </>
      )}

      {!isPending && (
        <>
          <TiDelete />
          Delete ticket
        </>
      )}
    </button>
  );
};

export default DeleteButton;
