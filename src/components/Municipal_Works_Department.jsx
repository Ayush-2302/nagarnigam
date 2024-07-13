import React from "react";

const Municipal_Works_Department = () => {
  const data = [
    {
      division: "लेखा, वेतन व ऑडिट विभाग",
      name: "श्री वीर सिंह",
      position: "लिपिक",
      phone: "9719457179",
    },
    {
      division: "लेखा, वेतन व ऑडिट विभाग",
      name: "श्री मौo नासिर",
      position: "कम्प्यूटर ऑपरेटर",
      phone: "9719670303",
    },
    {
      division: "निर्माण विभाग",
      name: "श्री वीर सिंह",
      position: "लिपिक",
      phone: "9719457179",
    },
    {
      division: "निर्माण विभाग",
      name: "श्री गुरप्रीत सिंह",
      position: "कम्प्यूटर ऑपरेटर",
      phone: "8810008100",
    },
    {
      division: "जलकल विभाग",
      name: "श्री राजवीर सिंह",
      position: "पम्प चालक",
      phone: "7451924951",
    },
    {
      division: "जलकल विभाग",
      name: "श्री दीपक शर्मा",
      position: "कम्प्यूटर ऑपरेटर",
      phone: "9720221212",
    },
    {
      division: "स्वास्थ्य विभाग",
      name: "श्री वीर सिंह",
      position: "लिपिक",
      phone: "9719457179",
    },
    {
      division: "ट्रोगल प्लान्ट संचालन",
      name: "श्री ओमकार",
      position: "संविदा कर्मी",
      phone: "9690512901",
    },
    {
      division: "एमoआईoआरoएफo केंद्र",
      name: "श्री हिमांशु",
      position: "संविदा कर्मी",
      phone: "8191012126",
    },
    {
      division: "सम्पत्ति / कर आरोपण / नामन्तरण विभाग",
      name: "श्री जगवीर सिंह",
      position: "लिपिक",
      phone: "8445299865",
    },
    {
      division: "जन्म-मृत्यु",
      name: "श्री दीपक शर्मा",
      position: "कम्प्यूटर ऑपरेटर",
      phone: "9720221212",
    },
    {
      division: "जन्म-मृत्यु",
      name: "श्री जगवीर सिंह",
      position: "लिपिक",
      phone: "8445299865",
    },
    {
      division: "पथ प्रकाश विभाग",
      name: "श्री साबिर हुसैन",
      position: "लिपिक",
      phone: "9719457179",
    },
    {
      division: "गौशाला संचालन",
      name: "श्री वीर सिंह",
      position: "लिपिक",
      phone: "9719457179",
    },
  ];
  return (
    <div class="container mx-auto p-4">
      <h2 class="text-2xl font-bold mb-4 text-center underline">
        कार्यालय नगरपालिका परिषद नूरपुर (बिजनौर)
      </h2>
      <p class="text-2xl font-medium text-center underline mb-2">नगरपालिका में कार्य विभाग</p>
      <div class="overflow-x-auto">
        <table class="table-auto w-full border-collapse">
          <thead>
            <tr>
              <th class="px-4 py-2 border border-gray-300 text-center font-bold">
                क्र०सं०
              </th>
              <th class="px-4 py-2 border border-gray-300 text-center font-bold">
                विभाग का नाम
              </th>
              <th class="px-4 py-2 border border-gray-300 text-center font-bold">
                कर्मचारी / प्रभारी का नाम पद नाम
              </th>
              <th class="px-4 py-2 border border-gray-300 text-center font-bold">
                पद नाम
              </th>
              <th class="px-4 py-2 border border-gray-300 text-center font-bold">
                मोबाईल नम्बर
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
                <tr key={index}>
                <td class="px-4 py-2 border border-gray-300 text-center">
                {index + 1}
                </td>
                <td class="px-4 py-2 border border-gray-300 text-center">
                {row.division}
                </td>
                <td class="px-4 py-2 border border-gray-300 text-center">
                  {row.name}
                </td>
                <td class="px-4 py-2 border border-gray-300 text-center">
                  {row.position}
                </td>
                <td class="px-4 py-2 border border-gray-300 text-center">
                  {row.phone}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Municipal_Works_Department;
