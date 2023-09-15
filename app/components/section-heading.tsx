import React from "react";

export default function SectionHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="text-xl text-gray-800 font-semibold capitalize mb-8 underline underline-offset-[6px] decoration-4">
      {children}
    </h2>
  );
}
