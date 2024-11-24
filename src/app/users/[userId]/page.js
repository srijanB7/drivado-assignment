export default async function User({ params }) {
    const { userId } = await params;
    const res = await fetch(`https://673736a9aafa2ef222330e54.mockapi.io/users`);
    const users = await res.json();
    const user = users.find((user) => user.id === userId);

    
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {/* Header */}
            <div className="bg-blue-600 px-6 py-4">
              <h1 className="text-2xl font-bold text-white">User Detail</h1>
            </div>
  
            {/* User Info Card */}
            <div className="p-6">
              {/* User Avatar */}
              <div className="w-20 h-20 bg-blue-100 rounded-full mb-6 flex items-center 
                          justify-center text-blue-600 font-bold text-2xl">
                {user.name.charAt(0)}
              </div>
  
              {/* User Details */}
              <div className="space-y-4">
                <div className="border-b pb-3">
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="text-lg font-semibold text-gray-800">{user.name}</p>
                </div>
  
                <div className="border-b pb-3">
                  <p className="text-sm text-gray-500">Mobile Number</p>
                  <p className="text-lg font-semibold text-gray-800">{user.mobileNumber}</p>
                </div>
  
                <div className="border-b pb-3">
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-lg font-semibold text-gray-800 break-all">{user.email}</p>
                </div>
  
                <div className="border-b pb-3">
                  <p className="text-sm text-gray-500">Company ID</p>
                  <p className="text-lg font-semibold text-gray-800">{user.companyId}</p>
                </div>
  
                <div>
                  <p className="text-sm text-gray-500">User ID</p>
                  <p className="text-lg font-semibold text-gray-800">{user.id}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }