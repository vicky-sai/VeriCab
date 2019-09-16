import React from 'react';
import  {Route,Switch}  from 'react-router-dom';
import Contact from '../ContactUs/ContactUs.react';
import Intro from '../Intro/Intro.react';
import Team from '../Team/Team.react';
import Blogs from '../Blogs/Blogs.react';

const Navigation = () => {

    return (
        <div >
            <main>
                <Switch>
                <Route path="/intro"  component={Intro}></Route>
                <Route path="/contact"  component={Contact}></Route>
                <Route path="/team"  component={Team}></Route> 
                <Route path="/blogs"  component={Blogs}></Route> 
                </Switch>
            </main>
        </div>
    );
}

export default Navigation;