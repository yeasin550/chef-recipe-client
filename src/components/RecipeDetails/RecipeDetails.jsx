import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCard from '../SingleCard/SingleCard';

const RecipeDetails = () => {
    const singleChef  = useLoaderData();
    console.log(singleChef);
    const { chefName, chefPicture, experience, likes, numRecipes, id } =
      singleChef;

    return (
      <div className="mt-5 mx-12">
        
        <div>
          <div className="card lg:card-side bg-base-100 mx-12">
            <figure>
              <img className="h-96" src={chefPicture} alt="Album" />
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
        <div className="h-96">
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