import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import logo from './logo.png';
import { MDBNavbar, MDBNavbarBrand, MDBIcon, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask, MDBRow, MDBCol,  MDBBtn, MDBView, MDBContainer, MDBFormInline } from "mdbreact";

class MinimalisticIntro extends Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const navStyle = { marginTop: "4rem" };
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />
    );
    return (
      <>
        
        <MDBView src={`https://wallpaperbro.com/img/148324.jpg`}>
          <MDBMask className="rgba-black-light d-flex justify-content-center align-items-center">
            <MDBContainer>
              <MDBRow>
                <MDBCol md="12" className="mb-4 white-text text-center">
                  <h1 className="h1-reponsive white-text text font-weight-bold mb-0 pt-md-5 pt-5 ">VeriCab</h1>
                  <hr className="hr-light my-4" />
                  <h5 className="text-uppercase mb-4 white-text "><strong>CAB RENTAL SERVICE</strong></h5>
                  <MDBBtn href="http://localhost:3000/" outline color="white">I'm a Passenger</MDBBtn>
                  <MDBBtn href="http://localhost:3000/"  outline color="white">I'm a Driver</MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </>
    );
  }
}

export default MinimalisticIntro;