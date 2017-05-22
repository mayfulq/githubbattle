import React from 'react';
import Popular from './Popular';
import 
{ BrowserRouter as Router,
  Route,
  Switch
}   from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Battle from './Battle';
import NotFound from './NotFound';
import Results from './Results';

class App extends React.Component{
    render(){
        return(
          <Router>
             <div className="container">
                <Nav />
                <Switch>
                    <Route exact path='/githubbattle/dist/' component={Home} />
                    <Route exact path='/githubbattle/dist/battle' component={Battle} />
                    <Route path='/githubbattle/dist/battle/results' component={Results} />
                    <Route path='/githubbattle/dist/popular' component={Popular} />
                    <Route  component={NotFound} />
                </Switch>
             </div>
          </Router>
        )
    }
}

export default App;