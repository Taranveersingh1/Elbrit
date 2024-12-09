"use client";
import React from "react";

const Essential = () => {
  return (
    <div className="flex flex-col items-center bg-customBlue mx-7 my-4 p-5 min-h-screen">
      <div className="text-center text-customText font-serif text-5xl font-bold mb-8 mt-6">
        Essential Vitamins
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
        <div className="bg-customBlue p-6 rounded-md w-64 h-auto mt-14">
          <p className="text-sm text-gray-500">Online Medical Supplies</p>
          <h2 className="text-lg font-bold text-gray-800 mt-2">
            Get Your Vitamins <br /> & Minerals
          </h2>
          <button className="mt-4 bg-customText text-white py-2 px-4 rounded-3xl w-60">
            Explore
          </button>
        </div>

        <div className="relative flex flex-col items-center">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-yellow-200 w-72 h-60 rounded-[40px] z-0 ml-10"></div>

          <img
            src="/BottlePic.png"
            alt="Product Image"
            className="w-72 h-72 relative z-10 -mt-16 ml-10"
          />
        </div>

        <div className="flex flex-col items-start gap-5 ml-9 mt-14">
          <div className="flex items-center gap-4 ">
            <div className="p-4 rounded-full flex justify-center items-center w-24 h-16">
              <img
                src="/vitamins.png"
                alt="Vitamins Icon"
                className="w-14 h-14"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800">Vitamins</h3>
              <p className="text-sm text-gray-600">
                Increased vitamins and <br /> minerals in your diet.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className=" p-4 rounded-full flex justify-center items-center w-24 h-16">
              <img
                src="/weightloss.png"
                alt="Weight Loss Icon"
                className="w-14 h-14"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800">Weight Loss</h3>
              <p className="text-sm text-gray-600">
                Weight Loss
                <br />
                Find scientifically proven solutions.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className=" p-4 rounded-full flex justify-center items-center w-24 h-16">
              <img
                src="/FunctionalFoods.png"
                alt="Functional Foods Icon"
                className="w-14 h-14"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800">
                Functional Foods
              </h3>
              <p className="text-sm text-gray-600">
                Functional Foods
                <br />
                From protein powders to baby formula.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center mt-24 gap-6 bg-customText p-6 rounded-3xl w-full">
      
        <div className="relative w-full sm:w-1/2 lg:w-1/4 px-4">
         
          <div className="absolute top-[-60px] left-1/2 transform -translate-x-1/2">
            <div className="bg-white p-4 rounded-full flex justify-center items-center w-16 h-16">
              <img
                src="/one1.png"
                alt="Clinically Studied Icon"
                className="w-8 h-8"
              />
            </div>
          </div>
          <div className="text-center mt-6">
            <h4 className="font-bold text-white">Clinically Studied</h4>
            <p className="text-sm text-white">
              All products we offer have undergone lab and safety tests.
            </p>
          </div>
        </div>
        <div className="relative w-full sm:w-1/2 lg:w-1/4 px-4">
          <div className="absolute top-[-60px] left-1/2 transform -translate-x-1/2">
            <div className="bg-white p-4 rounded-full flex justify-center items-center w-16 h-16">
              <img
                src="/two2.png"
                alt="Vegetarian Friendly Icon"
                className="w-8 h-8"
              />
            </div>
          </div>
          <div className="text-center mt-6">
            <h4 className="font-bold text-white">Vegetarian Friendly</h4>
            <p className="text-sm text-white">
              A wide selection of <br/>vegetarian products.
            </p>
          </div>
        </div>
        <div className="relative w-full sm:w-1/2 lg:w-1/4 px-4">
          <div className="absolute top-[-60px] left-1/2 transform -translate-x-1/2">
            <div className="bg-white p-4 rounded-full flex justify-center items-center w-16 h-16">
              <img
                src="/three3.png"
                alt="Made in India Icon"
               className="w-8 h-8"
              />
            </div>
          </div>
          <div className="text-center mt-6">
            <h4 className="font-bold text-white">Made in India</h4>
            <p className="text-sm text-white">
              Shop local and support Indian-made products.
            </p>
          </div>
        </div>
        <div className="relative w-full sm:w-1/2 lg:w-1/4 px-4 ">
          <div className="absolute top-[-60px] left-1/2 transform -translate-x-1/2">
            <div className="bg-white p-4 rounded-full flex justify-center items-center w-16 h-16 mt-14">
              <img
                src="/four4.png"
                alt="Free Shipping Icon"
                className="w-8 h-8"
              />
            </div>
          </div>
          <div className="text-center mt-20">
            <h4 className="font-bold text-white">Free Shipping</h4>
            <p className="text-sm text-white">
              We deliver to your door with no shipping cost on your orders.
            </p>
          </div>
        </div>
        <div className="relative w-full sm:w-1/2 lg:w-1/4 px-4">
          <div className="absolute top-[-60px] left-1/2 transform -translate-x-1/2">
            <div className="bg-white p-4 rounded-full flex justify-center items-center w-16 h-16 mt-14">
              <img
                src="/five5.png"
                alt="No Risk Icon"
                className="w-8 h-8"
              />
            </div>
          </div>
          <div className="text-center mt-20">
            <h4 className="font-bold text-white">No Risk</h4>
            <p className="text-sm text-white">
              We ensure that all products are safe and within their use-by date.
            </p>
          </div>
        </div>

        <div className="relative w-full sm:w-1/2 lg:w-1/4 px-4">
          <div className="absolute top-[-60px] left-1/2 transform -translate-x-1/2">
            <div className="bg-white p-4 rounded-full flex justify-center items-center w-16 h-16 mt-14">
              <img
                src="/six6.png"
                alt="GMO Free Icon"
                className="w-8 h-8"
              />
            </div>
          </div>
          <div className="text-center mt-20">
            <h4 className="font-bold text-white">GMO Free</h4>
            <p className="text-sm text-white">
              Non-genetically modified products for a healthier you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Essential;
