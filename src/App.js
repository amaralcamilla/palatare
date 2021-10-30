import React from "react";
import Home from "./pages/Home";
import RecipePage from "./pages/RecipePage";
import "./App.css";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHomePage: false,
    };
  }

  handleChangePage = () => {
    this.setState({ isHomePage: !this.state.isHomePage });
  };
  //Seria o mesmo que dizer assim:

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isHomePage: true,
  //     isRecipePage: false,
  //   };
  // }
  //goToHome = () => {
  //   this.setState({ isHomePage: true, isRecipePage: false })
  // }
  // goToRecipePage = () => {
  //   this.setState({ isHomePage: false, isRecipePage: true })
  // }

  render() {
    return (
      <>
          {this.state.isHomePage && (
            <Home onChangePage={this.handleChangePage} />
          )}
          {!this.state.isHomePage && (
            <RecipePage onChangePage={this.handleChangePage} />
          )}
      </>
    );
  }
}

export default App;
