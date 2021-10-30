import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";

class Recipe extends React.Component {
  constructor(props) {
      super(props);
  
      this.state = {
        liked: false,
      };
    }
  
    handleLike = () => {
      this.setState({ liked: !this.state.liked });
    }; 

    render() {
   
    return (
      <div>
        <div className="container-recipe">
          <li className="eachRecipe">
            <img
              className="recipe-image"
              src={
                this.props.image}
              alt={`Receita ${this.props.title}`}
            />

            <div className="reactions" onClick={this.handleLike}>
              {!this.state.liked && <FaRegHeart className="heart" />}
              {this.state.liked && <FaHeart className="redHeart" />}
              <FaShareAlt className="share" />
            </div>

            <p className="recipeName"> {this.props.title}</p>
            <p>{this.props.subtitle}</p>
            <button className="seeRecipe"> Ver receita</button>
          </li>
        </div>
      </div>
    );
  }
}

export default Recipe;
