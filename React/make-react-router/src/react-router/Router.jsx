import React from 'react';
import Context from './context'
class Router extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            location: props.history.location
        }
        props.history.listen(newLocation => {
            this.setState({
                location: newLocation
            })
        })
    }
    render(){
        const { history }  = this.props
        return (
            // history 包含浏览器所有的历史信息
            <Context.Provider value={{history}} {...this.props}>  
                
            </Context.Provider>
        )
    }
}
export default Router