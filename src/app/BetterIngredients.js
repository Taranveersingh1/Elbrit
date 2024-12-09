import React from "react";

const BetterIngredients = () => {
  const ingredients = [
    {
      title: "Vitamin C",
      description: "Vitamin C as ascorbic acid",
      image: "/Card2.png", 
    },
    {
      title: "Vitamin B3",
      description: "Niacin for healthy gut and skin",
      image: "/Card3.png",
    },
    {
      title: "Magnesium",
      description: "Boost energy and support muscle function",
      image: "/Card4.png",
    },
    {
      title: "Hyaluronic Acid",
      description: "For smooth, supple and soft skin!",
      image: "/Card5.png",
    },
    {
      title: "Lactobacillus",
      description: "Invigorate your gut microbiome",
      image: "/Card1.png",
    },
  ];

  return (
    <div className="bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-lg font-semibold text-blue-600">INGREDIENTS</h2>
          <h1 className="text-4xl font-bold text-gray-800">Better Ingredients</h1>
          <p className="text-gray-600 mt-4">
            Only the best when you choose products offered on our platform - high-quality ingredients for high-quality products!
          </p>
        </div>

        {/* Ingredient Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {ingredients.map((ingredient, index) => (
            <div
              key={index}
              className="relative bg-blue-100 rounded-lg overflow-hidden group"
              style={{
                backgroundImage: `url(${ingredient.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "250px", 
              }}
            >
              <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-100">
                <h3 className="text-lg font-semibold text-gray-800">
                  {ingredient.title}
                  <p className="text-sm text-gray-600 ">{ingredient.description}</p>
                </h3>
                
                <a
                  href="#"
                  className="text-blue-600 font-semibold text-sm underline"
                >
                  SEE MORE
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BetterIngredients;
