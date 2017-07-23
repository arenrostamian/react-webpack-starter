import 'react-hot-loader/patch'
import React, { Component } from 'react'
import NavBar from './components/NavBar.js'
import Display from './components/Display.js'
import axios from 'axios'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      display: 'Welcome Page',
      buttonText: 'Log-Out',
      data: {}
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    if(this.state.display === 'Welcome Page'){
      this.setState({
        display: 'Goodbye Page',
        buttonText: 'Log In'
      })
      
    }
    if(this.state.display === 'Goodbye Page'){
      this.setState({
        display: 'Welcome Page',
        buttonText: 'Log Out'
      })
    }
  }

  getData () {
    axios.get('http://www.ykyfw.net/messages') 
      .then((response) => {
        this.setState({
          data: response
        })
        console.log(response);
      })
  }
  
  componentDidMount() {
    this.getData()
  }


  render() {
  return (
    <div>
      <NavBar handleClick={this.handleClick} buttonText={this.state.buttonText}/>
      <Display display={this.state.display} />
      {console.log('SHIT ASS ' + JSON.stringify(this.state.data))}
    </div>
    )
  }
}

export default App
