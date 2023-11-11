import Image from "next/image";
import React from "react";

export default function Howtobuy() {
  return (
    <div className="pt-20 flex flex-col">
      <h1 className="text-white font-russo font-semibold text-3xl items-center text-center">
        HOW TO BUY
      </h1>
      <div className="w-full">
        <div className=" py-14 px-20 my-20 mx-60 bg-secondary-darkblue font-russo text-white rounded-2xl mt-20 flex items-center gap-10">
          <Image className="w-64" src="/images/metamask.png" alt="" />
          <div className="flex flex-col gap-10">
            <h1 className="text-2xl border-b-2 border-white">
              Create your wallet
            </h1>
            <p className="text-lg">
              Create a Wallet download metamask or your wallet of choice from
              the app store or google play store for free. Desktop users,
              download the google chrome extension by going to metamask.io.
            </p>
          </div>
        </div>

        <div className="py-10 px-20 my-20 mx-60 bg-secondary-darkblue font-russo text-white rounded-2xl mt-20 flex items-center gap-10">
          <Image className="w-64" src="/images/ethereum-logo.png" alt="" />
          <div className="flex flex-col gap-10">
            <h1 className="text-2xl border-b-2 border-white">Get Some ETH</h1>
            <p className="text-lg">
              Create a Wallet download metamask or your wallet of choice from
              the app store or google play store for free. Desktop users,
              download the google chrome extension by going to metamask.io.
            </p>
          </div>
        </div>

        <div className="py-10 px-20 my-20 mx-60 bg-secondary-darkblue font-russo text-white rounded-2xl mt-20 flex items-center gap-10">
          <Image className="w-64" src="/images/uniswap-logo.png" alt="" />
          <div className="flex flex-col gap-10">
            <h1 className="text-2xl border-b-2 border-white">Go to Uniswap</h1>
            <p className="text-lg">
              Create a Wallet download metamask or your wallet of choice from
              the app store or google play store for free. Desktop users,
              download the google chrome extension by going to metamask.io.
            </p>
          </div>
        </div>

        <div className="py-20 px-20 my-20 mx-60 bg-secondary-darkblue font-russo text-white rounded-2xl mt-20 flex items-center gap-10">
          <Image className="w-64" src="/images/switch-ethereum.png" alt="" />
          <div className="flex flex-col gap-10">
            <h1 className="text-2xl border-b-2 border-white">
              Switch ETH for $GoldenPepe
            </h1>
            <p className="text-lg">
              Create a Wallet download metamask or your wallet of choice from
              the app store or google play store for free. Desktop users,
              download the google chrome extension by going to metamask.io.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
