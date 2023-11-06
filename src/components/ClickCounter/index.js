// Write your code here
import {Component} from 'react'
import './index.css'
class Counter extends Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return(
      <div ClassName="container">
        <h1 ClassName="heading"> The Button has been clicked <span ClassName='counter-value'>{count}</span> times</h1>
        <p ClassName="para">click the button increase the count!</p>
        <div ClassName='button-container'>
          <button ClassName="button" onClick={this.onIncrement}>
            click me!
          </button>
        </div>
      </div>,
    )
  }
}
