//1. Importar React
import React from "react";
import ControlItem from "./components/ControlItem";

const CONTROL_ITEMS = [
  { value: 50, title: "Volume" },
  { value: 50, title: "Treble" },
  { value: 50, title: "MID" },
  { value: 50, title: "BASS" },
]; //Array de objetos. Está em letra maiúscula porque não será alterado

//2. Declarar classe componente
class App extends React.Component {
  //3. Sobrescrever o render

  //Utilizar sempre o map para renderizar o array! Pega o objeto e sai um jsx. 
  render() {
    return (
      <>
        <ul>
          {CONTROL_ITEMS.map((item) => ( //Substituímos "item" desta linha <ControlItem value={item.value} title={item.title} /> por:
            <ControlItem value={item.value} title={item.title} />
          ))}
        </ul>
      </>
    );
  }
}

//4. Exportar componente
export default App;
