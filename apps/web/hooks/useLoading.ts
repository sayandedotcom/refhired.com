import { useState } from "react";

export const useLoading = () => {
  const [loadingValue, setLoadingValue] = useState("");

  return { loadingValue, setLoadingValue };
};
