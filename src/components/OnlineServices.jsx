"use client";
import Link from "next/link";
import React, { useState } from "react";

const OnlineServices = () => {
  const tabs = [
    { name: "All Content", content: <AllContent /> },
    { name: "Citizen Centric", content: <CitizenCentric /> },
    { name: "Licensing", content: <Licensing /> },
    { name: "Public Utilities", content: <PublicUtilities /> },
    { name: "Others", content: <Others /> },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  function AllContent() {
    return (
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { href: "/intra-dashboard-login", label: "Intra Dashboard Login" },
            {
              href: "/form-process-engine",
              label: "Form Process Engine Login (FE)",
            },
            { href: "/mobile-app", label: "Mobile App" },
            { href: "/property-tax", label: "Property Tax (PTR)" },
            {
              href: "/birth-death-registration",
              label: "Registration of Birth & Death (RBD)",
            },
            {
              href: "/social-function-permission",
              label:
                "Permission for Social Function (Hotel, Motel, Farmhouse & Other Areas)",
            },
            {
              href: "/community-hall-booking",
              label: "Community Hall Booking",
            },
            { href: "/health-trade-licences", label: "Health Trade Licences" },
            { href: "/hackney-carriage", label: "Hackney Carriage" },
            { href: "/teh-bazari", label: "Teh Bazari" },
            { href: "/hawking-license", label: "Hawking License" },
            {
              href: "/cremation-burial-ground",
              label: "Cremation / Burial Ground",
            },
          ].map((item, index) => (
            <Link href={item.href} key={index} legacyBehavior>
              <Link href="#" className="block p-4 bg-activetabs rounded-lg shadow hover:bg-tablist transition duration-300">
                <div className="text-center  text-xl font-semibold py-4 text-white">
                  {item.label}
                </div>
              </Link>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  function CitizenCentric() {
    return (
      <div>
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                href: "/intra-dashboard-login",
                label: "Intra Dashboard Login",
              },
              {
                href: "/form-process-engine",
                label: "Form Process Engine Login (FE)",
              },
              { href: "/mobile-app", label: "Mobile App" },
              { href: "/property-tax", label: "Property Tax (PTR)" },
              {
                href: "/birth-death-registration",
                label: "Registration of Birth & Death (RBD)",
              },
            ].map((item, index) => (
              <Link href={item.href} key={index} legacyBehavior>
                <Link href="#" className="block p-4 bg-activetabs rounded-lg shadow hover:bg-tablist transition duration-300">
                  <div className="text-center text-xl font-semibold py-4 text-white">
                    {item.label}
                  </div>
                </Link>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  function Licensing() {
    return (
      <div>
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                href: "/intra-dashboard-login",
                label: "Intra Dashboard Login",
              },
              {
                href: "/form-process-engine",
                label: "Form Process Engine Login (FE)",
              },
              { href: "/mobile-app", label: "Mobile App" },
              { href: "/property-tax", label: "Property Tax (PTR)" },
              {
                href: "/birth-death-registration",
                label: "Registration of Birth & Death (RBD)",
              },
              {
                href: "/social-function-permission",
                label:
                  "Permission for Social Function (Hotel, Motel, Farmhouse & Other Areas)",
              },
            ].map((item, index) => (
              <Link href={item.href} key={index} legacyBehavior>
                <Link href="#" className="block p-4 bg-activetabs rounded-lg shadow hover:bg-tablist transition duration-300">
                  <div className="text-center text-xl font-semibold py-4 text-white">
                    {item.label}
                  </div>
                </Link>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  function PublicUtilities() {
    return (
      <div>
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                href: "/intra-dashboard-login",
                label: "Intra Dashboard Login",
              },
              {
                href: "/form-process-engine",
                label: "Form Process Engine Login (FE)",
              },
              { href: "/mobile-app", label: "Mobile App" },
              { href: "/property-tax", label: "Property Tax (PTR)" },
              {
                href: "/birth-death-registration",
                label: "Registration of Birth & Death (RBD)",
              },
              {
                href: "/social-function-permission",
                label:
                  "Permission for Social Function (Hotel, Motel, Farmhouse & Other Areas)",
              },
              {
                href: "/community-hall-booking",
                label: "Community Hall Booking",
              },
              {
                href: "/health-trade-licences",
                label: "Health Trade Licences",
              },
            ].map((item, index) => (
              <Link href={item.href} key={index} legacyBehavior>
                <Link href="#" className="block p-4 bg-activetabs rounded-lg shadow hover:bg-tablist transition duration-300">
                  <div className="text-center text-xl font-semibold py-4 text-white">
                    {item.label}
                  </div>
                </Link>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  function Others() {
    return (
      <div>
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: "/hackney-carriage", label: "Hackney Carriage" },
              { href: "/teh-bazari", label: "Teh Bazari" },
              { href: "/hawking-license", label: "Hawking License" },
              {
                href: "/cremation-burial-ground",
                label: "Cremation / Burial Ground",
              },
            ].map((item, index) => (
              <Link href={item.href} key={index} legacyBehavior>
                <Link href="#" className="block p-4 bg-activetabs rounded-lg shadow hover:bg-tablist transition duration-300">
                  <div className="text-center text-xl font-semibold py-4 text-white">
                    {item.label}
                  </div>
                </Link>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 border-b-2 border-gray-500">
          <div className="text-center py-2 text-2xl font-bold text-primary mt-5 uppercase">
            Online Services
          </div>
        </div>
      </div>
      <div className="w-full">
        {/* <div className=""> */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-center mb-4">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                className={`px-4 py-2 rounded ${
                  activeTab === tab.name
                    ? "bg-activetabs text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setActiveTab(tab.name)}
              >
                {tab.name}
              </button>
            ))}
          </div>
          <div className="p-4 border rounded">
            {tabs.find((tab) => tab.name === activeTab).content}
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default OnlineServices;
