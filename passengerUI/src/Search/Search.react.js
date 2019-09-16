import React from 'react';
import { setCarType  } from '../store';
import {connect} from 'react-redux';

import FetchData from '../FetchData/FetchData.react';
import TripStatusPage from '../TripStatusPage/TripStatusPage.react';
import Payment from '../Payment/Payment.react';

class Search extends React.Component {
  
    


    render() {
            if(this.props.searchMode === 'SearchDriver'){ //SEARCH DRIVER MODE
                return(
                    <div>
                        <br></br>
                        <br></br>

                        <FetchData></FetchData>
                    </div>
                )
            }
            else if(this.props.searchMode === 'SearchCar'){ //SEARCH CAR MODE
                return(
                    <div>
                        <br></br>
                        <br></br>
                        <FetchData></FetchData>
                    </div>
                    
                )
            }
            else if(this.props.searchMode === 'TripStatusMode'){
                return(
                    <div>
                        {console.log(this.props.sourceLocation)}
                        <TripStatusPage></TripStatusPage>
                    </div>
                
                )
            }
            else if(this.props.searchMode=== 'Payment'){
                return(
                    <div>
                        <Payment></Payment>
                    </div>
                )
            }else if(this.props.searchMode=== 'End'){
                return(
                    <div>
                        <h1>Payment Successful !!</h1>
                        <h2>Hope You Had a Great Experience</h2>
                    </div>
                )
            }
    }
}


const mapStateToProps = (state) =>{
    return{

        searchMode: state.searchMode,
        sourceLocation: state.sourceLocation
        
    }
}

export default connect(mapStateToProps, null)(Search);
