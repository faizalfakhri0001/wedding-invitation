import * as React from "react";
import { cn } from "@/lib/utils";

const Select = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={cn(
          "flex h-11 w-full appearance-none rounded-2xl border border-slate-200/80 bg-white/90 px-4 pr-10 text-base text-slate-800 shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300/70 focus-visible:ring-offset-2",
          className,
        )}
        {...props}
      >
        {children}
      </select>
    );
  },
);
Select.displayName = "Select";

const SelectWrapper = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("relative w-full", className)}
      {...props}
    >
      {children}
      <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.585l3.71-3.354a.75.75 0 111.02 1.1l-4.222 3.818a.75.75 0 01-1.016 0L5.25 8.29a.75.75 0 01-.02-1.08z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </div>
  ),
);
SelectWrapper.displayName = "SelectWrapper";

export { Select, SelectWrapper };
