import React from 'react';
import { connect } from 'react-redux';
import './ViewOffers.css';
import { getOfferByThunk, deleteById, deleteOfferById } from '../Reducer';
import {Card, CardBody} from 'reactstrap';


class ViewOffers extends React.Component {
 
    componentWillMount(){
        this.props.get()
    }

    render() {if(!this.props.isLoaded){
        return(
            <div>  
                <h2>Loading..</h2>
              
               
            </div>
        )
    } else{


    return (
        // <div className='viewoffers_wrapper'>
        //     <p>Show offers</p>

        //     {
        //         this.props.list.map((eachOffer,index) => {
        //             return <div key={index}>
        //                     Offer Name:<p>{eachOffer.offerName}</p>
        //                     <button onClick={()=>this.props.delete(eachOffer.offerCode)}>Delete</button>
        //                 </div>
        //         })
        //     }



        // </div>
        <div className='viewoffers_wrapper'>
             <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center">
                    <h5 style={{color:'white'}}> Offers</h5>
                </nav>
                <br/>

            {
                this.props.list.map((eachOffer,index) => {
                    return <div className="container" key={index}>
                        
                                <Card className="cardStyle" >
                                    <CardBody className="cardBodyStyle " >

                                    {/* <div>
                            <div className=" col">
                                <div className=" row">
                                {eachOffer.offerName}
                                </div>
                                <div className=" row">
                                {eachOffer.offerMessage}
                                </div>
                            </div>
                            <div className=" col">
                            {eachOffer.validity}
                            </div>
                        </div> */}

                                    <div className="row " >
                                            <div className="PlaceLeft col-sm-8 "><b>{eachOffer.offerName}</b></div>
                                            <div className=" col PlaceRight"><i className="fa fa-clock-o fa-lg"></i>&nbsp;{eachOffer.validity}</div>
                                            <br/>
                                           
                                        </div>

                                        <div className="row" >
                                            <div className="PlaceLeft col-sm-10">{eachOffer.offerMessage}</div>
                                        </div>

                                      
                                    </CardBody>
                                </Card>
                                <br/>
                        </div>
                    //   </div>
                    //    </div>
                        
                        
                }
                )
            }

            </div>
    );

}
}

}
const mapStateToProps = (state) => {
    return {
        list: state.payload,
        isLoaded: state.isOfferLoaded
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        get: () => {
            dispatch(getOfferByThunk())
        },

        delete: (id) => {
            console.log("delelte  props "+id)
            deleteOfferById(id)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewOffers);