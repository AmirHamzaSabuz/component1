import React from 'react';

import Show from './Show';
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: "",
            showValue:""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event){
        this.setState({value: event.target.value});

    }

    handleClick=(event)=>{
        this.setState({showValue: "Hi " + this.state.value});
    }

    render(){
        return(
            <div>
                <label className="label" htmlFor="name">Name </label>
                <input
                    id="name"
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <br/>
                <button onClick={this.handleClick} style={{backgroundColor: `blue`, color:`white` }}>Click me</button>
                <Show
                    upperValue= {this.state.showValue.toUpperCase()}
                    lowerValue={this.state.showValue.toLowerCase()}
                />
            </div>
        );
    }
}
export default App;