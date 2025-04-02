import React, { useState, useEffect } from "react";
import axios from "axios";
import Lottie from "lottie-react";
import firstAidAnimation from "../assets/animations/animation1.json";

const FirstAidGuide = () => {
    const [guides, setGuides] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/first-aid")
            .then((res) => setGuides(res.data))
            .catch((err) => console.log(err));
    }, []);

    const filteredGuides = guides.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-white text-black p-6">
            {/* Page Header */}
            <h1 className="text-4xl font-bold text-red-600 text-center mb-6">
                Emergency First Aid Guide
            </h1>

            {/* Search Bar */}
            <div className="flex justify-center mb-6">
                <input
                    type="text"
                    placeholder="Search First Aid Guide..."
                    className="w-full max-w-lg px-4 py-2 border-2 border-red-500 rounded-lg 
                     focus:outline-none focus:ring-2 focus:ring-red-400"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {/* Show Lottie Animation if No Search Query */}
            {search.trim() === "" ? (
                <div className="flex justify-center items-center flex-col">
                    <div className="w-90 h-90">
                        <Lottie
                            animationData={firstAidAnimation}
                            loop={true}
                            autoplay={true}
                        />
                    </div>
                    <p className="text-lg text-gray-700 mt-4 text-center">
                        Search for a first aid topic to get step-by-step guidance.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {filteredGuides.map((item) => (
                        <div
                            key={item._id}
                            className="bg-white border-2 border-red-500 rounded-lg shadow-md p-4 
                         hover:shadow-lg transition"
                        >
                            {/* Image */}
                            <img
                                src={item.imageUrl}
                                alt={item.title}
                                className="w-full h-40 object-cover rounded-lg border-2 border-red-500"
                            />

                            {/* Title */}
                            <h2 className="text-xl font-semibold text-red-600 mt-2">
                                {item.title}
                            </h2>

                            {/* Description */}
                            <p className="text-sm text-gray-700">{item.description}</p>

                            {/* Steps */}
                            <ul className="mt-2 text-sm text-black">
                                {item.steps.map((step, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="font-bold text-red-500 mr-2">
                                            {index + 1}.
                                        </span>
                                        {step}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FirstAidGuide;
