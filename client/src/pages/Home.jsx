import React from "react";

const Home = () => {
  const Data = [
    {
      id: 1,
      img: "http://dummyimage.com/217x100.png/5fa2dd/ffffff",
      name: "Maria",
      createdAt: "7/1/2024",
      role: "Reviewer",
      status: "Inactive",
    },
    {
      id: 2,
      img: "http://dummyimage.com/168x100.png/dddddd/000000",
      name: "Jessamyn",
      createdAt: "2/19/2025",
      role: "Publisher",
      status: "Active",
    },
    {
      id: 3,
      img: "http://dummyimage.com/162x100.png/dddddd/000000",
      name: "Catlaina",
      createdAt: "6/10/2024",
      role: "Publisher",
      status: "Active",
    },
    {
      id: 4,
      img: "http://dummyimage.com/155x100.png/dddddd/000000",
      name: "Stevana",
      createdAt: "12/7/2024",
      role: "Moderator",
      status: "Suspended",
    },
    {
      id: 5,
      img: "http://dummyimage.com/201x100.png/ff4444/ffffff",
      name: "Briana",
      createdAt: "11/21/2024",
      role: "Admin",
      status: "Suspended",
    },
    {
      id: 6,
      img: "http://dummyimage.com/179x100.png/cc0000/ffffff",
      name: "Lishe",
      createdAt: "6/27/2024",
      role: "Publisher",
      status: "Suspended",
    },
    {
      id: 7,
      img: "http://dummyimage.com/209x100.png/5fa2dd/ffffff",
      name: "Coraline",
      createdAt: "11/21/2024",
      role: "Moderator",
      status: "Inactive",
    },
    {
      id: 8,
      img: "http://dummyimage.com/143x100.png/cc0000/ffffff",
      name: "Adrienne",
      createdAt: "6/18/2024",
      role: "Admin",
      status: "Active",
    },
    {
      id: 9,
      img: "http://dummyimage.com/249x100.png/ff4444/ffffff",
      name: "Natty",
      createdAt: "9/26/2024",
      role: "Moderator",
      status: "Inactive",
    },
    {
      id: 10,
      img: "http://dummyimage.com/174x100.png/5fa2dd/ffffff",
      name: "Lamar",
      createdAt: "5/30/2025",
      role: "Admin",
      status: "Active",
    },
  ];

  return (
    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
        <table class="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                #
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Name
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Created At
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Role
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Status
              </th>
              <th className="py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {Data.map((data, index) => (
              <tr key={index}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div className="flex items-center">
                    <div>
                      <div className="text-sm leading-5 text-gray-800">
                        {data.id}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 w-10 h-10">
                      <img
                        class="w-full h-full rounded-full"
                        src={data.img}
                        alt=""
                      />
                    </div>
                    <div class="ml-3">
                      <p class="text-gray-900 whitespace-no-wrap">
                        {data.name}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {data.createdAt}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {data.role}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span
                      aria-hidden=""
                      className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                    />
                    <span className="relative">{data.status}</span>
                  </span>
                </td>
                <td class="py-5 border-b border-gray-200 bg-white text-sm">
                  <button
                    type="button"
                    class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded-full focus:outline-none focus:shadow-outline"
                  >
                    *
                  </button>
                  <button
                    type="button"
                    class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded-full focus:outline-none focus:shadow-outline"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
