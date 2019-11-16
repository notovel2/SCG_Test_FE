import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import TopBar from './components/TopBar';
import CVPage from './screens/CVPage/CVPage';
import HomePage from './screens/HomePage/HomePage';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TopBar/>
        {this.renderBody()}
      </div>
    );
  }

  renderBody() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/cv" component={CVPage}/>
      </Switch>
    )
  }
}

export default App;
