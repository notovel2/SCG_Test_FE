import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import TopBar from './components/TopBar/TopBar';
import CVPage from './screens/CVPage/CVPage';
import HomePage from './screens/HomePage/HomePage';
import SCGPage from './screens/SCGPage/SCGPage';
import SearchPlaces from './screens/SearchPlaces/SearchPlaces';

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
        <Route path='/scg' component={SCGPage}/>
        <Route path='/places' component={SearchPlaces}/>
      </Switch>
    )
  }
}

export default App;
