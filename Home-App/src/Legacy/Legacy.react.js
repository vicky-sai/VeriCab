import React from "react";
import {  MDBRow, MDBCol, MDBIcon } from "mdbreact";


const FeaturesPage = () => {
  return (
    <section className="my-5">
      
        <h1 className="h1-responsive font-weight-bold text-center my-5">
          Why is it so great?
        </h1>
        <h2 className="h1-responsive lead grey-text font-weight-bold text-center my-5">Because Better Matters.</h2>
        <p className="lead grey-text w-responsive text-center mx-auto mb-5">
          We Provide The Best Cab Rental Services. 
        </p>
        

        <MDBRow>
          <MDBCol lg="5" className="text-center text-lg-left">
            <img
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Others/screens-section.jpg"
              alt=""
            />
          </MDBCol>
          <MDBCol lg="7">
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">Affordable</h5>
                <p className="grey-text">
                  The Services Here Are At Minimum Affordable Price. 
                  Best In The Market. 
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">Easy To Book</h5>
                <p className="grey-text">
                  Now With The New Portal It's Even More Easy To Book 
                  A Car or A Driver Now. 
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">Safety</h5>
                <p className="grey-text">
                  All Your Trips Are Fully Secure.
                  We Got You Covered.

                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </section>
  );
}

export default FeaturesPage;