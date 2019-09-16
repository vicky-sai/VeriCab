import React from 'react';


import Team2 from './Team2/Team2.react';
import Carousel from './Carousel/Carousel.react';
import Blogs from './Blogs/Blogs.react';
import ContactPage from './ContactUs/ContactUs.react';
import Pricing from './Pricing/Pricing.react';
import Legacy from './Legacy/Legacy.react';
import Team from './Team/Team.react';
import Intro from './Intro/Intro.react';
import Navigation from './Navigation/Navigation.react';

      /*   
      
      */

function App() {
  return (
    <div className="App">
      <Intro></Intro>
      <br></br>
      <br></br>
      <Legacy></Legacy>
      <Blogs></Blogs>
      <Pricing></Pricing>
      <Team></Team>
      <Carousel></Carousel>
      <ContactPage></ContactPage>
      
      
    </div>
  );
}

export default App;
