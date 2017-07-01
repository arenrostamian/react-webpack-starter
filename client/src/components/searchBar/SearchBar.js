import React, { Component } from 'react'
import { connect } from 'react-redux'
import packages from '../../../assets/mockData'

/* * Components * */
import Autosuggest from 'react-autosuggest'

/* * Styles * */
import style from '../../styles/nav-bar.css'
import theme from './theme'

const getSuggestionValue = (suggestion) => suggestion.name

const renderSuggestion = (suggestion) => (
  <div
    style={{color: suggestion.color}}>
    {suggestion.name}
  </div>
)

class SearchBar extends Component {
  constructor () {
    super()
    this.state = {
      value: '',
      id: null,
      suggestions: [],
      hover: false
    }
    this.getSuggestions = this.getSuggestions.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this)
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this)
    this.onSuggestionSelected = this.onSuggestionSelected.bind(this)
  }

  onChange ({ newValue }) {
    const { getStateThroughProps } = this.props
    getStateThroughProps(false)
    this.setState({ value: newValue })
  }

  onSuggestionsFetchRequested ({ value }) {
    this.setState({
      suggestions: this.getSuggestions(value)
    })
  }

  onSuggestionsClearRequested () {
    this.setState({ suggestions: [] })
  }

  getSuggestions (value) {
    const inputValue = value.trim().toLowerCase()
    const inputLength = inputValue.length

    return inputLength === 0 ? [] : packages.filter(pckg => {
      return pckg.name && pckg.name.toLowerCase().slice(0, inputLength) === inputValue
    })
  }

  onSuggestionSelected ({ suggestion }) {
    const { name } = suggestion
    const { getStateThroughProps } = this.props
    getStateThroughProps(true, displayName, id, categoryID)
  }

  render () {
    const { value, suggestions } = this.state
    const inputProps = {
      placeholder: 'om nom nom',
      value,
      onChange: this.onChange
    }
    return (
      <div className={style.search}>
        <Autosuggest
          theme={theme}
          multiSection
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          onSuggestionSelected={this.onSuggestionSelected}
          inputProps={inputProps}
          />
      </div>
    )
  }
}

// const mapStateToProps = ({ user, friends }) => {
//   return { user, friends }
// }

export default SearchBar
