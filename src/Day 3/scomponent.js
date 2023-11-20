import React ,{Component}from "react";

export default class Scomponent extends Component{
    state={name:"SKCET",
    place:"CBE"
}
render()
{
    return(
        <div>
            <h1>I am studing at{this.state.name} place {this.state.place}</h1>
            <button onClick={()=>{this.setState({name:"Atria"})}}>Click </button>
        </div>
    )
}
}