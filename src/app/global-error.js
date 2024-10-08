"use client";

import { useEffect } from "react";
import ErrorContent from "@/components/error/ErrorContent";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <ErrorContent onClick={() => reset()} />;
}
