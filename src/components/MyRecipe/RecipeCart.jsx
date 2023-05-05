import React from 'react';

const RecipeCart = ({ r }) => {
    // console.log(r)
    const { name, picture, id, ingredients } = r;
    return (
      <div className="my-3">
        <div className="max-w-sm  bg-gray-200 hover:bg-purple-100 overflow-hidden h-full ">
          <img
            className="w-full h-56 p-1 rounded-md"
            src={picture}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4  ">
            <div className="font-bold text-xl mb-2">{name}</div>
            {ingredients.map((ingredient) => (
              <p
              key={ingredient}
              >{ingredient}</p>
            ))}
          </div>
        </div>
      </div>
    );
};

export default RecipeCart;