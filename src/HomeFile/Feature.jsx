

const FeaturedCompaniesSection = () => {
  const featuredCompanies = [
    { name: "Microsoft Corporation", logo: "https://i.ibb.co/9Gjjq55/MSFT-a203b22d.png" },
    { name: "Tesla", logo: "https://i.ibb.co/mFbFMQ2/tesla.png" },
    { name: "Inter", logo: "https://i.ibb.co/31v5ZMR/intel.png" },
    { name: "Nvidia", logo: "https://i.ibb.co/Q9s5hjH/01-nvidia-logo-vert-500x200-2c50-p-2x-removebg-preview.png" },
    // Add more companies as needed
  ];

  return (
    <div className="max-w-[1800px] mx-auto mb-7 px-5">
        <section className="bg-gray-800 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Partner Companies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto gap-8">
          {featuredCompanies.map((company, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center"
            >
              <img
                src={company.logo}
                alt={`${company.name} Logo`}
                className=" mx-auto h-16 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {company.name}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Join us and explore exciting opportunities!
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default FeaturedCompaniesSection;
