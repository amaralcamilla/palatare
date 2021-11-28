import recipeData from "../../assets/recipe-data";
import { useState, useNavigate } from "react";
import { FaHeart, FaRegHeart, FaShareAlt } from "react-icons/fa";

const RecipeList = () => {
  return (
    <>
      <ul className="recipeList">
          {recipeData.map((item) => (
            <li className="eachRecipe">
              <img
                className="recipe-image"
                src={item.image}
                alt={`Receita ${item.title}`}
                // onClick={onSelect}
              />

              <div
                className="reactions"
                // onClick={handleLike}
              >
                {/* {!isLiked && <FaRegHeart className="heart" />}
              {isLiked && <FaHeart className="redHeart" />} */}
                <FaShareAlt className="share" />
              </div>

              <p className="recipeName"> {item.title}</p>
              <p>{item.subtitle}</p>
              <button
                className="seeRecipe"
                // onClick={onSelect}
              >
                Ver receita
              </button>
            </li>
          ))}
      </ul>
      ;
    </>
  );
};

export default RecipeList;
