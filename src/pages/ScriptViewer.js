import React, { useState } from "react";

function ScriptViewer({ reel, onBack }) {
    const [text, setText] = useState(reel.transcript);
    const [tone, setTone] = useState("Funny");
    const [language, setLanguage] = useState("English");

    return (
        <div className="min-h-screen bg-gray-50 p-6">
        <button
            onClick={onBack}
            className="mb-4 px-4 py-2 bg-gray-700 text-white rounded-lg"
        >
        ⬅ Back
        </button>
        <h1 className="text-2xl font-bold mb-4">{reel.title}</h1>
        <textarea
            className="w-full h-40 p-2 border rounded-lg"
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
        <div className="flex gap-4 mt-4">
            <select
                className="border rounded-lg p-2"
                value={tone}
                onChange={(e) => setTone(e.target.value)}
            >
                <option>Funny</option>
                <option>Professional</option>
                <option>Casual</option>
            </select>
            <select
                className="border rounded-lg p-2"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
            >
                <option>English</option>
                <option>Hindi</option>
                <option>Hinglish</option>
            </select>
        </div>
    </div>
    );
}

export default ScriptViewer;
