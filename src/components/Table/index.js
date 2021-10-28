import React from "react";
import './style.css'

class Table extends React.Component {
  render() {
    return (

        <table className="nutri-info">
          <thead >
            <th colspan="2" className="thead">Morango</th>
          </thead>
          <tbody>
            <tr>
              <td>Valor energético</td>
              <td>50 kcal</td>
            </tr>
            <tr>
              <td>Carboidratos</td>
              <td>50 g</td>
            </tr>
            <tr>
              <td>Proteína</td>
              <td>30 g</td>
            </tr>
            <tr>
              <td>Gorduras totais</td>
              <td>50 g</td>
            </tr>
            <tr>
              <td>Gorduras saturadas</td>
              <td>50 g</td>
            </tr>
            <tr>
              <td>Gorduras trans</td>
              <td>0 g</td>
            </tr>
            <tr>
              <td>Fibra Alimentar</td>
              <td>0 g</td>
            </tr>
            <tr>
              <td>Sódio</td>
              <td>0 g</td>
            </tr>
          </tbody>
        </table>
      
    );
  }
}
export default Table;
