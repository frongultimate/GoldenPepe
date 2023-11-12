import React from "react";
import Link from "next/link";
import Image from "next/image";
import Roadmap from "./Roadmap";

export default function Navbar() {
  return (
    <div className="flex h-28 items-center px-20 justify-between shadow-lg">
      <div className="flex flex-row cursor-pointer">
        <Image
          className="rounded-full"
          src="/images/pepelogo.png"
          width={80}
          height={80}
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
        <Link className="relative" href="/">
          <div className="nav">Home</div>
        </Link>
        <Link className="relative" href="/howtobuy">
          <div className="nav">How to buy</div>
        </Link>
        <Link className="relative" href="/Roadmap">
          <div className="nav">Roadmap</div>
        </Link>
        <button className="py-2 px-6 border-2 rounded-lg hover:text-black transition-all delay-100">
          BUY TOKEN
        </button>
      </div>
    </div>
  );
}
