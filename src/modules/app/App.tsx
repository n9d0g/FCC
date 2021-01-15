import './App.css'
import React, { FC } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomeView from '../home/HomeView'
import HeaderView from '../../components/header/HeaderView'
import AboutView from '../about/AboutView'
import ConnectView from '../connect/ConnectView'
import SermonsView from '../sermons/SermonsView'
// import EventsView from '../events/EventsView'
import GiveView from '../give/GiveView'
import FooterView from '../../components/footer/FooterView'
import AboutMissionVisionView from '../about/about-mission-vision/AboutMissionVisionView'
import AboutLeadershipView from '../about/about-leadership/AboutLeadershipView'
import AboutValuesView from '../about/about-values/AboutValuesView'
import ConnectMinistriesView from '../connect/connect-ministries/ConnectMinistriesView'
import ConnectServicesView from '../connect/connect-services/ConnectServicesView'
import ConnectSmallGroupsView from '../connect/connect-small-groups/ConnectSmallGroupsView'
import PreFooterView from '../../components/pre-footer/PreFooterView'
import FeaturedSermon from '../../components/featured-sermon/FeaturedSermon'

const App: FC = () => {
    return (
        <div className="app">
            <Router>
                <HeaderView />
                <Switch>
                    <Route path="/" exact component={HomeView} />

                    {/*about section */}
                    <Route path="/about" exact component={AboutView} />
                    <Route
                        path="/about/values"
                        exact
                        component={AboutValuesView}
                    />
                    <Route
                        path="/about/mission-vision"
                        exact
                        component={AboutMissionVisionView}
                    />
                    <Route
                        path="/about/leadership"
                        exact
                        component={AboutLeadershipView}
                    />

                    {/*connect section */}
                    <Route path="/connect" exact component={ConnectView} />
                    <Route
                        path="/connect/ministries"
                        exact
                        component={ConnectMinistriesView}
                    />
                    <Route
                        path="/connect/services"
                        exact
                        component={ConnectServicesView}
                    />
                    <Route
                        path="/connect/small-groups"
                        exact
                        component={ConnectSmallGroupsView}
                    />
                    <Route path="/sermons" exact component={SermonsView} />
                    <Route
                        path="/sermons/featured"
                        exact
                        component={FeaturedSermon}
                    />
                    {/* <Route path="/events" exact component={EventsView} /> */}
                    <Route path="/give" exact component={GiveView} />
                </Switch>
                <PreFooterView />
                <FooterView />
            </Router>
        </div>
    )
}

export default App
