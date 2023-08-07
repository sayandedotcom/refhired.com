"use client";

import toast from "react-hot-toast";

import { Alert } from "@referrer/ui";

import { toastType } from "@/types/toast";

const TOAST_VISIBLE_DURATION = 3000;

export const toastMessage = ({ children, type, title, message, position, duration }: toastType) =>
  toast.custom(
    (t) =>
      children ? (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } pointer-events-auto flex w-full max-w-md rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5`}>
          {children}
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="flex w-full items-center justify-center rounded-none rounded-r-lg border border-transparent p-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              Close
            </button>
          </div>
        </div>
      ) : (
        <Alert severity={type} title={title} message={message} />
      ),
    {
      position: position ? position : "top-center",
      duration: duration ? duration : TOAST_VISIBLE_DURATION,
    }
  );
