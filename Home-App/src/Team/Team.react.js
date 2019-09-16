import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBIcon, MDBTooltip,  MDBBadge, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBBtn } from "mdbreact";
import yugansh from './yugansh2.jpg';
import rashmika from './rashmika.jpg';
import arul from './arul.jpg';
import lokesh from './lokesh.jpg';
import aditya from './aditya1.jpg';
import vignesh from './vignesh.jpg';
import riya from './riya1.png';
import anu from './anu2.jpg';

const EcommercePage = () => {
  return (
    <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Our Amazing Team
      </h2>
      <p className="grey-text text-center w-responsive mx-auto mb-5">
        Unity Is Our Strength.
      </p>
      <MDBRow>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard collection className="z-depth-1-half">
            <div className="view">
              <img
                src={riya}
                className="img-fluid"
                alt=""
              />
              <MDBCardFooter className="px-1">
                <span className="float-center font-weight-bold">
                  <strong>Riya</strong>
                </span><br></br>
                <span>
                    Retail Sales<br/>
                    UI Developer<br/>
                    <i class="fab fa-facebook"></i><span> </span>
                    <i class="fab fa-instagram"></i><span> </span>
                    <i class="fab fa-twitter"></i>
                </span>
                </MDBCardFooter>
            </div>
            
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard collection className="z-depth-1-half">
            <div className="view">
              <img
                src={aditya}
                className="img-fluid"
                alt=""
              />
              <MDBCardFooter className="px-1">
                <span className="float-center font-weight-bold">
                  <strong>Aditya Joshi</strong>
                </span><br></br>
                <span>
                    Network And Technology<br/>
                    UI Developer<br/>
                    <i class="fab fa-facebook"></i><span> </span>
                    <i class="fab fa-instagram"></i><span> </span>
                    <i class="fab fa-twitter"></i>
                </span>
                </MDBCardFooter>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard collection className="z-depth-1-half">
            <div className="view myPicCustomize">
              <img
                src={rashmika}
                className="img-fluid"
                alt=""
              />
              <MDBCardFooter className="px-1">
                <span className="float-center font-weight-bold">
                  <strong>Rashmika</strong>
                </span><br></br>
                <span>
                    Data Analytics Engineer<br/>
                    UI Developer<br/>
                    <i class="fab fa-facebook"></i><span> </span>
                    <i class="fab fa-instagram"></i><span> </span>
                    <i class="fab fa-twitter"></i>
                </span>
                </MDBCardFooter>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard collection className="z-depth-1-half">
            <div className="view myPicCustomize">
              <img
                src={arul}
                className="img-fluid"
                alt=""
              />
              <MDBCardFooter className="px-1">
                <span className="float-center font-weight-bold">
                  <strong>Arul Selvi</strong>
                </span><br></br>
                <span>
                    Network And Technology<br/>
                    Back-End Developer<br/>
                    <i class="fab fa-facebook"></i><span> </span>
                    <i class="fab fa-instagram"></i><span> </span>
                    <i class="fab fa-twitter"></i>
                </span>
                </MDBCardFooter>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>

<br></br><br></br>

<hr className="my-5" />

      <MDBRow>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard collection className="z-depth-1-half">
            <div className="view myPicCustomize">
              <img
                src={vignesh}
                className="img-fluid"
                alt=""
              />
              <MDBCardFooter className="px-1">
                <span className="float-center font-weight-bold">
                  <strong>Vignesh</strong>
                </span><br></br>
                <span>
                    MTS Engineer<br/>
                    Back-End Developer<br/>
                    <i class="fab fa-facebook"></i><span> </span>
                    <i class="fab fa-instagram"></i><span> </span>
                    <i class="fab fa-twitter"></i>
                </span>
                </MDBCardFooter>
            </div>
            
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard collection className="z-depth-1-half">
            <div className="view myPicCustomize">
              <img
                src={yugansh}
                className="img-fluid myPicCustomize"
                alt=""
                height="1276px"
                width="972px"
              />
              <MDBCardFooter className="px-1">
                <span className="float-center font-weight-bold">
                  <strong>Yugansh</strong>
                </span><br></br>
                <span>
                    Network And Technology<br/>
                    Back-End Developer<br/>
                    <i class="fab fa-facebook"></i><span> </span>
                    <i class="fab fa-instagram"></i><span> </span>
                    <i class="fab fa-twitter"></i>
                </span>
                </MDBCardFooter>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard collection className="z-depth-1-half">
            <div className="view myPicCustomize">
              <img
                src={lokesh}
                className="img-fluid"
                alt=""
              />
              <MDBCardFooter className="px-1">
                <span className="float-center font-weight-bold">
                  <strong>Lokeshwar Kumar Tabjula</strong>
                </span><br></br>
                <span>
                    Network And Technology<br/>
                    Back-End Developer<br/>
                    <i class="fab fa-facebook"></i><span> </span>
                    <i class="fab fa-instagram"></i><span> </span>
                    <i class="fab fa-twitter"></i>
                </span>
                </MDBCardFooter>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard collection className="z-depth-1-half">
            <div className="view ">
              <img
                src={anu}
                className="img-fluid myPicCustomize"
                alt=""
              />
              <MDBCardFooter className="px-1">
                <span className="float-center font-weight-bold">
                  <strong>Animesh</strong>
                </span><br></br>
                <span>
                    DevOps Engineer<br/>
                    Back-End Developer<br/>
                    <i class="fab fa-facebook"></i><span> </span>
                    <i class="fab fa-instagram"></i><span> </span>
                    <i class="fab fa-twitter"></i>
                </span>
                </MDBCardFooter>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <hr className="my-5" />
    </section>
  );
}

export default EcommercePage;