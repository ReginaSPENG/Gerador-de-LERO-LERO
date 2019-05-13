import React,{Component} from 'react';

class Campo extends Component{
state={
    texto:''
}
atualizatexto=(event)=>{
const valor = event.target.value;
this.setState({texto:valor})
}

    render(){
        return(
            <div>
                <input type="text" value={this.state.texto} onChange={this.atualizatexto}/>
                <p>{this.state.texto}</p>
            </div>

        )
    }
}
export default Campo

