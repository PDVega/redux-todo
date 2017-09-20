import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

/*import TodoList from './TodoList'
import Home from './Home'
import About from './About'
import TodoDetail from './TodoDetail'
*/

import store from '../store'
import { increment, decrement } from '../actions/counterAction'

class App extends Component {
  constructor(){
    super()
    this.state = {
      _counter: 0,
      _step: 1
    }

    store.subscribe(() => {
      this.setState({
        _counter: store.getState().counter
      })
    })
  }

  handleChange(e){
    this.setState({
      _step: e.target.value
    })
  }

  render() {
    return (

      <div style={style.container}>
        <h1>{ this.state._counter }</h1>
      <input type="number" onChange={ (e) => this.handleChange(e) } />
        <button
          onClick={ () => store.dispatch(increment(this.state._step)) }
        >
          Increment
        </button>
        <button onClick={ () => store.dispatch(decrement) }>Decrement</button>
      </div>

    )
  }
}



const style ={
  box: {
    width: '48%',
    float: 'left',
    height: '400px',
    border: '1px solid #eee'
  },

  container: {
    width: '300px',
    margin: '50px auto',
  },

  menu: {
    display: 'inline-block'
  }

}
export default App;




      /*<Router>
        <div className="App">
          <div className="App-header">
            <h2>Welcome to React</h2>
          </div>
          <ul style={style.menu}>
            <li><Link to="/"> Home </Link></li>
            <li><Link to="/todos"> Todos </Link></li>
            <li><Link to="/about"> About </Link></li>
          </ul>
          <div style={style.box}>
          <Route path="/todos" component={TodoList}/>
            <Route exact path="/" component={Home} />
          </div>
          <div style={style.box}>
            <Route exact path="/about" component={About}/>
            <Route exact path="/todos/:todoName" component={TodoDetail}/>
          </div>
        </div>
      </Router>*/
