import Link from "next/link";

export default async function User({ params }) {
  const { companyId } = await params;
  const company = await getCompanyDetails(companyId);
  const userOfCurrentCompany = await getUserOfCurrentCompany(companyId);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Company Details Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="bg-indigo-600 px-6 py-4">
            <h1 className="text-2xl font-bold text-white">Company Details</h1>
          </div>

          <div className="p-6">
            {/* Company Logo/Initial */}
            <div
              className="w-20 h-20 bg-indigo-100 rounded-full mb-6 flex items-center 
                       justify-center text-indigo-600 font-bold text-2xl"
            >
              {company.companyName.charAt(0)}
            </div>

            {/* Company Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-b pb-3">
                <p className="text-sm text-gray-500 mb-1">Company Name</p>
                <p className="text-lg font-semibold text-gray-800">
                  {company.companyName}
                </p>
              </div>

              <div className="border-b pb-3">
                <p className="text-sm text-gray-500 mb-1">Address</p>
                <p className="text-lg font-semibold text-gray-800">
                  {company.address}
                </p>
              </div>

              <div className="border-b pb-3">
                <p className="text-sm text-gray-500 mb-1">Email</p>
                <p className="text-lg font-semibold text-gray-800 break-all">
                  {company.email}
                </p>
              </div>

              <div className="border-b pb-3">
                <p className="text-sm text-gray-500 mb-1">Mobile</p>
                <p className="text-lg font-semibold text-gray-800">
                  {company.mobileNumber}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Users List Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-indigo-600 px-6 py-4">
            <h2 className="text-xl font-bold text-white">
              Users of {company.companyName}
            </h2>
          </div>

          <div className="p-6">
            <div className="grid gap-4 md:grid-cols-2">
              {userOfCurrentCompany.map((user) => (
                <Link
                  href={`/users/${user.id}`}
                  key={user.id}
                  className="group block p-4 rounded-lg border border-gray-200 
                        hover:border-indigo-500 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center space-x-4">
                    {/* User Avatar */}
                    <div
                      className="w-10 h-10 bg-indigo-100 rounded-full flex items-center 
                               justify-center text-indigo-600 font-semibold"
                    >
                      {user.name.charAt(0)}
                    </div>

                    <div>
                      <h3
                        className="text-lg font-semibold text-gray-700 
                                group-hover:text-indigo-600 transition-colors duration-200"
                      >
                        {user.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        User ID: {user.id}
                      </p>
                    </div>

                    {/* Arrow Icon */}
                    <div className="ml-auto">
                      <svg
                        className="w-5 h-5 text-gray-400 group-hover:text-indigo-500 
                              transform group-hover:translate-x-1 transition-all duration-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

async function getCompanyDetails(companyId) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/companies`);
  const { companies } = await res.json();
  const company = companies.find((company) => company.id === companyId);
  return company;
}

async function getUserOfCurrentCompany(companyId) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users`);
  const { users } = await res.json();
  const filteredUsers = await users.filter(
    (user) => user.companyId === companyId
  );
  return filteredUsers;
}
