import React from "react";
import NutriTable from "../../../components/NutriTable"
import { BiTimeFive } from "react-icons/bi";
import { CgBowl } from "react-icons/cg";
import { GiNotebook } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";

class SelectedRecipe extends React.Component {
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

        <section className="one-recipe">
          <h1 className="recipe-title">{this.props.title}</h1>
          <h3 className="recipe-subtitle">{this.props.subtitle}</h3>
          <hr />

          <img
            className="recipe-image-bigger"
            src={this.props.image}
            alt={`Receita ${this.props.title}`}
          />
          <div className="recipe-text">
            <ul className="ingredients-list">
              {" "}
              <strong>Ingredientes: </strong>
              <li className="ingredient-item">{this.props.ingredients}</li>
            </ul>
            <span className="recipe-details">
              <strong>Modo de preparo:</strong>
            </span>
            <p className="prepare">{this.props.prepare}</p>
            <span className="recipe-details">
              <strong>
                <GiNotebook fontSize="15px" />
              </strong>{" "}
              {this.props.autor}
            </span>
            <span className="recipe-details">
              <strong>
                <BiTimeFive fontSize="15px" />
              </strong>{" "}
              {this.props.duration}
            </span>
            <span className="recipe-details">
              <strong>
                <CgBowl fontSize="15px" />
              </strong>{" "}
              {this.props.servings}
            </span>{" "}
            <br />
            <div className="reactions" onClick={this.handleLike}>
              {!this.state.liked && <FaRegHeart className="heart2" />}
              {this.state.liked && <FaHeart className="heart2" />}
              <FaShareAlt className="share2" />
            </div>
            <button className="seeMore"> Ver mais receitas</button>
          </div>
        </section>

        <section className="nutri-container">
          <NutriTable foodName="Morango" carbs="50g" />
          <NutriTable />
          <NutriTable />
          <NutriTable />
        </section>
      </div>
    );
  }
}

export default SelectedRecipe;
