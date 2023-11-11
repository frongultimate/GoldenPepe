import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex h-28 items-center px-20 justify-between shadow-lg">
      <div className="flex flex-row">
        <img
          className="w-20 h-20 rounded-full"
          src="/images/pepelogo.png"
          alt="th!s for logo"
        />
        <div className="flex flex-col mt-5">
          <h1 className="text-xl font-medium text-white font-russo pl-5">
            GOLDEN
          </h1>
          <h1 className="text-xl font-medium text-white font-russo pl-5">
            PEPE
          </h1>
        </div>
      </div>
      <div className="flex flex-row text-white  gap-10 font-russo text-lg items-center">
        <Link href="/">Home</Link>
        <Link href="/">How to buy</Link>
        <Link href="/">Roadmap</Link>
        <button className="py-2 px-6 border-2 rounded-lg hover:text-black transition-all delay-100">
          BUY TOKEN
        </button>
      </div>
    </div>
  );
}
