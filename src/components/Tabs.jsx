/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("About Nagar Palika");
  const Nagar_Palika = "/YogiJi2.avif";

  return (
    <div className="container mx-auto p-4 shadow-lg">
      <h2 className="text-primary font-bold uppercase border-b-2 pb-3 text-2xl text-center mb-4">
        About Nagar Palika
      </h2>
      <div className="flex flex-wrap bg-cyan-950 p-5 rounded-lg mb-4">
        {["About Nagar Palika", "Services", "Projects", "Contact Us"].map((tab) => (
          <button
            key={tab}
            className={`py-1 px-4 mx-2 my-1 rounded ${
              activeTab === tab
                ? "bg-activetabs text-white"
                : "bg-white text-black hover:bg-gray-300"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div>
        {activeTab === "About Nagar Palika" && <AboutContent imageSrc={Nagar_Palika} />}
        {activeTab === "Services" && <ServicesContent />}
        {activeTab === "Projects" && <ProjectsContent />}
        {activeTab === "Contact Us" && <ContactContent />}
      </div>
    </div>
  );
};

const AboutContent = ({ imageSrc }) => (
  <div className="flex flex-wrap -mx-4">
    <div className="w-full lg:w-2/3 px-4">
      <h1 className="text-2xl font-bold mb-4">About Nagar Palika</h1>
      <p>
        Nagar Palika Parishad Noorpur is a body of district Bijnor. Noorpur is
        located at 29.22°N 78.58°E. Its average altitude is 211 meters (692
        feet). Noorpur is situated on the Haridwar-Moradabad state highway. To
        the east of Noorpur lies another town called Sahaspur, to the west is
        Dhampur, to the south is Raja Ka Tajpur and to the north the river
        Ramganga flows, about eight kilometers from the town.
        <br />
        <br />
        As of 2001 India census, Noorpur had a population of 43,985. The
        population consists of 53% males and 47% females. Noorpur has an average
        literacy rate of 68%, higher than the national literacy rate of 59.5%:
        male literacy is 74%, and female literacy is 62%. In Noorpur, 17% of the
        population is under 6 years of age. The population of the city in 1901
        was 10,062.
        <br />
        <br />
        As of 2001 India census, Noorpur had a population of 43,985. The
        population consists of 53% males and 47% females. Noorpur has an average
        literacy rate of 68%, higher than the national literacy rate of 59.5%:
        male literacy is 74%, and female literacy is 62%. In Noorpur, 17% of the
        population is under 6 years of age. The population of the city in 1901
        was 10,062.
      </p>
    </div>
    <div className="w-full lg:w-1/3 px-4">
      <Image
        src={imageSrc}
        alt="About Nagar Palika"
        width={500}
        height={300}
        className="rounded-lg shadow-md"
      />
    </div>
  </div>
);

const ServicesContent = () => <div className="p-10">1.Sanitation and Waste Management: Collection, transportation, and disposal of solid waste, including garbage collection and maintaining cleanliness in public areas.

<br/>
<br/>
2.Roads and Infrastructure Maintenance: Repair and maintenance of roads, streets, bridges, and other public infrastructure.
<br/>
<br/>
3.Water Supply and Sewage: Provision of clean drinking water and management of sewage systems.
<br/>
<br/>
4.Street Lighting: Installation and maintenance of street lights to ensure public safety and visibility during the night.
<br/>
<br/>
5.Parks and Recreation Facilities: Maintenance of public parks, gardens, and recreational areas for the community's use.
<br/>
<br/>
6.Urban Planning and Development: Regulation of land use, issuing building permits, and ensuring adherence to zoning regulations.
<br/>
<br/>
7.Property Tax Collection: Assessment and collection of property taxes to fund municipal services and infrastructure projects.
<br/>
<br/>
8.Public Health Services: Providing basic healthcare facilities, vaccination programs, and disease control measures.
<br/>
<br/>
9.Disaster Management: Preparedness and response to natural disasters and emergencies within the municipality.
<br/>
<br/>
10.Birth and Death Registration: Maintaining records of births and deaths within the jurisdiction for legal and administrative purposes.
<br/>
<br/>
11.Issuing Licenses and Permits: Granting licenses for businesses, trades, and various activities, ensuring compliance with regulations.
<br/>
<br/>
12.Community Development Programs: Initiatives aimed at improving the overall quality of life for residents, such as education programs, skill development, and poverty alleviation measures.</div>;
const ProjectsContent = () => <div>Projects content goes here.</div>;
const ContactContent = () => <div>Contact content goes here.</div>;

export default Tabs;
