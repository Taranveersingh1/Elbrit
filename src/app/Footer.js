import React from "react";

const Footer = () => {
  return (
    <div className="bg-customText text-white py-8 font-sans">
      <div className="flex flex-wrap justify-around items-center">
        {/* Phone Number Section */}
        <div className="bg-customFooter flex items-center space-x-4 w-80 h-16 px-4 rounded-lg shadow-lg mb-6 ml-6">
          <div className="text-3xl">
            <img src="/calller.png" className="w-11 h-11" />
          </div>
          <div>
            <p className="font-semibold">Phone Number</p>
            <p>+974 3118 1843</p>
          </div>
        </div>

        {/* Email Address Section */}
        <div className="bg-customFooter flex items-center space-x-4 w-80 h-16 px-4 rounded-lg shadow-lg mb-6">
          <div className="text-3xl">
            <img src="/email.png" className="w-11 h-11" />
          </div>
          <div>
            <p className="font-semibold">Email Address</p>
            <p>Elbrithcqhr@gmail.com</p>
          </div>
        </div>

        {/* Office Location Section */}
        <div className="bg-customFooter flex items-center space-x-4 w-80 h-16 px-4 rounded-lg shadow-lg mb-6">
          <div className="text-3xl">
            <img src="/location.png" className="w-11 h-11" />
          </div>
          <div>
            <p className="font-semibold">Office Location</p>
            <p>Ambassador Street, Zone 61</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-8">
        {/* Logo and Text Section */}
        <div className="flex flex-col justify-center items-center mb-6 px-6 space-y-4">
          <div className="flex justify-start items-center space-x-4">
            <img
              src="/kaam.png" // Replace with the actual logo URL or path
              alt="Elbrit Logo"
              className="h-16 w-auto p-4 bg-white ml-10" // Adjust height and maintain aspect ratio
            />
            <div className="text-left">
              <p className="text-sm font-semibold">
                Your health, physical and emotional well-being is important to
                us. We are always by your side and have made it even easier for
                you to find the necessary vitamins.
              </p>
            </div>
          </div>

          {/* Copyright Section */}
        </div>
      </div>
      <div className="text-sm text-white text-start ml-14">
        <p>
          &copy; Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai
          400051
        </p>
      </div>
    </div>
  );
};

export default Footer;
