import React from "react";
import Header from "../../components/Header";
import Search from "../../components/Search";
import RecipeList from "../../components/RecipeList";
import Recipe from "../../components/RecipeList/Recipe";
import Footer from "../../components/Footer";
import DATA from "../../assets/recipe-data";

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

  //Para buscar receitas no SearchBar
  handleChange = (event) => {
    const text = event.target.value; //pegar o valor digitado no input
    console.log(text);
    const resultfilter = this.todasAsReceitas.filter(
      (receita) => {
        const tituloSubtitulo = receita.title + receita.subtitle;
        return tituloSubtitulo.toLowerCase().includes(text.toLowerCase());
      },

      // const resultfilter = this.listData.filter((rec) => {
      //   //filtrando na lista de receitas quais delas contêm as letras digitadas
      //   return rec.name.includes(text);
      // });
      this.setState({ recipeList: resultfilter })
    ); //Pegando o resultado do filter e aplicando na lista.
  };

  async componentDidMount() {
    //Para buscar os dados das receitas e info (title e description) via api:
    //1. Busca dado (fetch).
    //2. Traduz o dado (json)
    //3. Seleciona os dados que quer e passa por eles (map).
    //4. Atualiza estado, atualizando o lifecycle (setState logo abaixo).
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

  render() {
    return (
      <div>
        <Header>
          <button className="btnNav" onClick={this.props.onChangePageRegister}>
            Cadastro
          </button>
          <Search onChange={this.handleChange} />
        </Header>

        <h1 className="main-title">R E C E I T A S</h1>

        {this.state.isLoading && "Loading..."}
        {!this.state.isLoading && (
          <RecipeList>
            {DATA.map((item) => (
              <Recipe
                key={item.id}
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
                onSelect={(e) => this.props.onChangePageRecipe(item)}
              />
            ))}
          </RecipeList>
        )}

        <Footer
          mainTitle={this.state.info.title}
          description={this.state.info.description}
        />
      </div>
    );
  }
}

export default Home;
