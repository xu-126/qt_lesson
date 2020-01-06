import React, { createContext, Component } from 'react'
const Context = createContext();

class EnhanceProvider extends Component {
    // state {

    // }
    constructor(props) {
        super(props);
        this.state = {
            state: props.store.getState(),
            getState: props.store.getState,
            dispatch: props.store.dispatch
        }
        props.store.subscribe(() => {
            this.setState({
                state: props.store.getState()
            })
        })
    }
    render() {
        return (<Context.Provider value={this.state}>
            {this.props.children}
        </Context.Provider>
        )
    }
}
// 引用 react 提供的 Provide
export const Provider = EnhanceProvider
export const Consumer = Context.Consumer


