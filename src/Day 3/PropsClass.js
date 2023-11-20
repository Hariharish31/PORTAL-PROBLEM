import React from 'react'

class PropsClass extends React.Component{
    render()
    {
        return(
        <h1> My Name {this.props.name}</h1>)
    }
}

PropsClass.defaultProps={
    name:"GUNALAN"
}
export default PropsClass;
