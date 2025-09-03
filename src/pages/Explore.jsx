export default function Explore() {
  // Dummy data for now (later you can fetch from API)
  const posts = [
    { id: 1, title: "Funny Cat Video", thumbnail: "https://picsum.photos/300/200?random=7" },
    { id: 2, title: "Dance Challenge", thumbnail: "https://picsum.photos/300/200?random=1" },
    { id: 3, title: "Travel Vlog", thumbnail: "https://picsum.photos/300/200?random=2" },
    { id: 4, title: "Cooking Recipe", thumbnail: "https://picsum.photos/300/200?random=3" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Explore</h1>

      {/* Grid of cards */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition p-3"
          >
            <img
              src={post.thumbnail}
              alt={post.title}
              className="w-full h-40 object-cover rounded-xl"
            />
            <h2 className="mt-3 font-semibold text-gray-800">{post.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

// export default Explore;