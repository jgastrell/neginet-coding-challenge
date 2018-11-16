export default (state = {
  number: 0,
}, action) => {
  switch (action.type) {
    case 'EXAMPLE_ACTION':
      return {
        number: action.payload
      }
    default:
      return state
  }
}