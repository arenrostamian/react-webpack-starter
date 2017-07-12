import React, { Component } from 'react'
import { connect } from 'react-redux'
import { packages } from '../../../assets/mockData'

/* * Utils * */
import axios from 'axios'

/* * Actions * */
import { setSearchResults } from '../../store/modules/search'

/* * Components * */
import Autosuggest from 'react-autosuggest'
import { Dropdown, Button } from 'semantic-ui-react'

/* * Styles * */
import style from '../../styles/nav-bar.css'
import { searchDropdownStyle } from '../../styles/semantic-style'
import reactAutosuggestStyle from '../../styles/react-autosuggest-style'

const searchOptions = [
  { key: 'name', text: 'name', value: 'name' },
  { key: 'keyword', text: 'type', value: 'keyword' }
]

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
      searchType: 'name',
      value: '',
      id: null,
      suggestions: [],
      hover: false
    }
    this.setSearchType = this.setSearchType.bind(this)
    this.onChange = this.onChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this)
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this)
    this.getSuggestions = this.getSuggestions.bind(this)
    this.onSuggestionSelected = this.onSuggestionSelected.bind(this)
  }

  setSearchType (e, { value }) {
    this.setState({ searchType: value })
  }

  onChange (e, { newValue, method }) {
    this.setState({ value: newValue })
  }

  handleSearch () {
    const { searchType, value } = this.state
    axios.get('/api/npm/search', {
      params: { searchType, value }
    })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
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
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          onSuggestionSelected={this.onSuggestionSelected}
          inputProps={inputProps}
          onEnter={this.onEnter}
        />
        <Button onClick={this.handleSearch}>search</Button>
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
// const mapStateToProps = ({ user, friends }) => {
//   return { user, friends }
// }

export default connect(null, { setSearchResults })(SearchBar)
