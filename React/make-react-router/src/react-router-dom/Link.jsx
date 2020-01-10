import React from 'react';
import { _RouterContext as RouterContext } from './index'
export default class Link extends React.Component {
    render(){
        return (
            <RouterContext.Consumer>
            {
                (context) => {
                    const { history } = context
                    return (
                        <a href={this.props.history} onClick={(event) => {
                            event.preventDefault();
                            history.push(this.props.to)
                        }}>
                            {this.props.children}
                        </a>
                    )
                }
            }
        </RouterContext.Consumer>
        )
    }
}