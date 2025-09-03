import { useState, useEffect } from "react";

function HeroSec() {
  // Hero slider images
  const heroImages = [
    "https://picsum.photos/1200/500?random=1",
    "https://picsum.photos/1200/500?random=2",
    "https://picsum.photos/1200/500?random=3",
  ];

  // Posts (can be used later for feed section)
  const posts = [
    { id: 1, title: "Beach Vibes 🌊", image: "https://picsum.photos/400/300?random=4" },
    { id: 2, title: "City Lights 🌃", image: "https://picsum.photos/400/300?random=5" },
    { id: 3, title: "Mountain Escape 🏔️", image: "https://picsum.photos/400/300?random=6" },
    { id: 4, title: "Foodie Goals 🍕", image: "https://picsum.photos/400/300?random=7" },
    { id: 5, title: "Coding Night 💻", image: "https://picsum.photos/400/300?random=8" },
  ];

  // Slider state
  const [current, setCurrent] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="p-0">
      {/* Hero Slider */}
      <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden rounded-b-2xl shadow-lg">
        {heroImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`hero-${index}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Overlay Text */}
        <div className="absolute inset-0 flex-1 flex flex-col items-center text-center justify-center bg-black bg-opacity-40">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-16">
            Welcome to ViralX 🚀
          </h1>
            <p className="text-3xl text-white mb-8">
                ViralX is your next-gen social platform. Share stories, follow trends, and grow your community.
            </p>
            <button className="px-6 py-3 bg-teal-600 text-white rounded-lg shadow-md hover:bg-teal-500">
                Get Started
            </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSec;
