

const MyBids = () => {
    return (
        <div>
            <div className="w-full overflow-x-auto ">
      <table className="min-w-full bg-white border shadow rounded-lg">
        <thead>
          <tr className="bg-[#9CA3AF]">
            <th className="border px-4 py-2 ">Email (Not Editable)</th>
            <th className="border px-4 py-2 ">Job Title</th>
            <th className="border px-4 py-2 ">Deadline</th>
            <th className="border px-4 py-2 ">Description</th>
            <th className="border px-4 py-2 ">Category</th>
            <th className="border px-4 py-2 ">Minimum Price</th>
            <th className="border px-4 py-2 ">Maximum Price</th>
            <th className="border px-4 py-2 ">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2 ">user@example.com</td>
            <td className="border px-4 py-2 ">Developer</td>
            <td className="border px-4 py-2 ">2023-11-30</td>
            <td className="border px-4 py-2 ">Full-stack developer needed for a web project</td>
            <td className="border px-4 py-2 ">IT</td>
            <td className="border px-4 py-2 ">$50,000</td>
            <td className="border px-4 py-2 ">$70,000</td>
            <td className="border px-4 py-2 ">
              <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition duration-300 transform hover:scale-105 focus:outline-none">
                Update
              </button>
              <button className="bg-red-500 text-white px-2 py-1 ml-2 rounded hover:bg-red-600 transition duration-300 transform hover:scale-105 focus:outline-none">
                Delete
              </button>
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
        </div>
    );
};

export default MyBids;