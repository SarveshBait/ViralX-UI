import React, { useState } from "react";
import reels from "../data/reels";

function DiscoverPage({ onSelect }) {
    const [index, setIndex] = useState(0);

    const handleAction = (action) => {
        if (index < reels.length - 1) {
        setIndex(index + 1);
        } else {
        alert("No more reels!");
        }
    };

    const reel = reels[index];

    return (
        <div className="flex flex-col items-start justify-start min-h-screen bg-gray-100 p-6">
        <h1 className="text-2xl font-bold mb-6">Discover Reels</h1>
        {reel && (
            <div className="bg-white shadow-lg rounded-xl p-4 max-w-sm">
            <img
                src={reel.thumbnail}
                alt={reel.title}
                className="rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold">{reel.title}</h2>
            <span className="inline-block mt-2 bg-blue-100 text-blue-600 px-2 py-1 rounded text-sm">
                {reel.tag}
            </span>
            <div className="flex justify-around mt-4">
                <button
                onClick={() => handleAction("like")}
                className="px-4 py-2 text-black rounded-lg"
                >
                ❤️ Like
                </button>
                <button
                    onClick={() => onSelect(reel)}
                    className="px-4 py-2 text-black rounded-lg"
                >
                ✍ Edit
                </button>
                <button
                    onClick={() => handleAction("skip")}
                    className="px-4 py-2 text-black rounded-lg"
                >
                ⏭ Skip
                </button>
            </div>
        </div>
        )}
    </div>
    );
}

export default DiscoverPage;
