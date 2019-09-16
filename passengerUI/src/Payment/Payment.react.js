import React from 'react';
import { setEndMode } from '../store';
import {connect} from 'react-redux';


class Payment extends React.Component {

    render() {
        if(this.props.searchMode === 'SearchCar'){
        return (
            <div>
                <h1>Total Fair : 450/-</h1>
                <button type="button" className="btn btn-primary mb-2" onClick={this.props.setEndMode}>Pay Now</button>
            </div>
        );
    }
    else{
        return (
            <div>
                <h1>Total Fair : 600/-</h1>
                <button type="button" className="btn btn-primary mb-2" onClick={this.props.setEndMode}>Pay Now</button>
            </div>
        );

    }
}
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        setEndMode: () => {
            dispatch(setEndMode);
        }
        
    }
}

const mapStateToProps = (state) =>{
    return{
        
        searchMode: state.searchMode
    }
}

export default connect( mapStateToProps , mapDispatchToProps)(Payment)