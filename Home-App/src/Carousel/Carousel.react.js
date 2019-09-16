import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from "mdbreact";
import logo1 from './1c.jpg';
import logo2 from './2c.jpg';
import logo3 from './3c.jpg';
import logo4 from './4c.jpg';

const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src={logo1}
              alt="First slide"
              height="600"
              width="100%"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Lightening Fast Service</h3>
            <h4>Anytime Anywhere</h4>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src={logo2}
              alt="Second slide"
              height="600"
              width="100%"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Cars You Can Rely On</h3>
            <h4>Top Quality Service</h4>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src={logo3}
              alt="Third slide"
              height="600"
              width="100%"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Offers You Can't Resist</h3>
            <h4>Hurry Before It Ends</h4>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        
      </MDBCarouselInner>
    </MDBCarousel>
    <hr className="my-5" />
    </MDBContainer>
    
  );
}

export default CarouselPage;