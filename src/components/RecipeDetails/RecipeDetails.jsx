import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SingleCard from '../SingleCard/SingleCard';


const RecipeDetails = () => {
    const singleChef  = useLoaderData();
    console.log(singleChef)
    const { chefName, chefPicture, experience, likes, numRecipes, id } =
      singleChef;

    return (
      <div className="mt-3 mx-12">
        <div>
          <div className="card lg:card-side bg-base-100 mx-12">
            <figure>
              <img className="h-80" src={chefPicture} alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl">{chefName}</h2>
              <p className="text-xl">Years of experience : {experience}</p>
              <p className="text-xl">Numbers of recipes : {numRecipes}</p>
              <p className="text-xl">Likes : {likes}</p>
            </div>
          </div>
        </div>
        {/* singleRecipe */}
        <div className=" lg:w-3/4 grid gap-3 mx-4 pt-12 lg:mx-auto lg:grid-cols-3">
          {singleChef.recipes.map((singleRecipe) => (
            <SingleCard
              key={singleRecipe.id}
              singleRecipe={singleRecipe}
            ></SingleCard>
          ))}
        </div>
        
      </div>
    );
};

export default RecipeDetails;