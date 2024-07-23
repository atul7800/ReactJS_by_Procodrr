import React, { useState } from "react";
import viteLogo from "/vite.svg";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";

export default function Header() {
  const [isModalClosed, setIsModalClosed] = useState(true);
  return (
    <header className="flex justify-between px-4 py-4 shadow-md md:px-8">
      <img src={viteLogo} alt="viteLogo" />
      <ul className="flex gap-4">
        <li>
          <NavLink
            className={({ isActive }) => isActive && "text-blue-700 underline"}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => isActive && "text-blue-700 underline"}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => isActive && "text-blue-700 underline"}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        <li>
          <button onClick={() => setIsModalClosed(false)}>Sign In</button>
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
        </li>
      </ul>
    </header>
  );
}
