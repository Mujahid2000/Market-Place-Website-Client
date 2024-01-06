


const Achievement = () => {
    return (
        <div className="max-w-[1800px] mx-auto mb-6 px-5">
            <section className="bg-gray-100 dark:bg-gray-800 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Our Platform in Numbers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Statistic Card 1 */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md ">
            <h3 className="text-xl font-semibold mb-4">Active Users</h3>
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              10,000+
            </p>
          </div>

          {/* Statistic Card 2 */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Jobs Posted</h3>
            <p className="text-3xl font-bold text-green-600 dark:text-green-400">
              5,000+
            </p>
          </div>

          {/* Statistic Card 3 */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Successful Placements</h3>
            <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
              2,500+
            </p>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default Achievement;