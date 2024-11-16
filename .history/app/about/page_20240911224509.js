import React from 'react'
import Link from 'next/link'

const About = () => {
  return (
    <>
    <div class="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
    <div className="min-h-screen  flex items-center justify-center">
      <div className="max-w-4xl bg-white rounded-lg shadow-lg p-8 md:p-16">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 text-purple-600">
          About Get Me A Chai
        </h1>
        <p className="text-lg text-gray-700 text-center mb-8">
          Get Me A Chai is a crowdfunding platform designed for creators who wish to connect with their community in a simple, meaningful way. Whether you’re an artist, writer, developer, or content creator, we believe in the power of small contributions to fuel big dreams.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-purple-600 mb-2">Our Mission</h2>
            <p className="text-gray-600">
              At Get Me A Chai, we strive to provide a seamless experience for creators to receive support for their work. By offering an easy-to-use platform for donations, we aim to bridge the gap between creators and supporters with transparency and ease.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-purple-600 mb-2">How It Works</h2>
            <p className="text-gray-600">
              Supporters can donate small amounts, or "chai," to their favorite creators. Whether it’s a thank-you for amazing content or a show of appreciation, every chai counts! Creators can display their supporter leaderboard and stay connected with their audience through personalized messages.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <h2 className="text-xl font-semibold text-purple-600 mb-2">Join Us</h2>
          <p className="text-gray-600 mb-6">
            Whether you're a creator looking for support or someone who wants to help others achieve their goals, Get Me A Chai is the perfect place to start. Together, we can make small contributions create lasting impact.
          </p>
          <Link ></Link>
          <button  className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 px-6 rounded-lg text-lg font-medium hover:shadow-lg">
            Start Supporting Creators
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default About
