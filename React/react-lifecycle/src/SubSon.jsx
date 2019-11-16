import React , { Component } from 'react'
import Context from './Context'
const { Consumer } = Context
class SubSon extends Component {
    render(){
        return (
            <div>SubSon
                <Consumer>
                    {/* {
                        (theme)=>{
                            return( 
                            <p style={{color:theme}}>ggg</p>)
                        }
                    } */}
                </Consumer>
            </div>
        )
    }
}
export default SubSon