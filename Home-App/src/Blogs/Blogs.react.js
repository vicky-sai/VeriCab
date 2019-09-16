import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";

const BlogPage = () => {
  return (
    <MDBCard className="my-5 px-5 pb-5">
      <MDBCardBody>
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Book With Us Now
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
          Don't Wait Anymore
        </p>
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src={"https://ak8.picdn.net/shutterstock/videos/15256048/thumb/1.jpg"}
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="green-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="car" className="pr-2" />
                Trip
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Planning A Road Trip???</strong>
            </h3>
            <p>
             Plan The Road Trip Of Your Dreams With Us. Nothing To Worry. 
             </p>
             <p>
               It's Never Too Late.
             </p>
             <p>
             Pack Your Bags - Book With Us - Hit The Road

            </p>
            
            <MDBBtn href="http://localhost:3000/" color="success" size="md" className="waves-light ">
              Book Now
            </MDBBtn>
            <br></br><br></br>
            <p>
            It's been a huge blessing, being able to travel and have a great life.
            </p>
            <p>
              by
              <a href="#!">
                <strong> Seann William Scott</strong>
              </a>
              </p>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="7">
            <a href="#!" className="pink-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="route" className="pr-2" />
                Outstation
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Need A Break From Office???</strong>
            </h3>
            <p>
              Get A Break From Your React Projects And Plan A Outstation Trip. 
            </p>
            <p>
              Get The Best Service at Affordable Price.
            </p>
            
            <MDBBtn
              color="pink"
              size="md"
              className="mb-lg-0 mb-4 waves-light"
              href="http://localhost:3000/"
            >
              Book Now
            </MDBBtn>
            <br></br><br></br>
            <p>
            Travel is a new experience that can transport you out of your everyday routine to create memories with the ones you love.
            </p>
            <p>
              by
              <a href="#!">
                <strong> Brian Chesky</strong>
              </a>
              </p>
          </MDBCol>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/Bz2gEVJgeius27jfj/couple-of-friends-partying-in-vintage-convertible-car-on-road-trip_rls_taqzg_thumbnail-full01.png"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
              
            </MDBView>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://imgix.bustle.com/elite-daily/2017/05/08042840/friends-go-on-road-trip.jpg?w=1200&h=630&q=70&fit=crop&crop=faces&fm=jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="indigo-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="glass-cheers" className="pr-2" />
                Holidays
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Holidays Coming???</strong>
            </h3>
            <p>
              Don't Let Your Holidays Go Just Like This. Plan With Us And Make The Best Out Of It.  
            </p>
            <p>
              Plan A Trip You Won't Forget.
            </p>
            
            <MDBBtn href="http://localhost:3000/" color="indigo" size="md" className="waves-light ">
              Book Now
            </MDBBtn>
            <br></br><br></br>
            <p>
            I see my path, but I don't know where it leads. Not knowing where I'm going is what inspires me to travel it.
            </p>
            <p>
              by
              <a href="#!">
                <strong> Rosalia De Castro</strong>
              </a>
              </p>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}

export default BlogPage;