// import React from "react";
import './style.css'

// class RecipeList extends React.Component {
//   render() {
//     return <ul className="recipeList">{this.props.children}</ul>;
//   }
// }

const RecipeList = ({children}) => {
  return <ul className="recipeList">{children}</ul>;
}

export default RecipeList;
