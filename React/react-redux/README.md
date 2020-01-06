# redux 的实现
React作为一个组件化开发框架，组件之间存在大量通信，我们创建一个store.js文件，然后直接在里边存放公共的state的话容易误操作、可读性差；
redux 为我们提供了一种管理公共状态的方案
1. getState()
2. dispatch(action)  reduder()
3. subscribe()

# react-redux 的实现
react-redux 提供了一种合并操作的方案，react-redux提供Provider和connect两个API
1. Provider 组件 
将store放进this.context里，省去了import这一步，完成Provider后，我们就能在组件中通过this.context.store这样的形式取到store，不需要再单独import store。
2. connect 组件 
将getState、dispatch合并进了this.props，并自动订阅更新。connect接收mapStateToProps、mapDispatchToProps两个方法，然后返回一个高阶函数，这个高阶函数接收一个组件，返回一个高阶组件（其实就是给传入的组件增加一些属性和功能）connect根据传入的map，将state和dispatch(action)挂载子组件的props上
