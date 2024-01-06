import { IoSearch } from "react-icons/io5";

const FindWork = () => {
    return (
        <div className='dark:bg-gray-900 max-w-[1800px] mx-auto px-5'>
            <div className='mt-10 grid md:grid-cols-2 gap-6 md:flex justify-evenly max-w-full bg-gradient-to-r from-indigo-500 items-center'>
                <form className="max-w-full px-5">
                    <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <IoSearch />
                        </div>
                        <input
                            type="search"
                            id="default-search"
                            className="block mb-3 mr-3 w-80 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search Jobs, Employee..."
                            required
                        />
                        <button
                            type="submit"
                            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Search
                        </button>
                    </div>
                </form>
                <img className="px-5" src="https://i.ibb.co/XWMZjpp/logo-maker-banner-wide-desktop-1352-2x.webp" alt="" />
            </div>
        </div>
    );
};

export default FindWork;
