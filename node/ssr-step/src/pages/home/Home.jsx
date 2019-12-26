import React, { Component } from 'react';
import {
  connect
} from 'react-redux';
import { 
  getCommentList
 } from '../../store/action/homeAction';
class Home extends Component {
  // 组件已经挂载
  componentDidMount() {
    this.props.getCommentList();
  }
  render() {
    const { commentList } = this.props;
    return ( 
      <div>
        home
        {
          commentList.map((comment, i) => {
            return (
            <li key={i}>
              {
              comment.content
              }</li>
            )
          })
        }
      </div>
     );
  }
}
/**
 * 服务端返回的页面 需要带有数据
 * 数据需要：dispatch -> 触发
 * 客户端: mapDispatchToprops -> 交给组件
 * 服务端：把这个dispatch 放在 loadData 静态属性上面
 * vue:
 * {
 * data: {},
 * asyncData() {}
 * }
 */
Home.loadData = function(store) {
  // 所有的 loadData 都是 promise , promise.all[所有的Promise]
  // getCommentList 是一个 action
  // dispatch ???
  return store.dispatch(getCommentList());
}
const mapDispatchToProps = (dispatch) => {
  return {
    getCommentList: () => {
      dispatch(getCommentList())
    }
  }
}
const mapStateToProps = (state) => {
  return {
    commentList: state.home.commentList
  }
}
export default connect(mapStateToProps,
  mapDispatchToProps)(Home);
