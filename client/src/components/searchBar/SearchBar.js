import React, { Component } from 'react'

/* * Components * */
import Autosuggest from 'react-autosuggest'
import { Dropdown, Button } from 'semantic-ui-react'

/* * Styles * */
import style from '../../styles/nav-bar.css'
import { searchDropdownStyle } from '../../styles/semantic-style'
import reactAutosuggestStyle from '../../styles/react-autosuggest-style'

const { suggestionName, suggestionDescription } = reactAutosuggestStyle

const renderSuggestion = ({ name, description }) => (
  <div>
    <div style={suggestionName}>{name}</div>
    <div style={suggestionDescription}>{description}</div>
  </div>
)

const searchOptions = [
  { key: 'name', text: 'name', value: 'name' },
  { key: 'keyword', text: 'type', value: 'keyword' }
]

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchType: 'name',
      searchTerm: '',
      suggestions: []
    }
    this.setSearchType = this.setSearchType.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this)
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this)
  }

  setSearchType (e, { value }) {
    this.setState({ searchType: value })
  }

  onChange (e, { newValue, method }) {
    this.setState({ searchTerm: newValue })
  }

  onSuggestionsFetchRequested ({ value }) {
    const { searchSuggestions } = this.props
    searchSuggestions(value)
    .then(suggestions => this.setState({ suggestions }))
    .catch(error => console.log(error))
  }

  onSuggestionsClearRequested () {
    this.setState({ suggestions: [] })
  }

  render () {
    const { searchTerm, suggestions } = this.state
    const { handleSuggestionSelected } = this.props
    const inputProps = {
      placeholder: 'nom',
      value: searchTerm,
      onChange: this.onChange,
      type: 'search'
    }
    return (
      <div className={style.search}>
        <Autosuggest
          theme={reactAutosuggestStyle}
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={(suggestion) => suggestion.name}
          renderSuggestion={renderSuggestion}
          onSuggestionSelected={handleSuggestionSelected}
          inputProps={inputProps}
          onEnter={this.onEnter}
        />
        <Dropdown fluid selection
          style={searchDropdownStyle}
          options={searchOptions}
          onChange={this.setSearchType}
          placeholder='nom'
          defaultValue='name'
          />
      </div>
    )
  }
}

export default SearchBar
