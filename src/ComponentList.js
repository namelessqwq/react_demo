const { Component } = require("react");



class ComponentList extends Component {
  static defaultProps = {
    comments: []
  }
  render() {
    // const comments = [
    //   { username: 'a', usertext: 'a1' },
    //   { username: 'b', usertext: 'b1' },
    //   { username: 'c', usertext: 'c1' },
    // ]
    return (
      <div>
        {this.props.comments.map((comment, i) => {
          return (
            <div key={i} className="comment">
              <span className="name">{comment.username}</span> : {comment.usertext}
            </div>
          )
        })}
      </div>
    )
  }
}

export default ComponentList