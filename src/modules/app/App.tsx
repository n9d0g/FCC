import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../home/components/Home'
import Nav from '../../components/nav/Nav'
import About from '../about/components/About'
import Connect from '../connect/components/Connect'
import Sermons from '../sermons/components/Sermons'
import Events from '../events/components/Events'
import Give from '../give/components/Give'
import './App.css'

const App: React.FC = () => {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/connect" exact component={Connect} />
                <Route path="/sermons" exact component={Sermons} />
                <Route path="/events" exact component={Events} />
                <Route path="/give" exact component={Give} />
            </Switch>
        </Router>
    )
}

export default App
