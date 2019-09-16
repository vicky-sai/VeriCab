import React from "react";
import { MDBContainer, MDBStepper, MDBStep, MDBIcon, MDBRow, MDBCol, MDBBtn } from "mdbreact";


const StepperExample = () => {

  return (
    <MDBContainer>
      <MDBStepper vertical>
        <MDBStep className="completed">
          <a href="#!">
            <span className="circle">1</span>
            <span className="label">First step</span>
          </a>
        </MDBStep>
        <MDBStep className="active">
          <a href="#!">
            <span className="circle">2</span>
            <span className="label">Second step</span>
          </a>
          <div className="step-content grey lighten-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
              cupiditate voluptate facere iusto quaerat vitae excepturi,
              accusantium ut aliquam repellat atque nesciunt nostrum
              similique. Inventore nostrum ut, nobis porro sapiente.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dolore error excepturi veniam nemo repellendus, distinctio
              soluta vitae at sit saepe. Optio eaque quia excepturi adipisci
              pariatur totam, atque odit fugiat.
            </p>
            <p>
              Deserunt voluptatem illum quae nisi soluta eum perferendis
              nesciunt asperiores tempore saepe reiciendis, vero quod a
              dolor corporis natus qui magni quas fuga rem excepturi
              laboriosam. Quisquam expedita ab fugiat.
            </p>
          </div>
        </MDBStep>
        <MDBStep className="warning">
          <a href="#!">
            <span className="circle">
              <MDBIcon icon="exclamation-triangle" />
            </span>
            <span className="label">Third step</span>
          </a>
        </MDBStep>
        <MDBStep>
          <a href="#!">
            <span className="circle">4</span>
            <span className="label">Fourth step</span>
          </a>
        </MDBStep>
        <MDBRow className="mt-1">
          <MDBCol md="12" className="text-right">
            <MDBBtn flat>Cancel</MDBBtn>
            <MDBBtn color="primary">Next </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBStepper>
    </MDBContainer>
  );
}

export default StepperExample;