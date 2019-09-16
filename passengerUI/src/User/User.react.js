import React from 'react';
import SetSearch from '../SetSearch/SetSearch.react';
import {  handleChange } from '../store';
import {connect} from 'react-redux';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            result: {},
            search: false,
            history: false,
            pname:'',
            loc:'',
        }
        this.enableSearch = this.enableSearch.bind(this);
        this.enableHistory = this.enableHistory.bind(this);
        this.goBack = this.goBack.bind(this);
    }



    



    
    goBack(){
        this.setState({history:false,search:false})
    }
    enableSearch(){
        this.setState({search:true});
    }
    enableHistory(){
        this.setState({history:true});
    }
    componentDidMount(){
          this.setState({history:false,search:false})
    }
        
    render(){
        if(this.state.search){
        return (
            <div >
                                        <button type="button" className="btn btn-secondary mb-2" onClick={this.goBack}>Go Back</button>
                                        <button type="button"  href="https://localhost:3002/"className="btn btn-secondary mb-2" >Home</button>

                <SetSearch></SetSearch>
            </div>
        );
        }
        if(this.state.history){
            return(
            <div>
                                        <button type="button" className="btn btn-secondary mb-2" onClick={this.goBack}>Go Back</button>
                                        <button type="button"  href="https://localhost:3002/"className="btn btn-secondary mb-2" >Home</button>

                <h1>No Trips Found</h1></div>
            );
        }

            else{
                return(
                    <div>
                        <button type="button" className="btn btn-secondary mb-2" onClick={this.goBack}>Go Back</button>
                        <button type="button"  href="https://localhost:3002/"className="btn btn-secondary mb-2" >Home</button>
                   
                   
                        <form>
                            <h2>ENTER DETAILS OF THE PASSENGER</h2>
                <div  className="form-group" >
                <input type="text" name ="pname" className="form-control" placeholder="Enter the Name of the passenger" onChange={this.props.setPassengerDetail}/>
                <input type = "text" name="loc" className="form-control" placeholder="Enter the pickup point" onChange={this.props.setPassengerDetail}/>
                </div>
                </form>
                   
                   
                   
                    <div>
                    <button type="button" className="btn btn-secondary mb-2" onClick={this.enableSearch}>Start Booking</button>
                </div>
                <div>
                <button type="button" className="btn btn-secondary mb-2" onClick={this.enableHistory}>Previous Trips</button>
                </div>
                </div>
                );
            }
        }
    

}



const mapDispatchToProps = (dispatch) => {
    return {
        
        setPassengerDetails: (e) => {
            dispatch( handleChange(e))
        }
    }
}






export default connect(mapDispatchToProps)(User);