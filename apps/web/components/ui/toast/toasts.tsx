"use client";

import { toastType } from "@/types/toast";
import toast from "react-hot-toast";

import { Alert } from "@referrer/ui";

const TOAST_VISIBLE_DURATION = 3000;

export const toastMessage = ({ children, type, title, message, position, duration }: toastType) =>
  toast.custom((t) => <>{children}</> ?? <Alert severity={type} title={title} message={message} />, {
    position: position ? position : "top-center",
    duration: duration ? duration : TOAST_VISIBLE_DURATION,
  });
