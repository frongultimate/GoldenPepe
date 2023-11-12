import Image from "next/image";
import React from "react";

export default function Roadmap() {
  return (
    <div className="flex flex-col my-20 mx-60">
      <h1 className="text-white font-russo font-semibold text-3xl items-center text-center">
        ROADMAP
      </h1>
      {/* PHASE1 */}
      <div className="py-14 px-20 bg-secondary-darkblue font-russo text-white rounded-2xl mt-20 flex items-center gap-10">
        <div className="flex flex-col">
          <h1 className="text-xl mb-5">
            Phase 1: Foundation and Conceptualization (Q1 - Q2 2023)
          </h1>
          <div className="text-lg">
            <p className="flex gap-4 items-center">
              <Image
                src="/images/checked.png"
                width={20}
                height={20}
                alt="checked"
              />
              Establish Core Team
            </p>
            <p className="flex gap-4 items-center">
              <Image
                src="/images/checked.png"
                width={20}
                height={20}
                alt="checked"
              />
              EMarket Research and Feasibility Study
            </p>
            <p className="flex gap-4 items-center">
              <Image
                src="/images/checked.png"
                width={20}
                height={20}
                alt="checked"
              />
              Define Core Objectives
            </p>
            <p className="flex gap-4 items-center">
              <Image
                src="/images/checked.png"
                width={20}
                height={20}
                alt="checked"
              />
              Tokenomics and Smart Contract Development
            </p>
          </div>
        </div>
      </div>
      {/* PHASE2 */}
      <div className="py-14 px-20 bg-secondary-darkblue font-russo text-white rounded-2xl mt-20 flex items-center gap-10">
        <div className="flex flex-col">
          <h1 className="text-xl mb-5">
            Phase 2: Development and Prototyping (Q3 - Q4 2023)
          </h1>
          <div className="text-lg">
            <p className="flex gap-4 items-center">
              <Image
                src="/images/checked.png"
                width={20}
                height={20}
                alt="checked"
              />
              Prototype Creation
            </p>
            <p className="flex gap-4 items-center">
              <Image
                src="/images/checked.png"
                width={20}
                height={20}
                alt="checked"
              />
              Security Audits and Penetration Testing
            </p>
            <p className="flex gap-4 items-center">
              <Image
                src="/images/checked.png"
                width={20}
                height={20}
                alt="checked"
              />
              Legal Compliance and Regulatory Review
            </p>
            <p className="flex gap-4 items-center">
              <Image
                src="/images/checked.png"
                width={20}
                height={20}
                alt="checked"
              />
              Community Building and Outreach
            </p>
          </div>
        </div>
      </div>
      {/* PHASE3 */}
      <div className="py-14 px-20 bg-secondary-darkblue font-russo text-white rounded-2xl mt-20 flex items-center gap-10">
        <div className="flex flex-col">
          <h1 className="text-xl mb-5">
            Phase 3: Beta Testing and Deployment (Q1 - Q2 2024)
          </h1>
          <div className="text-lg">
            <p className="flex gap-4 items-center">
              <Image
                src="/images/waiting.png"
                width={20}
                height={20}
                alt="waiting"
              />
              Beta Testing and User Feedback
            </p>
            <p className="flex gap-4 items-center">
              <Image
                src="/images/waiting.png"
                width={20}
                height={20}
                alt="waiting"
              />
              Optimization and Refinement
            </p>
            <p className="flex gap-4 items-center">
              <Image
                src="/images/waiting.png"
                width={20}
                height={20}
                alt="waiting"
              />
              Public Launch and Token Listing
            </p>
          </div>
        </div>
      </div>
      {/* PHASE4 */}
      <div className="py-14 px-20 bg-secondary-darkblue font-russo text-white rounded-2xl mt-20 flex items-center gap-10">
        <div className="flex flex-col">
          <h1 className="text-xl mb-5">
            Phase 4: Growth, Scaling, and Innovation (Q3 - Q4 2024)
          </h1>
          <div className="text-lg">
            <p className="flex gap-4 items-center">
              <Image
                src="/images/waiting.png"
                width={20}
                height={20}
                alt="waiting"
              />
              User Acquisition and Marketing Campaigns
            </p>
            <p className="flex gap-4 items-center">
              <Image
                src="/images/waiting.png"
                width={20}
                height={20}
                alt="waiting"
              />
              Continuous Development and Innovation
            </p>
            <p className="flex gap-4 items-center">
              <Image
                src="/images/waiting.png"
                width={20}
                height={20}
                alt="waiting"
              />
              Exploration of Expansion Opportunities
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
