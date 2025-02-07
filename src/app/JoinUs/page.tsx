import Link from "next/link";
import React from "react";

const Joinus = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 text-gray-900">
  {/* Nike Membership Header */}
  <h1 className="text-3xl sm:text-4xl font-bold mb-4 self-start">
    Nike Membership
  </h1>

  {/* Content Section */}
  <div className="text-center max-w-2xl">
    <h2 className="text-xl sm:text-2xl font-semibold mb-4">
      Where All Athletes Belong
    </h2>
    <p className="text-gray-600 mb-6 leading-relaxed">
      When you're with us, you're part of something bigger: a global community
      dedicated to bringing out the best in one another, with access to the
      most effective tools for the job, including Member-exclusive products,
      Nike By You customization, and special offers. And it's all free.
    </p>

    {/* Join Us Button */}
    <Link href="/Membership">
      <button className="bg-black text-white text-sm font-medium py-3 px-8 rounded-full hover:bg-gray-800 focus:ring focus:ring-black focus:ring-opacity-50 transition-all">
        Join us
      </button>
    </Link>
  </div>
</div>

  );
};



export default Joinus;
