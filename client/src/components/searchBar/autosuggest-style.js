const autosuggestStyle = {
  input: {
    backgroundColor: 'transparent',
    border: 'white',
    color: '#2a333c',
    fontSize: '15px',
    padding: '10px 20px'
  },
  inputFocused: {
    outline: 'none'
  },
  inputOpen: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  suggestionsContainer: {
    display: 'none'
  },
  suggestionsContainerOpen: {
    display: 'block',
    backgroundColor: 'pink',
    position: 'absolute',
    color: '#2a333c',
    fontSize: '15px',
    border: 'transparent',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    zIndex: 2
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none'
  },
  suggestion: {
    cursor: 'pointer',
    padding: '10px 20px'
  },
  suggestionHighlighted: {
    color: '#c12127'
  }
}

export default autosuggestStyle
