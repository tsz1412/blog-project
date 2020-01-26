import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Post from './components/Post';
import NavBar from './components/NavBar';

const MainRouter = () => (
    <div> 
        <NavBar/>
        <Switch>
            <Route path="/post" component={Post} />
            <Route exact path="/" component={Home} />
        </Switch>
    </div>
)
export default MainRouter;