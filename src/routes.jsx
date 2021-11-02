import { Component } from "react";
import Home from "./pages/Home";
import RecipePage from "./pages/RecipePage";
import RegisterPage from "./pages/RegisterPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// class Router extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   render() {
//     return (
//       <BrowserRouter>
//         <Switch>
//           <Route exact path="/recipe">
//             <RecipePage />
//           </Route>
//           <Route exact path="/register">
//             <RegisterPage />
//           </Route>
//           <Route path="/">
//             {/* Ele inclui todos os caminhos que contêm a barra "/". Portanto, se colocar a Home com path="/" como primeira Route, ele vai sempre mandar para Home. Podemos resolver usando exact ou colocando a Home como última Route. Precisamos sempre colocar exact path="nomeDaPage" porque pode haver subpáginas. Ex.: page.com/register/datails. A leitura é feita em cascata, de cima para baixo.*/}
//             <Home />
//           </Route>
//         </Switch>
//       </BrowserRouter>
//     );
//   }
// }

const Router = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/recipe">
        <RecipePage />
      </Route>
      <Route exact path="/register">
        <RegisterPage />
      </Route>
      <Route path="/">
        {/* Ele inclui todos os caminhos que contêm a barra "/". Portanto, se colocar a Home com path="/" como primeira Route, ele vai sempre mandar para Home. Podemos resolver usando exact ou colocando a Home como última Route. Precisamos sempre colocar exact path="nomeDaPage" porque pode haver subpáginas. Ex.: page.com/register/datails. A leitura é feita em cascata, de cima para baixo.*/}
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>
  )
}
export default Router;
