import React from 'react';
import Button from './Button';

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-black to-blue-950 p-10">
      {/* Full-width container with padding */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center bg-gradient-to-b from-blue-950 to-black rounded-lg shadow-lg overflow-hidden">
        {/* Left Content Section */}
        <div className="w-full md:w-1/2 p-10 text-white">
          <h2 className="text-xl font-semibold text-blue-300 mb-4">
            UNLOCK YOUR BEAST MODE WITH
          </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            MUSCLE<span className="text-blue-500">MAP</span>
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-gray-300 mb-8">
            "I hereby acknowledge that by using Muscle
            <span className="text-blue-400">Maps</span>, I may unintentionally
            become a{' '}
            <span className="font-bold text-white">towering titan of muscle</span>,
            risking the local{' '}
            <span className="font-bold text-white">mass-monstrosity status</span>. I
            accept all consequences, including severe body dysmorphia and
            occasional door-related challenges."
          </p>
          <Button
            func={() => {
              window.location.href = '#generate';
            }}
            text="Accept & Begin"
          />
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2">
          <div className="h-full w-full relative">
            <img
              src="https://img.freepik.com/premium-photo/dynamic-muscle-man-with-blue-neon-splash_155027-8948.jpg?w=1380"
              alt="Beast Mode"
              className="h-full w-full object-cove pr-4"
            />
            {/* Optional Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
