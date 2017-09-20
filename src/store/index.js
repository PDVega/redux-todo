import { createStore, combineReducer } from 'redux'
import counterReducer from '../reducers/counterReducer'
// import userReducer from '../reducers/userReducer'

/*const rootReducer = combineReducer({
  hitung: counterReducer,
  user: userReducer
})
const store = createStore(rootReducer)*/

const store = createStore(counterReducer)
export default store
