import React, { useEffect, useState } from "react";
import RecipeCart from "./RecipeCart";

const MyRecipe = () => {
  const [myRecipe, setMyRecipe] = useState([]);

  useEffect(() => {
    fetch("https://chef-recipe-server-livid.vercel.app/myRecipe")
      .then((res) => res.json())
      .then((data) => {
        setMyRecipe(data);
        // console.log(data);
      });
  }, []);
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://img.freepik.com/free-photo/top-view-different-seasonings-with-fresh-tomatoes-dark-green-background-ingredient-product-meal-food-vegetable_140725-72482.jpg?w=740&t=st=1683263221~exp=1683263821~hmac=a701ae7335f40a03dfbbf9d88dc0c2e7f5134a2429f05c60743d28fbebdbfaaa")`,
        }}
      >
        <div className="hero-overlay bg-opacity-10"></div>

        <div>
          <h1 className="my-5 text-5xl font-bold text-white text-center">
            Our Recipe Menu 
            
          </h1>
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-6 ">
            {myRecipe.map((r) => (
              <RecipeCart key={r.id} r={r}></RecipeCart>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRecipe;
