import React from "react";
import { createPortal } from "react-dom";

export default function Modal({
  isModalClosed,
  setIsModalClosed,
  header,
  footer,
  children,
}) {
  return createPortal(
    <div
      onClick={() => setIsModalClosed(true)}
      className={`fixed inset-0 flex items-center justify-center bg-black/40 px-4 ${
        isModalClosed ? "hidden" : ""
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-2xl grow rounded-lg bg-white p-4 shadow-lg"
      >
        {header}
        {children}
        {footer}
      </div>
    </div>,
    document.getElementById("portal"),
  );
}
