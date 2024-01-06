

const BlogResourceSection = () => {
  const blogPosts = [
    {
      title: "10 Tips for a Successful Job Interview",
      date: "January 15, 2023",
      image: "https://i.ibb.co/5GqkbtX/11321921-4727304.jpg",
      link: "/",
    },
    {
      title: "Building a Strong Portfolio: A Step-by-Step Guide",
      date: "February 5, 2023",
      image: "https://i.ibb.co/stGfksB/5001423-52522.jpg",
      link: "/",
    },
    {
      title: "Navigating the Remote Work Landscape",
      date: "March 20, 2023",
      image: "https://i.ibb.co/mFH50wS/7406703-3657951.jpg",
      link: "/",
    },
   
  ];

  return (
    <div className="px-5">
      <section className="bg-white py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
            >
              <img
                src={post.image}
                alt={`${post.title} Thumbnail`}
                className="w-full h-40 object-cover mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {post.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">{post.date}</p>
              <a
                href={post.link}
                className="text-blue-600 dark:text-blue-500 hover:underline mt-2 block"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default BlogResourceSection;
