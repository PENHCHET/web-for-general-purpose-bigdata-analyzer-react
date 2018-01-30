import { render } from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import Store from './store'
import UserContainer from './components/UserContainer'
import Home from './components/home/Home'
import Popular from './components/popular/Popular'
import About from './components/about/About'
import Help from './components/help/Help'
import Header from './components/header/Header'
import Search from './components/search/Search'
import Navigation from './components/commons/Navigation'
import Footer from './components/footer/Footer'

import {
    BrowserRouter as Router,
    Route,
    Switch,
  } from 'react-router-dom'

render(
    <Provider store={Store}>
        <Router>
            <div className='container'>
                <Header />
                <Search />
                <Navigation />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/help' component={Help} />
                    <Route path='/popular' component={Popular} />
                    <Route render={function() {
                        return `Not Found`
                    }} />
                </Switch>
                <Footer />
            </div>
        </Router>
    </Provider>,
    document.getElementById("app")
)