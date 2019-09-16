import React from 'react';
import {connect} from 'react-redux';
import Table from 'react-bootstrap/Table';
import { createTrip } from '../store';
class FetchData extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            error: null,
            result: {},
            isLoaded: false
        }
      
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    carId= 101;
    variant='Sedan';
    registrationNumber='RJ 31 AJ 3355';





    handleSubmit(){
        if(this.props.searchMode === 'SearchDriver'){
            //SEARCH DRIVER MODE
        console.log('driver called');
        fetch(this.props.driverUrl).then(data=>data.json()).then(data=> {this.setState({result: data, isLoaded: true});},(error) => {
            this.setState({
              isLoaded: true,
              error
            });
          });
         
        }
        else{ //SEARCH CAR MODE

            console.log('car called');
            fetch(this.props.carUrl).then(data=>data.json()).then(data=> {this.setState({result: data, isLoaded: true});},(error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
              });
              
        
    }}
    
    render() { 
        //SEARCH DRIVER MODE
        console.log("SEARCH DRIVER MODE ACTIVE")
        if(this.props.searchMode === 'SearchDriver'){
            if(this.state.error){
                return <div>Error: {this.state.error.message}</div>;
            }
            else if(this.state.isLoaded){
                return (
                    <div >
                         
                        <Table className='table table-striped' variant="dark">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Id</th>
                                    <th>Avatar</th>
                                    <th>Name</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {console.log(this.state.result)}
                                {  
                                   <tr>
                                            <td>1</td>
                                            <td>420</td>
                                            <td><img  alt="driver" src='C:\Users\Public\user.jpg' height="100" width="100"></img></td>
                                            <td>vikky</td>
                                            <td><button type="button" className="btn btn-secondary" onClick={() => this.props.setDriverId(420,'vikky',Math.floor((Math.random() * 1423) + 1),this.props.passengerName)} label="driver">Book Driver</button></td>
                                            </tr>
                                    
                                }
                            </tbody>
                        </Table>   
                    </div>
                );
            }
            else{
                return(
                    <div>
                        <button type="submit" className="btn btn-primary mb-2" onClick={this.handleSubmit}>Driver Search</button>   
                    </div>
                );
            }
        }


        //SEARCH CAR MODE
        else if (this.props.searchMode === 'SearchCar'){
            if(this.state.error){
                return <div>Error: {this.state.error.message}</div>;
            }
            else if(this.state.isLoaded){
                return (
                    <div >
                        <button type="submit" className="btn btn-primary mb-2" onClick={this.handleSubmit}>Search Car</button> 
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Car Id</th>
                                    <th>Car Owner</th>
                                    <th>Details1</th>
                                    <th>Type</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    
                                         <tr>
                                            <td></td>
                                            <td>101</td>
                                            <td>Sedan</td>
                                            <td>RJ 31 AJ 3355</td>
                                            
                                            <td><button type="button" className="btn btn-secondary" onClick={ () => this.props.setDriverId(101,'vikky',Math.floor((Math.random() * 1423) + 1),this.props.passengerName)} label="car">Book Car</button></td>
                                            </tr>
                                    
                                }
                            </tbody>
                        </Table>  
                    </div>
                );
            }
            else{
                return(
                    <div>
                        <div class="alert alert-info" role="alert">
                        <strong>Info!! </strong>Select Type Of Car Available Cars: 'Sedan' 'Mini' 'Micro' 'SUV'
                        </div>
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Search Car</span>
                        </div>
                        <input type="text" class="form-control" placeholder="Car Type" aria-label="Car Type" aria-describedby="basic-addon1"></input>
                        <button type="submit" className="btn btn-primary mb-2" onClick={this.handleSubmit}>Search Car</button>   
                    </div>
                );
            }
        }
    } 
}
   
const mapDispatchToProps = (dispatch) => {
    return {
        setDriverId: (id,name,pid,pname) => {
           
            createTrip(id,name,pid,pname);
            console.log(id,name,pid,pname)
        },
       
       
        
    }
}


const mapStateToProps = (state) =>{
    console.log("fetch "+state.searchMode)
    return{

        passengerName:state.passengerName,
        searchMode: state.searchMode,
        driverUrl: state.driverUrl,
        carUrl: state.carUrl,
        carType: state.carType
    
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchData);

