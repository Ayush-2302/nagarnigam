"use client";
import { newContext } from "@/context/contextFun";
import { Html5QrcodeScanner } from "html5-qrcode";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";

const Page = () => {
  const { garbageUser, load } = useContext(newContext);
  const [result, setResult] = useState(null);

  useEffect(() => {
    load();

    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        qrbox: {
          width: 250,
          height: 250,
        },
        fps: 5,
      },
      []
    );
    scanner.render(success, error);
    function success(result) {
      scanner.clear();
      setResult(result);
    }
    function error(err) {
      console.warn(err);
    }
  }, []);

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        {garbageUser && (
          <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
            <h2 className="mb-6 text-2xl font-bold text-center">
              Garbage Collector Dashboard
            </h2>
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 w-1/2 border-b-2 border-gray-200 border-r-2 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Field
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(garbageUser).map(([key, value]) => (
                  <tr key={key} className="hover:bg-gray-50">
                    <td className="px-5 py-4 border-b border-gray-200 border-r-2 bg-white text-sm font-medium text-gray-800">
                      {key
                        .replace(/_/g, " ")
                        .replace(/\b\w/g, (char) => char.toUpperCase())}
                    </td>
                    <td className="px-5 py-4 border-b border-gray-200 bg-white text-sm text-gray-800">
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center justify-center  bg-slate-100 min-h-screen">
        <h1 className="text-4xl font-bold mb-8 text-gray-700">
          QR Code Scanning
        </h1>
        <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6">
          {result ? (
            <div className="p-6 bg-green-50 rounded-lg shadow-md text-center">
              <p className="text-2xl font-semibold text-green-600 mb-4">
                Success!
              </p>
              <Link
                href={"http://" + result}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800 transition-colors duration-300"
              >
                {result}
              </Link>
            </div>
          ) : (
            <div
              id="reader"
              className="w-full h-64 bg-gray-200  rounded-lg flex items-center justify-center"
            >
              <p className="text-gray-500">Loading QR Code Scanner...</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
