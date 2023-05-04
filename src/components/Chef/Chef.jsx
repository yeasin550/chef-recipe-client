import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
const Chef = ({ chef }) => {
    // console.log(chef)
    const { chefName, chefPicture, experience, likes, numRecipes, id } = chef;
    return (
      <div>
        <div className=" card-compact mb-5 lg:w-96 sm:w-80 bg-dark  border-2">
          <figure>
            <LazyLoad effect='blur'>
              <img className="h-72" src={chefPicture} alt="chef" />
            </LazyLoad>
          </figure>
          <div className="card-body">
            <h2 className="card-title">{chefName}</h2>
            <p>Years of experience : {experience}</p>
            <p>Numbers of recipes : {numRecipes}</p>
            <p>Likes : {likes}</p>

            <div className="card-actions justify-end">
              <Link className="w-full" to={`/recipeDetails/${id}`}>
                <button className="bg-blue-500 hover:bg-blue-600   rounded w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-2 px-4">
                  View Recipes
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Chef;