const { Component } = require("react");

class ComponentInput extends Component {
  constructor() {
    super()
    this.state = {
      username: 'a',
      usertext: '1'
    }
  }

  handleClick(e) {
    if(this.props.onSubmit) {
      let { username , usertext } = this.state
      this.props.onSubmit({ username , usertext })
    }
    e.preventDefault()
  }

  handleOnChange(e) {
    console.log(e)
    if(e.target.type === "textarea") {
      this.setState({
        usertext: e.target.value
      })
    }
    if(e.target.type === "text") {
      this.setState({
        username: e.target.value
      })
    }
  }

  render() {
    this.el = (
      <div className="componentInput">
        <div className="username">
          <span>用户名：</span>
          <input type="text" className="textInput" value={this.state.username} onChange={this.handleOnChange.bind(this)}/>
        </div>
        <div className="usertext">
          <span>评论内容：</span>
          <textarea type="text" className="textInput" value={this.state.usertext} onChange={this.handleOnChange.bind(this)}/>
        </div>
        <button className="submit" onClick={this.handleClick.bind(this)}>发布</button>
      </div>
      
    )
    return this.el
  }
}

export default ComponentInput