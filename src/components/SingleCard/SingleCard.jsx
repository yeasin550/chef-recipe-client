import React from 'react';

const SingleCard = ({ singleRecipe }) => {
    console.log(singleRecipe)
    const { cookingMethod, img, ingredients, ratings, recipeName } =
      singleRecipe;
    return (
      <div className="mt-12">
        <div className="card lg:card-side bg-base-100 ">
          <figure>
            <img className="w-50% " src={img} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{recipeName}</h2>
            <p>{cookingMethod}</p>
            <p>{ingredients}</p>
            <p>{ratings}</p>
          </div>
        </div>
      </div>
    );
};
export default SingleCard;