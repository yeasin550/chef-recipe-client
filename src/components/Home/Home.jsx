import React, { useEffect, useState } from 'react';
import Chef from '../Chef/Chef';
import MyRecipe from '../MyRecipe/MyRecipe';
import Page from '../Page/Page';
const Home = () => {
  const [chefs, setChefs] = useState([])
  useEffect(() => {
    fetch("https://chef-recipe-server-livid.vercel.app/recipe")
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
            backgroundImage: `url("https://img.freepik.com/free-photo/friied-eggs-with-vegetables_2829-10927.jpg?w=826&t=st=1683260023~exp=1683260623~hmac=c0beaac385c8cad2ff5e5a311522e92e1b16159050dd0217c06eefc4b9ec66d6")`,
          }}
        >
          <div className="hero-overlay bg-opacity-10"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md lg:text-start lg:mr-96">
              <h1 className="mb-5 text-5xl  animate-text bg-gradient-to-r from-orange-500 via-purple-500 to-teal-500 bg-clip-text text-transparent font-black">
                OuR-Recipe
              </h1>
              <p className="mb-5">
                Making stylish recipe scrapbooks that you can also use in the
                kitchen is a terrific way to organize recipes. You can spend
                time collecting your favorite recipes, including desserts such
                as cakes, sandwiches, burgers, or even bread and
                pasta, as well as images of ingredients and chefs. This way, you
                can create a unique recipe book that you can cherish and enjoy
                using.
              </p>
              <button className="relative flex items-center justify-center w-48 mr-4 gap-2 py-2 px-4  bg-gradient-to-r from-orange-500 to-indigo-500 text-white rounded-lg shadow-md transition-all hover:shadow-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500">
                Get Start
              </button>
            </div>
          </div>
        </div>
        {/* <h1 className="mb-8">This is chef container</h1> */}
        <div className="grid lg:grid-cols-3 lg:ms-12 gap-3">
          {chefs.map((chef) => (
            <Chef key={chef.id} chef={chef}></Chef>
          ))}
        </div>
        <MyRecipe></MyRecipe>
        <Page></Page>
      </div>
    );
};

export default Home;