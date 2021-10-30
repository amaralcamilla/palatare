import React from "react";
import Header from "../../components/Header";
import Search from "../../components/Search";
import RecipeList from "../../components/RecipeList";
import Recipe from "../../components/RecipeList/Recipe";
import Footer from "../../components/Footer";
import DATA from "../../assets/recipe-data";

class Home extends React.Component {

  // handleChange = (event) => {
  //   const text = event.target.value
  //   DATA.filter((recipes) => {
  //   return recipes.title.toLowerCase().includes(text.toLowerCase());
  //   })
  //   this.setState({recipes: filterData})
  //   }


  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      recipeList: [],

    };
  }
  handleChange = (event) => {
    const text = event.target.value; //pegar o valor digitado no input
    const resultfilter = this.state.recipeList.filter((dev) => {
      //filtrando na lista de receitas quais delas contêm as letras digitadas
      return dev.name.includes(text);
    });
    this.setState({ recipeList: resultfilter }); //Pegando o resultado do filter e aplicando na lista.
  };

  async componentDidMount() {
    const response = await fetch("/api/allrecipes");
    const data = await response.json();

    const recipeList = data.results.map((result) => {
      return {
        photo: result.image,
        title: result.title,
        subtitle: result.subtitle,
      };
    });
    this.setState({
      isLoading: false,
      recipeList,
    });
  }

  render() {
    return (

<div>
        <Header />

        <h1 className="main-title">R E C E I T A S</h1>

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



        <Footer />
      </div>

      // <>
      //   <Header />

      //   <Search onChange={this.handleChange} />

      //   {this.state.isLoading && "Loading..."}
      //   {!this.state.isLoading && (
      //     <RecipeList>
      //       {this.state.recipeList.map((rec) => (
      //         <Recipe
      //           photo={rec.photo}
      //           title={rec.title}
      //           subtitle={rec.subtitle}
      //         />
      //       ))}
      //     </RecipeList>
      //   )}
      // </>
    );
  }
}

export default Home;
