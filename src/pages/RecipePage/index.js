import React from "react";
import "./style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DATA from "../../assets/recipe-data";
import SelectedRecipe from "./SelectedRecipe";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class RecipePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      selectedRecipe: [],
    };
  }

  async componentDidMount() {
    const selectedRecipe = DATA.map((result) => {
      return {
        photo: result.image,
        title: result.title,
        subtitle: result.subtitle,
      };
    });
    this.setState({
      isLoading: false,
      selectedRecipe,
    });
  }

  render() {
    return (
      <div>
        <Header>
          <Link to="/">
            <button className="btnNav"> Início </button>
          </Link>
          <Link to="/register">
            <button className="btnNav"> Cadastro </button>
          </Link>
        </Header>

        {this.state.isLoading && "Loading..."}
        {!this.state.isLoading && (
          <>
            {DATA.map((item) => (
              <SelectedRecipe
                key={item.id}
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
                ingredients={item.ingredients}
                prepare={item.prepare}
                autor={item.autor}
                duration={item.duration}
                servings={item.servings}
              />
            ))}
          </>
        )}

        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
export default RecipePage;
