"use client";

import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button className="btn-primary" disabled={pending}>
      {pending && <span>Submiting...</span>}
      {!pending && <span>Submit</span>}
    </button>
  );
};

export default SubmitButton;
