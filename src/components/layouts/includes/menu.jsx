import React from "react";

export default function Drawer({ children, isOpen, setIsOpen }) {
  return (
    <main
      className={
        "fixed overflow-hidden z-10 inset-0 transform ease-in-out" +
        (isOpen
          ? "transition-opacity opacity-100 duration-500 translate-x-0"
          : "transition-all delay-200 opacity-0 duration-500 translate-x-full")
      }
    >
      <section
        className={
          "w-screen max-w-lg right-0 absolute bg-zinc-900 h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform" +
          (isOpen ? "translate-x-0" : "translate-x-full")
        }
      >
        {children}
      </section>
      <section
        className="w-screen h-full cursor-pointer"
        onClick={() => { setIsOpen(false) }}
      />
    </main>
  );
}
