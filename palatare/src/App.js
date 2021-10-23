import React from "react";
import "./App.css";
import Header from "./components/Header";
import Recipe from "./components/RecipeList/Recipe";


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

        <section>
          <Recipe />
          <Recipe />
          <Recipe />
          <Recipe />
          <Recipe 
          title={this.props.title}
          subtitle={this.props.subtitle}
          nutriTable={this.props.nutriTable}
          autor={this.props.autor}
          recipeText={this.props.recipeText}
          />

        </section>
      </div>
    );
  }
}

export default App;
