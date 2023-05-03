import React, { useEffect, useState } from "react";
import RecipeCart from "./RecipeCart";

const MyRecipe = () => {
  const [myRecipe, setMyRecipe] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/myRecipe")
      .then((res) => res.json())
      .then((data) => {
        setMyRecipe(data);
        // console.log(data);
      });
  }, []);
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://img.freepik.com/free-photo/healthy-lunch-go-packed-lunch-box_1220-4541.jpg?w=740&t=st=1683100425~exp=1683101025~hmac=4afac2cf1447087f216ca185b3ee8f3903d4b70f954cdb999e622c094b0245ae")`,
      }}
    >
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-6">
        {myRecipe.map((r) => (
          <RecipeCart key={r.id} r={r}></RecipeCart>
        ))}
      </div>

      {/* <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div> */}
    </div>

    //   <div>
    //     <h1 className="text-center text-4xl animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
    //       Our Menu
    //     </h1>
    //   </div>
  );
};

export default MyRecipe;
