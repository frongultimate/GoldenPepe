import React from "react";

export default function Heroes() {
  return (
    <div className="text-white px-20 pt-20">
      <div className="flex flex-row gap-20">
        <div className="flex flex-col">
          <h1 className="text-3xl font-russo mb-4 ml-4">$GoldenPepe</h1>
          <p className="font-russo mb-16 text-xl">
            In the world of cryptocurrency, innovation is the driving force
            behind groundbreaking projects. One such project that has been
            making waves in the digital realm is the $GoldenPepe token. This
            unique token is set to revolutionize the way we interact with web
            applications , offering a range of benefits and opportunities for
            both developers and users alike.
          </p>
          <div className="flex gap-8 ml-5 items-center">
            <img
              className="w-12 h-12 cursor-pointer"
              src="/images/twitter.png"
              alt="Th!s for twitter"
            />
            <img
              className="w-12 h-12 cursor-pointer"
              src="/images/telegram.png"
              alt="Th!s for telegram"
            />
            <img
              className="w-12 h-12 cursor-pointer"
              src="/images/uniswap_icon.png"
              alt="Th!s for uniswap"
            />
          </div>
        </div>
        <div>
          <img className="w-[120rem]" src="/images/pepeheroes.png" alt="" />
        </div>
      </div>
      <p className="font-russo font-medium text-2xl text-center my-16">
        Contract Address : 0x2534415c415095A657B28a1F4Bc1A2477fD8805b
      </p>
    </div>
  );
}
