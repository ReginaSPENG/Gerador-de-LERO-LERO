import React, { Component } from 'react';
import listafrases from "./frases.json"

class Lero extends Component {
    constructor(props) {
        super(props);
        console.log(Math.trunc(Math.random() * 10));

        this.state = {
            texto: ''
        }
    }

    atualizatexto = () => {
        let indice = (Math.trunc(Math.random() * 10));
        let novafrase = listafrases[indice].frases;
        this.setState({
            texto: novafrase
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.atualizatexto}>CLIQUE AQUI    </button>
                <p>{this.state.texto}</p>
            </div>

        )
    }
}
export default Lero


//<p>{this.state.texto.value}</p>
