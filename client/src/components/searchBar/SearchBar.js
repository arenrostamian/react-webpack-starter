import React, { Component } from 'react'
import { connect } from 'react-redux'

/* * Utils * */
import axios from 'axios'
import { withRouter } from 'react-router'
import { searchSuggestions, getPackageInfo, getPackagesByKeyword } from '../../utils/npmSearch'

/* * Actions * */
import { setSearchResults } from '../../store/actions'

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

const { suggestionName, suggestionDescription } = reactAutosuggestStyle

const getSuggestionValue = (suggestion) => suggestion.name

const renderSuggestion = ({ name, description }) => (
  <div>
    <div style={suggestionName}>{name}</div>
    <div style={suggestionDescription}>{description}</div>
  </div>
)

class SearchBar extends Component {
  constructor () {
    super()
    this.state = {
      searchType: 'name',
      searchTerm: '',
      id: null,
      suggestions: [],
      hover: false
    }
    this.setSearchType = this.setSearchType.bind(this)
    this.onChange = this.onChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this)
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this)
    this.onSuggestionSelected = this.onSuggestionSelected.bind(this)
    /* * testing dynamoDB * */
    this.ddbTest = this.ddbTest.bind(this)
  }

  setSearchType (e, { value }) {
    this.setState({ searchType: value })
  }

  onChange (e, { newValue, method }) {
    this.setState({ searchTerm: newValue })
  }

  handleSearch () {
    const { setSearchResults, history } = this.props
    const { searchType, searchTerm } = this.state
    if (searchType === 'name') {
      getPackageInfo(searchTerm)
      .then(selectedPackage => setSearchResults({ selectedPackage }))
      .catch(error => console.log(error))
      history.push('/package-details')
    } else {
      getPackagesByKeyword(searchTerm)
      .then(packages => setSearchResults({ }))
    }
  }

  onSuggestionsFetchRequested ({ value }) {
    searchSuggestions(value)
    .then(suggestions => this.setState({ suggestions }))
    .catch(error => console.log(error))
  }

  onSuggestionsClearRequested () {
    this.setState({ suggestions: [] })
  }

  onSuggestionSelected (e, { suggestion }) {
    const { setSearchResults, history } = this.props
    setSearchResults({ selectedPackage: suggestion })
    history.push(`/package-details/${suggestion.name}`)
  }

  /* * testing dynamoDB * */
  ddbTest () {
    const params = {
      packageName: 'axios',
      detailsToUpdate: {
        vote: 1,
        comment: {
          username: 'tupac',
          text: 'yas queen',
          timestamp: Date.now(),
          score: 1
        }
      }
    }
    axios.get('/update-package', { params })
    .then(res => console.log('ddb test res is ', res))
    .catch(error => console.log('oops error ', error))
  }

  render () {
    const { searchTerm, suggestions } = this.state
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
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          onSuggestionSelected={this.onSuggestionSelected}
          inputProps={inputProps}
          onEnter={this.onEnter}
        />
        <Button onClick={this.ddbTest}>testing</Button>
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

export default withRouter(connect(null, { setSearchResults })(SearchBar))
