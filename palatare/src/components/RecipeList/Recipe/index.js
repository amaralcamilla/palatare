import React from "react";
import "./style.css";
import { FaRegHeart } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";

class Recipe extends React.Component {
  render() {
    return (
      <li className="eachRecipe">
        <img
          className="recipe-image"
          src={
            this.props.image ||
            "https://images.pexels.com/photos/3186961/pexels-photo-3186961.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          }
          alt={`Receita ${this.props.title}`}
        />
        <FaRegHeart className="heart" />
        <FaShareAlt className="share" />
        <p>Nome da Receita</p>
        <p>Subtítulo</p>

        <button className="seeRecipe">Ver receita</button>
      </li>
    );
  }
}

export default Recipe;
