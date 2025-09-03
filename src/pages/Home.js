// import { useState, useEffect } from "react";

// export default function Home() {
//   // Dummy posts for hero slider + feed
//   const heroImages = [
//     "https://picsum.photos/1200/500?random=1",
//     "https://picsum.photos/1200/500?random=2",
//     "https://picsum.photos/1200/500?random=3",
//   ];

//   const posts = [
//     { id: 1, title: "Beach Vibes 🌊", image: "https://picsum.photos/400/300?random=4" },
//     { id: 2, title: "City Lights 🌃", image: "https://picsum.photos/400/300?random=5" },
//     { id: 3, title: "Mountain Escape 🏔️", image: "https://picsum.photos/400/300?random=6" },
//     { id: 4, title: "Foodie Goals 🍕", image: "https://picsum.photos/400/300?random=7" },
//     { id: 5, title: "Coding Night 💻", image: "https://picsum.photos/400/300?random=8" },
//   ];

//   // Hero Slider
//   const [current, setCurrent] = useState(0);
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % heroImages.length);
//     }, 3000); // auto slide every 3s
//     return () => clearInterval(timer);
//   }, [heroImages.length]);

//   return (
//     <div className="p-0">
//       {/* Hero Slider */}
//       <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden rounded-b-2xl shadow-lg">
//         {heroImages.map((img, index) => (
//           <img
//             key={index}
//             src={img}
//             alt="hero"
//             className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
//               index === current ? "opacity-100" : "opacity-0"
//             }`}
//           />
//         ))}

//         {/* Overlay text */}
//         <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
//           <h1 className="text-white text-3xl md:text-5xl font-bold">
//             Welcome to ViralX 🚀
//           </h1>
//         </div>
//       </div>

//       {/* Feed Section */}
//       <div className="p-6">
//         <h2 className="text-2xl font-bold mb-6">Latest Posts</h2>
//         <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//           {posts.map((post) => (
//             <div
//               key={post.id}
//               className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
//             >
//               <img
//                 src={post.image}
//                 alt={post.title}
//                 className="w-full h-40 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="font-semibold text-gray-800">{post.title}</h3>
//                 <p className="text-sm text-gray-500">❤️ 120 Likes · 💬 30 Comments</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// 1. Home / Discover Page
function Home() {
  const [current, setCurrent] = useState(0);

  const handleSwipe = () => setCurrent((prev) => (prev + 1) % reels.length);

  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-2xl font-semibold mb-4">Discover Reels</h2>
      {reels[current] && (
        <motion.div
          key={reels[current].id}
          className="w-80 h-[450px] bg-white rounded-2xl shadow-lg overflow-hidden relative"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
        >
          <img src={reels[current].thumbnail} alt="thumb" className="w-full h-60 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold">{reels[current].title}</h3>
            <span className="text-sm text-gray-500">#{reels[current].niche}</span>
          </div>
          <div className="flex justify-around p-4 absolute bottom-0 w-full bg-white">
            <Button onClick={handleSwipe} variant="outline">Skip</Button>
            <Link to={`/script/${reels[current].id}`}>
              <Button>View</Button>
            </Link>
            <Button onClick={handleSwipe} variant="secondary">Save</Button>
          </div>
        </motion.div>
      )}
    </div>
  );
}