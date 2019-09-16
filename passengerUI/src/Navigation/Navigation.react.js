import React from 'react';
import  {Route,Switch}  from 'react-router-dom';
import  SetSearch  from '../SetSearch/SetSearch.react';
import User from '../User/User.react';

class Navigation extends React.Component {
    

    render() {
        return (
            <div >
            <main>
                <Switch>
                <Route exact path="/"  component={User}></Route>
                <Route exact path="/user"  component={User}></Route>
                <Route exact path="/search"  component={SetSearch}></Route>
                </Switch>
            </main>
        </div>
        );
    }
}

export default Navigation;