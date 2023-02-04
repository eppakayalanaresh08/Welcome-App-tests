/* eslint-disable no-undef */
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  // eslint-disable-next-line react/no-unused-state
  state = {isWelcome: false}

  onWelcome = () => {
    this.setState(preState => ({isWelcome: !preState.isWelcome}))
  }

  onGetClick = () => {
    const {isWelcome} = this.state
    return isWelcome ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.onGetClick()
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thanks you! Happy Learning</p>
        <button
          className="button-subscribe"
          type="button"
          onClick={this.onWelcome}
        >
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
