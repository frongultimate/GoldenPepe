import Image from "next/image";
import React from "react";

export default function Tags1() {
  return (
    <div className="bg-secondary-darkblue h-20 overflow-hidden flex items-center justify-start relative whitespace-nowrap">
      <div className="tags-slide">
        <Image
          src="/images/avalanche.png"
          width={250}
          height={150}
          alt="avalanche"
        />
        <Image
          src="/images/binance.png"
          width={250}
          height={150}
          alt="binance"
        />
        <Image
          src="/images/ethereum.png"
          width={250}
          height={150}
          alt="ethereum"
        />
        <Image src="/images/gnosis.png" width={250} height={150} alt="gnosis" />
        <Image
          src="/images/polygon.png"
          width={250}
          height={150}
          alt="polygon"
        />
        <Image
          src="/images/avalanche.png"
          width={250}
          height={150}
          alt="avalanche"
        />
        <Image
          src="/images/binance.png"
          width={250}
          height={150}
          alt="binance"
        />
        <Image
          src="/images/ethereum.png"
          width={250}
          height={150}
          alt="ethereum"
        />
        <Image src="/images/gnosis.png" width={250} height={150} alt="gnosis" />
        <Image
          src="/images/polygon.png"
          width={250}
          height={150}
          alt="polygon"
        />
      </div>
    </div>
  );
}
