import React from "react";
import Home from "./pages/Home";
import RecipePage from "./pages/RecipePage";
import RegisterPage from "./pages/RegisterPage";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHomePage: true,
      isRecipePage: false,
      isRegisterPage: false,
      selectedRecipe: null,
    };
  }
  goToHome = () => {
    this.setState({
      isHomePage: true,
      isRecipePage: false,
      isRegisterPage: false,
    });
  };
  goToRecipePage = (selectedRecipe) => {
    this.setState({
      isHomePage: false,
      isRecipePage: true,
      isRegisterPage: false,
      selectedRecipe,
    });
  };
  goToRegisterPage = () => {
    this.setState({
      isHomePage: false,
      isRecipePage: false,
      isRegisterPage: true,
    });
  };

  render() {
    return (
      <>
        {this.state.isHomePage && (
          <Home
            onChangePageRecipe={this.goToRecipePage}
            onChangePageRegister={this.goToRegisterPage}
          />
        )}

        {this.state.isRecipePage && (
         <RecipePage rec={this.state.selectedRecipe} onChangePage={this.goToHome} /> 
         )}
        {this.state.isRegisterPage && (
          <RegisterPage onChangePage={this.goToHome} />
        )}
      </>
    );
  }
}

export default App;
