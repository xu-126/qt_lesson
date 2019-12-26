import React, { Component } from 'react';

class Header extends Component {
    componentWillMount(){
        console.log('componentWillMount')
    }
    buy(){
        console.log(123)
    }
    render() { 
        return ( 
            <div>
                hello server!!!
                <button onClick={this.buy}>buy</button>
            </div>  
         );
    }
}
 
export default Header;