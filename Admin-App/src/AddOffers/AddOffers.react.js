import React from 'react';
import { connect } from 'react-redux';
import './AddOffers.css';
import { addOffersBythunk, eventHandlerOffer } from '../OffersReducer';

const AddOffers = (props) => {

    return (
        // <div className='addoffers_wrapper'>

        //     <label >Offer name</label>
        //     <input type="text" name="offerName" onChange={props.handleChange}></input>
        //     {/* <label >Offer Code</label>
        //     <input type="text" name="offerCode" onChange={props.handleChange}></input> */}
        //     <label >Offer validity</label>
        //     <input type="text" name="validity" onChange={props.handleChange}></input>
        //     <label >Offer Message</label>
        //     <input type="text" name="offerMessage" onChange={props.handleChange}></input>
        //     <button onClick={props.get}>Add</button>

        // </div>
        <div className='addoffers_wrapper'>
            <div className="container">
                <div className="form-horizontal">
                <div className="card cardbg">
                    <div className="card-body">
                    <h3>Add Offer</h3>
                    <br/>
                        <div className="form-group row justify-content-center">
                                <label className="col-form-label col-sm-2">Offer name</label>
                                <div className="col-sm-4">
                                    <input type="text" name="offerName" className="form-control" onChange={props.handleChange}></input>
                                </div>
                        </div>
                        
                        <div className="form-group row justify-content-center">
                                <label className="col-form-label col-sm-2">Offer validity</label>
                                <div className="col-sm-4">
                                <input type="text" name="validity" className="form-control" onChange={props.handleChange}></input>
                                </div>
                        </div>

                        <div className="form-group row justify-content-center">
                                <label className="col-form-label col-sm-2">Offer Message</label>
                                <div className="col-sm-4">
                                <input type="text" name="offerMessage" className="form-control" onChange={props.handleChange}></input>
                                </div>
                        </div>

                        {/* <div>
                            <div className="form-group col col-sm-9">
                                <div className="row-form-label row-sm-9">
                                    <label className="col-form-label col-sm-2">Offer name</label>
                                </div>
                                <div className="row-form-label row-sm-9">
                                    <label className="col-form-label col-sm-2">Offer Message</label>
                                </div>
                            </div>
                            <div className="form-group col col-sm-3">
                                <label className="col-form-label col-sm-2">Offer validity</label>
                            </div>
                        </div> */}

                        
                        <button className="btn btn-success" onClick={props.get}>Add</button>
            </div>
            </div>
            </div>
            </div>
        </div>
    );

}

const mapStateToProps = (state) => {

    
    return {
        response: state.statusCode
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        get: () => {
            dispatch(addOffersBythunk())
        },

        handleChange:(event) =>{
            eventHandlerOffer(event)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddOffers);