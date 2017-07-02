import React, { Component } from 'react'
import { connect } from 'react-redux'
import packages from '../../../assets/mockData'

/* * Actions * */
import { setSearchResults } from '../../store/modules/search'

/* * Components * */
import Autosuggest from 'react-autosuggest'

/* * Styles * */
import style from '../../styles/nav-bar.css'
import autosuggestStyle from './autosuggest-style'

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
    this.onChange = this.onChange.bind(this)
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this)
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this)
    this.getSuggestions = this.getSuggestions.bind(this)
    this.onSuggestionSelected = this.onSuggestionSelected.bind(this)
  }

  onChange (e, { newValue }) {
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

  onSuggestionSelected (e, { suggestion }) {
    const { packageID } = suggestion
    const { setSearchResults } = this.props
    setSearchResults({packageID})
  }

  render () {
    const { value, suggestions } = this.state
    const inputProps = {
      placeholder: 'nom',
      value,
      onChange: this.onChange
    }
    return (
      <div className={style.search}>
        <Autosuggest
          theme={autosuggestStyle}
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

export default connect(null, { setSearchResults })(SearchBar)
