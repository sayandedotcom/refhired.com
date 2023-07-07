import type { ReactNode } from "react";
import { forwardRef } from "react";

import clsx from "clsx";
import { AlertTriangle, CheckCircle2, Info, XCircle } from "lucide-react";
import type { IconType } from "react-icons";

export interface AlertProps {
  title?: ReactNode;
  message?: ReactNode;
  actions?: ReactNode;
  className?: string;
  iconClassName?: string;
  severity: "success" | "warning" | "error" | "info" | "neutral";
  CustomIcon?: IconType;
  customIconColor?: string;
}
export const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const { severity, iconClassName, CustomIcon, customIconColor } = props;

  return (
    <div
      ref={ref}
      className={clsx(
        "rounded-md  p-3",
        props.className,
        severity === "error" && "bg-red-100 text-red-900 dark:bg-red-900 dark:text-red-200",
        severity === "warning" && "bg-[#fceed8] text-[#844932] dark:bg-orange-900 dark:text-orange-200",
        severity === "info" && "bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-200",
        severity === "success" && "bg-green-100 text-green-900 dark:bg-green-900 dark:text-green-200",
        severity === "neutral" && "bg-ring"
      )}>
      <div className="relative flex md:flex-row">
        {CustomIcon ? (
          <div className="flex-shrink-0">
            <CustomIcon
              aria-hidden="true"
              className={clsx(`h-5 w-5`, iconClassName, customIconColor ?? "text-default")}
            />
          </div>
        ) : (
          <div className="flex-shrink-0">
            {severity === "error" && (
              <XCircle
                className={clsx("h-5 w-5 text-red-900 dark:text-red-200", iconClassName)}
                aria-hidden="true"
              />
            )}
            {severity === "warning" && (
              <AlertTriangle
                className={clsx("text-attention h-5 w-5 dark:text-orange-200", iconClassName)}
                aria-hidden="true"
              />
            )}
            {severity === "info" && (
              <Info
                className={clsx("h-5 w-5 text-blue-900 dark:text-blue-200", iconClassName)}
                aria-hidden="true"
              />
            )}
            {severity === "neutral" && (
              <Info
                className={clsx("text-default h-5 w-5 fill-transparent", iconClassName)}
                aria-hidden="true"
              />
            )}
            {severity === "success" && (
              <CheckCircle2
                className={clsx("text-default h-5 w-5 fill-muted", iconClassName)}
                aria-hidden="true"
              />
            )}
          </div>
        )}
        <div className="flex flex-grow flex-col sm:flex-row">
          <div className="ml-3 ">
            <h3 className="text-sm font-medium">{props.title}</h3>
            <div className="text-sm">{props.message}</div>
          </div>
          {props.actions && <div className="ml-auto mt-2 text-sm sm:mt-0 md:relative">{props.actions}</div>}
        </div>
      </div>
    </div>
  );
});

Alert.displayName = "Alert";
