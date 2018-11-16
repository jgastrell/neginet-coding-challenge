import {
  connect
} from 'react-redux'
import Body from './Body'

import {
  exampleAction
} from '../../modules/example/action'

const mapStateToProps = state => ({
    number: state.example.number
  })

const mapDispatchToProps = dispatch => ({
  addOne: num => dispatch(exampleAction(num))
})

export default connect(mapStateToProps, mapDispatchToProps)(Body)