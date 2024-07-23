import React, { useState } from "react";
import Modal from "./Modal";

export default function Contact() {
  const [isModalClosed, setIsModalClosed] = useState(true);
  return (
    <>
      <h1 className="text-xl">
        Connect with us on{" "}
        <a
          className="text-blue-600 hover:text-blue-700"
          href="https://www.youtube.com/@procodrr"
          target="_blank"
        >
          YouTube
        </a>
      </h1>
      <button onClick={() => setIsModalClosed(false)}>Open popup</button>
      <Modal
        isModalClosed={isModalClosed}
        setIsModalClosed={setIsModalClosed}
        header={<div className="text-xl font-bold">Sign In</div>}
        footer={
          <div className="flex justify-end gap-4">
            <button
              onClick={() => setIsModalClosed(true)}
              className="rounded-md bg-gray-300 px-6 py-2 font-semibold hover:bg-gray-400/80 active:bg-gray-400/60"
            >
              Cancel
            </button>
            <button
              onClick={() => setIsModalClosed(true)}
              className="rounded-md bg-blue-300 px-6 py-2 font-semibold hover:bg-blue-400/80 active:bg-blue-400/60"
            >
              Sign In
            </button>
          </div>
        }
      >
        <div className="-mx-4 my-3 flex flex-wrap gap-4 border-y px-4 py-4">
          <input
            placeholder="Username"
            className="grow rounded border border-gray-600 px-2 py-1"
            type="text"
          />
          <input
            placeholder="Password"
            className="grow rounded border border-gray-600 px-2 py-1"
            type="password"
          />
        </div>
      </Modal>
    </>
  );
}
