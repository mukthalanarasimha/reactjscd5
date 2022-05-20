import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: false,
  }

  ChangeBackAndText = () => {
    this.setState(preState => ({isDarkMode: !preState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const BackgroundColor = isDarkMode ? 'isDark' : 'lightMode'
    const ButtonText = isDarkMode ? 'Dark Mode' : 'Light Mode'
    return (
      <div className={`bg_container ${BackgroundColor}`}>
        <div className="mini_container">
          <h1>Click To Change Mode</h1>
          <div>
            <button type="button" onClick={this.ChangeBackAndText()}>
              {ButtonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
