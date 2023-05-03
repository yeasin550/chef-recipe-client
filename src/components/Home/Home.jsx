import React, { useEffect, useState } from 'react';
import Chef from '../Chef/Chef';
const Home = () => {
  const [chefs, setChefs] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/recipe")
    .then(res => res.json())
      .then(data => {
        setChefs(data);
        // console.log(data);
    })
    },[])
    return (
      <div>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url("https://img.freepik.com/free-photo/crop-plate-with-salad_23-2147753678.jpg?w=826&t=st=1683009705~exp=1683010305~hmac=4a6c89fb4d2031f3337a993526f0047efe743db6f95714a87812b7e8fff7cf1a")`,
          }}
        >
          <div className="hero-overlay bg-opacity-10"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md lg:text-start lg:mr-96">
              <h1 className="mb-5 text-5xl font-bold">Interesting Recipe</h1>
              <p className="mb-5">
                A recipe is a set of instructions that describes how to prepare
                or make something, especially a dish of prepared food. A
                sub-recipe or subrecipe is a recipe for an ingredient that will
                be called for in the instructions for the main recipe.
              </p>
              {/* <button className="btn btn-primary">Get Started</button> */}
            </div>
          </div>
        </div>
        <h1 className="mb-8">This is chef container</h1>
        <div className="grid lg:grid-cols-3 lg:ms-12 gap-3">
          {chefs.map((chef) => (
            <Chef key={chef.id} chef={chef}></Chef>
          ))}
        </div>
      </div>
    );
};

export default Home;