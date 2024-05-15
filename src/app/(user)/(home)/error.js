"use client";

import ErrorContent from "@/components/error/ErrorContent";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <ErrorContent onClick={() => reset()} />;
}
