import Link from "next/link";

export default async function UserList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users`);
  const { users } = await res.json();
  console.log(users);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-4">
          List of Users
        </h1>

        <div className="grid gap-4 md:grid-cols-2">
          {users.map((user) => (
            <Link 
              href={`/users/${user.id}`} 
              key={user.id}
              className="block p-6 rounded-xl border border-gray-200 hover:border-blue-500 
                       hover:shadow-lg transition-all duration-200 bg-white relative 
                       overflow-hidden group"
            >
              {/* User Card Content */}
              <div className="flex items-center space-x-4">
                {/* User Icon/Avatar */}
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center 
                            justify-center text-blue-600 font-semibold text-xl shrink-0">
                  {user.name.charAt(0)}
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-700 group-hover:text-blue-600 
                             transition-colors duration-200">
                    {user.name}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    User ID: {user.id}
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-bl-full 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-blue-100 rounded-tl-lg 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
