import React, { Component } from 'react'


class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render () {
        return (
            <div>
                <h3>This is nav bar</h3>
                <button onClick={this.props.handleClick}>{`${this.props.buttonText}`}</button>
            </div>
        )
    }
}

export default NavBar;


