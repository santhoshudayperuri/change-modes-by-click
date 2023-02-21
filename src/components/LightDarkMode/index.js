// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {cc: true}

  onLi = () => {
    this.setState({cc: false})
  }

  onDa = () => {
    this.setState({cc: true})
  }

  render() {
    const {cc} = this.state
    return (
      <div className="container">
        {cc ? (
          <div className="box">
            <h1>Click to Change Mode</h1>
            <div>
              <button onClick={this.onLi}>Light Mode</button>
            </div>
          </div>
        ) : (
          <div className="box1">
            <h1>Click to Change Mode</h1>
            <div>
              <button onClick={this.onDa}>Dark Mode</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default LightDarkMode
