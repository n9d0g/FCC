import React, { FC } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomeView from '../home/HomeView'
import NavView from '../../components/nav/NavView'
import AboutView from '../about/AboutView'
import ConnectView from '../connect/ConnectView'
import SermonsView from '../sermons/SermonsView'
import EventsView from '../events/EventsView'
import GiveView from '../give/GiveView'
import FooterView from '../../components/footer/FooterView'
import './App.css'
import { Layout } from 'antd'

const App: FC = () => {
    return (
        <Layout className="site-layout-content">
            <Router>
                <NavView />
                <Switch>
                    <Route path="/" exact component={HomeView} />
                    <Route path="/about" exact component={AboutView} />
                    <Route path="/connect" exact component={ConnectView} />
                    <Route path="/sermons" exact component={SermonsView} />
                    <Route path="/events" exact component={EventsView} />
                    <Route path="/give" exact component={GiveView} />
                </Switch>
            </Router>
            <FooterView />
        </Layout>
    )
}

export default App
