import Link from "next/link";

export default async function CompanyList() {
 const res = await fetch("https://673736a9aafa2ef222330e54.mockapi.io/company");
 const companies = await res.json();
 
 return (
   <div className="min-h-screen bg-gray-50">
     <div className="max-w-4xl mx-auto p-6">
       <h1 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-4">
         List of Companies
       </h1>
       
       <div className="grid gap-4 md:grid-cols-2">
         {companies.map((company) => (
           <Link 
             href={`/companies/${company.id}`} 
             key={company.id}
             className="block p-6 rounded-xl border border-gray-200 hover:border-indigo-500 
                      hover:shadow-lg transition-all duration-200 bg-white relative 
                      overflow-hidden group"
           >
             {/* Company Card Content */}
             <div className="flex items-center space-x-4">
               {/* Company Icon/Logo */}
               <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center 
                           justify-center text-indigo-600 font-semibold text-xl shrink-0">
                 {company.companyName.charAt(0)}
               </div>
               
               <div>
                 <h2 className="text-xl font-semibold text-gray-700 group-hover:text-indigo-600 
                            transition-colors duration-200">
                   {company.companyName}
                 </h2>
                 <p className="text-sm text-gray-500 mt-1">
                   Company ID: {company.id}
                 </p>
               </div>
             </div>

             {/* Decorative Elements */}
             <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-50 rounded-bl-full 
                         opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
             <div className="absolute bottom-0 right-0 w-4 h-4 bg-indigo-100 rounded-tl-lg 
                         opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
           </Link>
         ))}
       </div>
     </div>
   </div>
 );
}