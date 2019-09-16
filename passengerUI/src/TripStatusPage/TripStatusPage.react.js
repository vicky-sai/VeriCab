import React from 'react';
import { setPaynowMode } from '../store';
import {connect} from 'react-redux';
import Table from 'react-bootstrap/Table';

class TripStatusPage extends React.Component {




    render() {
        if(this.props.searchMode === 'SearchDriver'){
        return (
            <div>
                <h1>Your Trip Has Started</h1>
                <Table striped bordered hover variant="dark">
                <tbody>
                            <tr>
                                <td>Passenger Name</td>
                                <td>Lokesh</td>
                            </tr>
                            <tr>
                                <td>Driver Name</td>
                                <td>Vikky</td>
                            </tr>
                            <tr>
                                <td>Source</td>
                                <td>Porur , Chennai</td>
                            </tr>
                            
                            
                        </tbody>
                        </Table>  
            <div >
                <button type="button" className="btn btn-primary mb-2" onClick={this.props.setPaynowMode}>Pay Now</button>
            </div>
            </div>
            
        );
    }
    else{
        return(
            <div>
                <h1>Your Trip Has Started</h1>
                <Table striped bordered hover variant="dark">
                <tbody>
                            <tr>
                                <td>Passenger Name</td>
                                <td>Lokesh</td>
                            </tr>
                            <tr>
                                <td>Car Type</td>
                                <td>Sedan</td>
                            </tr>
                            <tr>
                                <td>Source</td>
                                <td>Porur , Chennai</td>
                            </tr>
                            
                            
                        </tbody>
                        </Table>  
            <div >
                <button type="button" className="btn btn-primary mb-2" onClick={this.props.setPaynowMode}>End Trip</button>
            </div>
            </div>
        );

    }
}
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        setPaynowMode: () => {
            dispatch(setPaynowMode);
        }
        
    }
}

const mapStateToProps = (state) =>{
    console.log("fetch "+state.searchMode)
    return{
        driverName: state.driverName,
        passengerName:state.passengerName,
        sourceLocation:state.sourceLocation,
        searchMode: state.searchMode
    }
}


export default connect( mapStateToProps , mapDispatchToProps)(TripStatusPage);