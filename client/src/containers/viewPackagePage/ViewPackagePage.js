import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

class ViewPackagePage extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    const { selectedPackage } = this.props.search
    console.log('selectedPackage', selectedPackage)
    return (
      <div>
        <h1>{selectedPackage.name}</h1>
        <h3>{selectedPackage.description}</h3>
        <h3>{selectedPackage.comments}</h3>
      </div>
    )
  }
}

const mapStateToProps = ({ search }) => {
  return { search }
}

export default withRouter(connect(mapStateToProps, null)(ViewPackagePage))
