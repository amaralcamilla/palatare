import React from "react";
import "./style.css";
import Header from "../../components/Header";
import { BiTimeFive } from 'react-icons/bi'
import { CgBowl } from 'react-icons/cg'
import { GiNotebook } from 'react-icons/gi'
import { FaRegHeart } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";

class RecipePage extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <section className="one-recipe">
          <h1 className="recipe-title">COMPOTA DE MORANGOS</h1>
          <h3 className="recipe-subtitle">
            Morango, limão e pimenta-do-reino. Pode reunir esse trio que dá
            supercerto!{" "}
          </h3> <hr />

          {/* <Recipe
            image={this.props.image}
            title={this.props.title}
            subtitle={this.props.subtitle}
            autor={this.props.autor}
            ingredients={this.props.ingredients}
            prepare={this.props.prepare}
            duration={this.props.duration}
            level={this.props.level}
            servings={this.props.servings}
          /> */}
          <img
            className="recipe-image-bigger"
            src={
              this.props.image ||
              "https://images.pexels.com/photos/3186961/pexels-photo-3186961.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
            alt={"Receita COMPOTA DE MORANGOS"}
          />

          <div className="recipe-text">
            <ul className="ingredients-list">
              {" "}
              <strong>Ingredientes: </strong>
              <li className="ingredient-item">
                500 g de morangos (cerca de 3 xícaras)
              </li>
              <li className="ingredient-item">3 colheres (sopa) de açúcar</li>
              <li className="ingredient-item">
                1 colher (sopa) de caldo de limão
              </li>
              <li className="ingredient-item">
                pimenta-do-reino moída na hora a gosto
              </li>
            </ul>
            <span className="recipe-details">
              <strong>Modo de preparo:</strong>
            </span>
            <p className="prepare">
              {" "}
              Preaqueça o forno a 200 ºC (temperatura média). Lave, descarte os
              cabinhos e corte os morangos maiores ao meio, no sentido do
              comprimento. Mantenha os morangos menores inteiros. Transfira os
              morangos para uma assadeira média, de preferência antiaderente.
              Polvilhe com o açúcar, regue com o caldo de limão e tempere com
              pimenta-do-reino moída na hora a gosto. 
              Misture delicadamente com
              uma espátula. Leve ao forno para assar por cerca de 20 minutos, ou
              até que forme uma calda brilhante e os morangos fiquem macios.
            </p>
            <span className="recipe-details">
              <strong><GiNotebook fontSize="15px" /></strong> Palmirinha
            </span>
            <span className="recipe-details">
              <strong><BiTimeFive fontSize="15px" /></strong> 20 minutos
            </span>
            <span className="recipe-details">
              <strong><CgBowl fontSize="15px" /></strong> 4 porções
            </span> <br />
            <FaRegHeart className="heart2" /> 
            <FaShareAlt className="share2" /> 
            <button className="seeMore"> Ver mais receitas</button>
          </div>
        </section>
      </div>
    );
  }
}

export default RecipePage;
