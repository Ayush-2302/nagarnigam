"use client";
import fetchUserDetails from "@/helper/apiservices/fetchUserDetails";
import QRCode from "qrcode.react";
import React, { useEffect, useState } from "react";

const UserComponent = ({ params }) => {
  const [userDetails, setUserDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const result = await fetchUserDetails(params.userId);
        setUserDetails(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (params.userId) {
      getUserDetails();
    }
  }, [params.userId]);

  console.log(userDetails);

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="flex flex-col items-center py-10">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
        <h1 className="text-2xl font-bold text-center bg-cyan-950 text-white py-4">
          User Details
        </h1>
        {userDetails.result && (
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
              {Object.entries(userDetails.result).map(([key, value]) => (
                <tr key={key} className="hover:bg-gray-50">
                  <td className="px-5 py-4 border-b border-gray-200 border-r-2 bg-white text-sm font-medium text-gray-800">
                    {key
                      .replace(/_/g, " ")
                      .replace(/\b\w/g, (char) => char.toUpperCase())}
                  </td>
                  <td className="px-5 py-4 border-b border-gray-200 bg-white text-sm text-gray-800">
                    {value ? value : "null"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="modal bg-white rounded-lg p-8 max-w-sm md:max-w-md lg:max-w-lg relative shadow-lg mt-5">
        <div className="flex flex-col items-center">
          <QRCode
            // value={(JSON.stringify(userDetails.result), (<Login />))}
            value={"https://nagarnigam-peach.vercel.app/login"}
            size={256}
            className="mb-4"
          />
          <p className="text-gray-700 text-center">
            Scan the QR code to visit the link
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserComponent;
