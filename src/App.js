import React from "react";
import Home from "./pages/Home";
import RecipePage from "./pages/RecipePage";
import Register from "./pages/Register";
import "./App.css";
import PropTypes from "prop-types";
import Header from "./components/Header";
import Recipe from "./components/RecipeList/Recipe";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isHomePage: true,
    };
}

  handleChangePage = () => {
    this.setState({ isHomePage: !this.state.isHomePage });
  };

  render() {
    return (
      <>
        {this.state.isHomePage && <Home onChangePage={this.handleChangePage} />}
        {!this.state.isHomePage && (
          <RecipePage onChangePage={this.handleChangePage} />
        )}
      </>
    );
  }
}


export default App;
