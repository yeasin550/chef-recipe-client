import React from 'react';
// import { FaStar, FaRegStarHalf, FaRegStar } from "react-icons/fa";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
const SingleCard = ({ singleRecipe }) => {
    console.log(singleRecipe)
    const { cookingMethod, img, ingredients, ratings, recipeName } =
      singleRecipe;
    return (
      <div className="mt-12">
        <div className="card  glass ">
          <figure>
            <img src={img} className="w-full h-[600px]" />
          </figure>
          <div className="card-body bg-gray-300 py-2">
            <h2 className="card-title">{recipeName}</h2>
            <ol className="list-decimal grid grid-cols-2">
              {ingredients.map((data, i) => (
                <li key={i}>{data}</li>
              ))}
            </ol>
            <p>{cookingMethod}</p>
            <div className="card-actions justify-between">
              <div className="flex flex-row items-center mr-3">
                <span className="pr-2">{ratings}</span>
                <Rating
                  style={{ maxWidth: 100 }}
                  value={ratings}
                  readOnly
                />
                {/* <ReactStars
                  count={5}
                  value={ratings}
                  size={24}
                  isHalf={true}
                  emptyIcon={<FaStar />}
                  halfIcon={<FaRegStarHalf />}
                  fullIcon={<FaRegStar />}
                  activeColor="#ffd700" */}
                {/* /> */}
              </div>

              {/* <button
                // onClick={handleClick}
                // disabled={isDisabled}
                className={
                  isDisabled
                    ? "disabled:opacity-50 bg-amber-600 py-1  hover:bg-amber-800 rounded-lg px-4"
                    : "bg-amber-600 py-1  hover:bg-amber-800 rounded-lg px-4"
                }
              >
                favorite
              </button> */}
            </div>
          </div>
        </div>
      </div>
    );
};
export default SingleCard;