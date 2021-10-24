import React from "react";
import './style.css';
import Recipe from "./Recipe";

class RecipeList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.children}
            </ul>
        )
    }
}

export default RecipeList;