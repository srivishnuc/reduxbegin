import React from 'react'
import {connect} from 'react-redux'
import {Toggle} from '../actions'

const mapStateToProps = (state) => 

        (  {   
      toggle : state.toggle.isLogged
    } )


const mapDispatchToProps = dispatch =>(
    {
        Toggle : () => dispatch(Toggle())
    }
)

class List extends React.Component{

    handleClick = e =>{
        e.preventDefault();
        this.props.Toggle()
    }

render(){

    return(

        <div>
            <button  onClick = { this.handleClick }> ON/OFF</button>
            <h2> Is Logged : { this.props.toggle?"TRUE":"FALSE" }</h2>
        </div>
    )
}


}



export default connect(mapStateToProps,mapDispatchToProps)(List)