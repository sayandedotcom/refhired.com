"use client";

import toast from "react-hot-toast";
import { Alert } from "@referrer/ui";

const TOAST_VISIBLE_DURATION = 3000;

export const customToast = (
  type: "success" | "warning" | "error" | "info" | "neutral",
  title: string,
  message?: string,
  position?: "top-center" | "top-right" | "top-left" | "bottom-center" | "bottom-right" | "bottom-left",
  duration?: number
) =>
  toast.custom((t) => <Alert severity={type} title={title} message={message} />, {
    position: position ? position : "top-center",
    duration: duration ? duration : TOAST_VISIBLE_DURATION,
  });
