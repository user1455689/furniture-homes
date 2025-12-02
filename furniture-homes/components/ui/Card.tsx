// components/ui/Card.tsx
import React from "react";

export const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`rounded-3xl border border-neutral-200 bg-white ${className}`}>
      {children}
    </div>
  );
};
