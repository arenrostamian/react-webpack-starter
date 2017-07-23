import React, { Component } from 'react'

const Display = (props) => {
    if (props.display === 'Welcome Page'){
        return (
            <div>
                <h3>FUCK YEA BRO</h3>
            </div>
    )}
    if (props.display === 'Goodbye Page'){
        return (
            <div>
                <h3>NOPE</h3>
            </div>
        )}

}

export default Display