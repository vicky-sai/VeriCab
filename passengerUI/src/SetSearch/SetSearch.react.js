 import React from 'react';
import Search from '../Search/Search.react';
import { modeSwitcher} from '../store';
import {connect} from 'react-redux';


class SetSearch extends React.Component {
    


    render() {
        console.log(this.props.HasLoaded)
        if(!this.props.HasLoaded){
        return (
            <div className="container">
                <div>
                   
                        <button type="submit" className="btn btn-secondary mb-2"  onClick={e=>this.props.setMode(e)} name ="driver" label="driver">Book Driver</button>&nbsp;
                        <h3>Select One</h3>&nbsp;
                        <button type="submit" className="btn btn-secondary mb-2"  onClick={e=>this.props.setMode(e)} name = "car" label="car">Book Car</button>
                    
                </div>  
            </div>
        );
    }else{
        return (
            <div >
             <Search></Search>
            </div>
        );

    }
}
}




const mapStateToProps = (state) => {
    return {
        HasLoaded:  state.HasLoaded
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        setMode: (e) => {
           modeSwitcher(e)
        },
        
       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SetSearch)