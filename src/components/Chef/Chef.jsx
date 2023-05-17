import React from 'react';
import { FaThumbsUp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
const Chef = ({ chef }) => {
    // console.log(chef)
    const { chefName, chefPicture, experience, likes, numRecipes, id } = chef;
    return (
      <div>
        <div className=" card-compact hover:bg-gray-100 mb-5 lg:w-96 sm:w-80 bg-dark hover:shadow-lg hover:border-orange-300 hover:rounded border-2 mt-12">
          <figure>
            <LazyLoad effect="blur">
              <img className="h-72" src={chefPicture} alt="chef" />
            </LazyLoad>
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">{chefName}</h2>
            <p className="text-xl">Years of experience : {experience}</p>
            <p className="text-xl">Numbers of recipes : {numRecipes}</p>
            <p className="text-xl flex gap-2">
              <span>Likes : {likes}</span>{" "}
              <span>
                <FaThumbsUp className='text-primary'></FaThumbsUp>
              </span>
            </p>

            <div className="card-actions justify-end ">
              <Link className="w-full" to={`/recipeDetails/${id}`}>
                <button className="bg-blue-500 hover:bg-blue-600   rounded w-full bg-gradient-to-r from-green-500 to-orange-500 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-2 px-4">
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