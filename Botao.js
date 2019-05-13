import React from 'react';



// 2 jeitos de criar component:
// 1 Classe

class Botao extends React.Component {
    state={
        acumulador:0,
    };
    adicionar =()=>{
 const valorAntigo= this.state.acumulador;
 this.setState({
     acumulador:valorAntigo +1,

 })
   
  

    }
    render() {
       
        return (
     
        <button onClick={this.adicionar}>{this.state.acumulador}</button>

       
       
        );
    }


}
export default Botao;