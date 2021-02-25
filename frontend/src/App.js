import React from 'react'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import Nav from './components/Nav'
import SideBar from './components/SideBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import AgentHome from './components/agents/AgentHome'
import AgentCreate from './components/agents/AgentCreate'
import ProfileHome from './components/profile/ProfileHome'
import ProfileCreate from './components/profile/ProfileCreate'
import AgentDetails from './components/agents/AgentDetails'

const App = () => {
    return (
        <>
            <Router>
                <Route path="/admin" component={() => <><Nav/> <SideBar/> <Footer/></>} />
                <Switch>
                    <Route path="/admin/dashboard" component={Dashboard} />
                    <Route exact path="/" component={Login} />

                    <Route exact path="/admin/agents" component={AgentHome} />
                    <Route exact path="/admin/agents/create" component={AgentCreate} />
                    <Route path="/admin/agents/:id" component={AgentDetails} />

                    <Route exact path="/admin/profile" component={ProfileHome} />
                    <Route path="/admin/profile/create" component={ProfileCreate} />
                    
                </Switch>
            </Router>
        </>
    )
}

export default App