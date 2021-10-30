import React from "react";
import './style.css'

class NutriTable extends React.Component {
  render() {
    return (

        <table className="nutri-info">
          <thead >
            <th colspan="2" className="thead">{this.props.foodName}</th>
          </thead>
          <tbody>
            <tr>
              <td>Valor energético</td>
              <td>{this.props.calories}</td>
            </tr>
            <tr>
              <td>Carboidratos</td>
              <td>{this.props.carbs}</td>
            </tr>
            <tr>
              <td>Proteína</td>
              <td>{this.props.ptn}</td>
            </tr>
            <tr>
              <td>Gorduras totais</td>
              <td>{this.props.totalfat}</td>
            </tr>
            <tr>
              <td>Gorduras saturadas</td>
              <td>{this.props.gsat}</td>
            </tr>
            <tr>
              <td>Gorduras trans</td>
              <td>{this.props.trans}</td>
            </tr>
            <tr>
              <td>Fibra Alimentar</td>
              <td>{this.props.fiber}</td>
            </tr>
            <tr>
              <td>Sódio</td>
              <td>{this.props.sodium}</td>
            </tr>
          </tbody>
        </table>
      
    );
  }
}
export default NutriTable;
