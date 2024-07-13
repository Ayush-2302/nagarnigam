import Image from "next/image";
import React from "react";

const Departments = () => {
  const departments = [
    {
      id: 1,
      name: "स्थानीय निकाय निदेशालय ",
      description: "Responsible for city infrastructure and maintenance.",
      imageUrl:"/authorities.png",
    },
    {
      id: 2,
      name: "Health & Medical Department",
      description: "Ensures public health and cleanliness in the city.",
      imageUrl:"/Medical and Hopistal.png",
    },
    {
      id: 3,
      name: "Transport & Traffic Department",
      description: "Plans and regulates the city's growth and development.",
      imageUrl:"/transport.png",
    },
    {
      id: 4,
      name: "Finance & Legal Department",
      description: "Handles financial matters and administrative functions.",
      imageUrl:"/Finance and legal department.png",
    },
    {
      id: 5,
      name: "Education",
      description: "Oversees educational facilities and services.",
      imageUrl:"/Education.png",
    },
    {
      id: 6,
      name: "Arts & Culture Department",
      description: "Manages public transport and traffic regulations.",
      imageUrl:"/art and culture.png",
    },
    {
      id: 7,
      name: "Housing & Land Department",
      description: "Ensures clean and safe water supply to the city.",
      imageUrl:"/housing and land department.png",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 uppercase text-primary text-center border-b-2 pb-4">Departments in Nagar Nigam</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((department) => (
          <div
            key={department.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={department.imageUrl}
              alt={department.name}
              className="w-full h-72 object-cover"
              width={900}
              height={900}
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{department.name}</h2>
              <p className="text-gray-600">{department.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departments;
