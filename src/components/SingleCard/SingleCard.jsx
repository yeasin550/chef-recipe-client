import React, { useState } from 'react';
import alert from "sweetalert2/dist/sweetalert2.js";
//  import Swal from "sweetalert2/dist/sweetalert2.js";
 import "sweetalert2";
import LazyLoad from 'react-lazy-load';
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
const SingleCard = ({ singleRecipe }) => {
  const [isDisabled, setIsDisabled] = useState(false);
    // console.log(singleRecipe)
    const { cookingMethod, img, ingredients, ratings, recipeName } =
      singleRecipe;

  function handleClick() {
    setIsDisabled(true);
    alert.fire({
      title: "success!",
      text: "Your Favorite Food add",
      icon: "success",
      confirmButtonText: "Cool",
    });
  }
    return (
      <div className="mt-12 ">
        <div className="card flex h-full glass ">
          <figure>
            <LazyLoad className="w-full" effect="blur">
              <img src={img} />
            </LazyLoad>
          </figure>
          <div className="card-body bg-gray-100 hover:bg-slate-200 py-2">
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
                <Rating style={{ maxWidth: 100 }} value={ratings} readOnly />
              </div>

              <button
            onClick={handleClick}
            disabled={isDisabled}
            className={
              isDisabled
                ? "disabled:opacity-50 bg-green-600 py-1 text-white hover:bg-green-800 rounded-lg px-4"
                : "bg-orange-600 py-1  hover:bg-orange-800 text-white  px-4"
            }
          >
            favorite
          </button>
            </div>
          </div>
        </div>
      </div>
    );
};
export default SingleCard;