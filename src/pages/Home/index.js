import React from "react";
import Header from "../../components/Header";
import Search from "../../components/Search";
import RecipeList from "../../components/RecipeList";
import Footer from "../../components/Footer";
import {Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      recipeList: [],
      info: {
        title: "",
        description: "",
      },
    };
    this.listData = [];
  }

  handleChange = (event) => {
    const text = event.target.value;
    console.log(text);

    const resultfilter = this.listData.filter((rec) => {
      return rec.title.toLowerCase().includes(text.toLowerCase());
    });
    this.setState({ recipeList: resultfilter });
  };

  async componentDidMount() {
    const response = await fetch("/api/allrecipes");
    const responseInfo = await fetch("/api/info");
    const data = await response.json();
    const dataInfo = await responseInfo.json();

    const recipeList = data.results.map((result) => {
      return {
        image: result.image,
        title: result.title,
        subtitle: result.subtitle,
      };
    });

    this.listData = recipeList;

    this.setState({
      isLoading: false,
      recipeList,
      info: {
        title: dataInfo.title,
        description: dataInfo.description,
      },
    });
  }

  goToRecipePage = (rec) => {
    this.props.history.push("/recipe", { rec });
  };

  render() {
    return (
      <>
        <Header>
          <Link to="/register">
            <button className="btnNav"> Cadastro </button>
          </Link>
          <Search onChange={this.handleChange} />
        </Header>

        <h1 className="main-title">R E C E I T A S</h1>

        {this.state.isLoading && "Loading..."}
        {!this.state.isLoading && (
          <RecipeList>
            {this.state.recipeList.map((item) => (
              <Link
                to={{
                  pathname: "/recipe",
                  state: { item },
                }}
              >
                
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  subtitle={item.subtitle}
                
              </Link>
            ))}
          </RecipeList>
        )}

        <Footer
          mainTitle={this.state.info.title}
          description={this.state.info.description}
        />
      </>
    );
  }
}

export default Home;
