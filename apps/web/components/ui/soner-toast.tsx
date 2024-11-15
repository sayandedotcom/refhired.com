"use client";

import { X } from "lucide-react";
import { toast } from "sonner";

import { Alert } from "@referrer/ui";

import { Icons } from "../icons/icons";

type severityType = "info" | "success" | "warning" | "error" | "neutral";

export const sonerToast = ({
  severity,
  title,
  message,
  actions,
}: {
  severity: severityType;
  title: React.ReactNode;
  message?: React.ReactNode;
  actions?: React.ReactNode;
}) =>
  toast.custom((t) => (
    <Alert
      className="w-full"
      severity={severity ? severity : "info"}
      title={title}
      message={message}
      actions={
        actions ?? (
          <button onClick={() => toast.dismiss(t)}>
            <X className="h-4 w-4" />
          </button>
        )
      }
    />
  ));

export const sonerToastPromise = ({ promise }) =>
  toast.promise(promise, {
    loading: <Icons.spinner />,
    success: (data) => {
      return `${data}`;
    },
    error: "Error",
  });

export const sonerToastCustom = ({ node }) => toast(node);
