import React from "react";
import Header from "../../components/Header";
import Search from "../../components/Search";
import RecipeList from "../../components/RecipeList";
import Recipe from "../../components/RecipeList/Recipe";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      recipeList: [
        {
          photo: "",
          title: "",
          subtitle: "",
        },
      ],
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
  render() {
    return (
      <>
        <Header />

        <Search onChange={this.handleChange} />

        {this.state.isLoading && "Loading..."}
        {!this.state.isLoading && (
          <RecipeList>
            {this.state.recipeList.map((rec) => (
              <Recipe
                photo={rec.photo}
                title={rec.title}
                subtitle={rec.subtitle}
              />
            ))}
          </RecipeList>
        )}


      </>
    );
  }

  //   render() {
  //     return (
  //     <>
  //     <Header title="DEVs">
  //         <button onClick>Receitas</button>

  //     </>
  //     );
  //   }
}

export default Home;
