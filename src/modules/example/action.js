export const exampleAction = sum => dispatch => {
  dispatch({
    type: 'EXAMPLE_ACTION',
    payload: sum + 1,
  })
}