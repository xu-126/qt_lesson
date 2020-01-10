import React from 'react';
import  {pathToRegexp}  from 'path-to-regexp'
import  Context from './context'

function matchPath(pathName,option) {
    // {path: ,exact:}
    const {path, exact = false, sensitive = false,strict = false } = option;
    // 由 Route 配置 生成 正则表达式
    const  regexp  = pathToRegexp(path, [], {
        end:exact, sensitive, strict
    })
    const match = regexp.exec(pathName)
    return match; // 返回 true or false
}

class Route extends React.Component {
    // path Component 
    // 和浏览器地址栏配对 location
    render(){
        const props = this.props ;
        return (<Context.Consumer>
            {
                (context) => {
                    const location = context.history.location;
                    const match = matchPath(location.pathname, props) // location.pathname 浏览器的关键路径
                    return (
                        <>
                           { match && this.props.children }  
                        </>
                    )
                }
            }
        </Context.Consumer>
        )
    }
        
}
export default Route