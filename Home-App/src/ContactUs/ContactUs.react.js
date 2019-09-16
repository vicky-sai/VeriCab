import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
import logo1 from './logo1.PNG';
import logo2 from './logo2.PNG';
const ContactPage = () => {
  return (
    <section className="my-5">
       <div lg="5" className="text-center">
      <img src={logo1} alt="cabLogo" width="300" height="150"></img>
      <span className="h1-responsive font-weight-bold text-center my-5">  An Entity Of  </span>
      <img src={logo2} alt="cabLogo"  width="500" height="200"></img>
        </div>
        <hr className="my-5" />
      {/* <h2 className="h1-responsive font-weight-bold text-center my-5">
        Contact us
      </h2> */}
      {/* <p className="text-center w-responsive mx-auto pb-5">
        Your feedbacks Are Most Welcomed.
      </p> */}
      {/* <MDBRow>
        <MDBCol lg="5" className="lg-0 mb-4">
          <MDBCard>
            <MDBCardBody>
              <div className="form-header blue accent-1">
                <h3 className="mt-2">
                  <MDBIcon icon="envelope" /> Write to us:
                </h3>
              </div>
              <p className="dark-grey-text">
                We'll write rarely, but only the best content.
              </p>
              <div className="md-form">
                <MDBInput
                  icon="user"
                  label="Your name"
                  iconClass="grey-text"
                  type="text"
                  id="form-name"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="envelope"
                  label="Your email"
                  iconClass="grey-text"
                  type="text"
                  id="form-email"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="tag"
                  label="Subject"
                  iconClass="grey-text"
                  type="text"
                  id="form-subject"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="pencil-alt"
                  label="Icon Prefix"
                  iconClass="grey-text"
                  type="textarea"
                  id="form-text"
                />
              </div>
              <div className="text-center">
                <MDBBtn color="light-blue">Submit</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="7">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
          >
            <iframe
              src="https://www.google.com/maps/search/?api=1&query=pizza+seattle+wa"
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
          <br />
          <MDBRow className="text-center">
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="map-marker-alt" />
              </MDBBtn>
              <p>Chennai, 600041</p>
              <p className="mb-md-0">India</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="phone" />
              </MDBBtn>
              <p>+ 91 9790620010</p>
              <p className="mb-md-0">24x7</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="envelope" />
              </MDBBtn>
              <p>vericab@gmail.com</p>
              <p className="mb-md-0">sales.vericab@gmail.com</p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow> */}
     
    </section>
  );
}

export default ContactPage;