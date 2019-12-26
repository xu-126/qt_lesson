import React, { Component,useState,useMemo,useEffect } from 'react';
class autoBind extends Component {
    state = {  }
    render() { 
        const { vmodel,ctx } = this.props
        return ( 
            <>
                {
                    // this.props.children
                    React.cloneElement(this.props.children,{ value : ctx.state[vmodel],onChange: (e) => {
                        ctx.setState({
                            [vmodel] : e.target.value
                        })
                    }})
                }
            </>
         );
    }
}
 
export default autoBind;