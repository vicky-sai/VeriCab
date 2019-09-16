import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn } from "mdbreact";

const EcommercePage = () => {
  return (
    <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Our pricing plans
      </h2>
      <p className="grey-text text-center w-responsive mx-auto mb-5">
        Become A Member Now And Avail All The Exciting Offers.
      </p>
      <MDBRow>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBCard pricing>
            <MDBCardBody>
              <h5 className="font-weight-bold mt-3">Silver Membership</h5>
              <div className="price pt-0">
                <h2 className="number red-text mb-0">10 Cashback Points</h2>
              </div>
              <br></br>
              <ul className="striped mb-1">
                <li>
                  <p>
                    <strong>1</strong> Ride Free Each Month
                  </p>
                </li>
                <li>
                  <p>
                    <strong>100</strong> Off On Every Outstation Trip
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Get For 150</strong> features
                  </p>
                </li>
              </ul>
              
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBCard
            className="card-image"
            style={{
              backgroundImage:
                'url("https://mdbootstrap.com/img/Photos/Others/pricing-table%20(6).jpg")'
            }}
          >
            <div className="text-white text-center pricing-card d-flex align-items-center rgba-indigo-strong py-3 px-3 rounded">
              <MDBCardBody>
                <h5 className="font-weight-bold mt-2">Gold Membership</h5>
                <div className="price pt-0">
                  <h2 className="number mb-0">20 Cashback Points</h2>
                </div>
                <br></br>
                <ul className="striped mb-0">
                  <li>
                    <p>
                      <strong>3</strong> Rides Free Each Month
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>250/-</strong> Off On Every Outstation Trip
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Get For 250</strong> 
                    </p>
                  </li>
                  
                </ul>
                
              </MDBCardBody>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBCard pricing>
            <MDBCardBody>
              <h5 className="font-weight-bold mt-3">Platinum Membership</h5>
              <div className="price pt-0">
                <h2 className="number mb-0">30 Cashback Points</h2>
              </div>
              <br></br>
              <ul className="striped mb-1">
                <li>
                  <p>
                    <strong>5</strong> Rides Free Each Month
                  </p>
                </li>
                <li>
                  <p>
                    <strong>500/-</strong> Off On Every Outstation Trip
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Get For 350</strong>
                  </p>
                </li>
                
              </ul>
              
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <hr className="my-5" />
    </section>
  );
}

export default EcommercePage;