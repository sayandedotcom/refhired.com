"use client";

import { toastType } from "@/types/toast";
import toast from "react-hot-toast";

import { Alert } from "@referrer/ui";

const TOAST_VISIBLE_DURATION = 3000;

export const toastMessage = ({ children, type, title, message, position, duration }: toastType) =>
  toast.custom(
    (t) =>
      children ? (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}>
          {children}
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
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
