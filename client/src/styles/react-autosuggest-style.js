const reactAutosuggestStyle = {
  input: {
    backgroundColor: 'white',
    border: '1px solid white',
    color: '#2a333c',
    fontSize: '15px',
    margin: '5px 0 5px 0',
    padding: '10px 20px',
    width: '200px'
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
    width: '200px',
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
  },
  suggestionName: {
    fontSize: '15px'
  },
  suggestionDescription: {
    fontSize: '10px'
  }
}

export default reactAutosuggestStyle
