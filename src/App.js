import React from "react";
import Home from './pages/Home';
import RecipePage from './pages/RecipePage';
import Register from './pages/Register';
import "./App.css";
import PropTypes from "prop-types";
import Header from "./components/Header";
import Recipe from "./components/RecipeList/Recipe";
import Table from "./components/Table";
import Footer from "./components/Footer";
import DATA from "./assets/recipe-data";

class App extends React.Component {
  //handleChange = (event) => {
  //const text = event.target.value
  //DATA.filter((recipes) => {
  //return recipes.title.toLowerCase().includes(text.toLowerCase());
  //})
  //this.setState({recipes: filterData})
  //}

  render() {
    return (
      <div>
        <Header />

        <h1 className="main-title">Receitas</h1>

        <section className="container-recipes">
          {DATA.map((item) => (
            <Recipe
              key={item.id}
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </section>

        <section className="nutri-container">
          <Table />
          <Table />
          <Table />
          <Table />
        </section>
        <Footer />
      </div>
    );
  }
}

Recipe.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  autor: PropTypes.string,
  recipeText: PropTypes.string.isRequired,
};

export default App;
