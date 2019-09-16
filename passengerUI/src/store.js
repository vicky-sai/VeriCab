import {createStore,applyMiddleware} from 'redux';
import reducer from './reducer';
//import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import axios from 'axios';

export const setDriverMode= ()=>{
    return{
    type: 'DRIVERMODE',
    searchMode: 'SearchDriver',
    driverUrl: 'http://localhost:8050/viewDrivers',         //INITIAL SETTING OF DRIVER MODE 
    isActive: false,
    HasLoaded:true,
    passengerName:store.getState().passengerName,
    sourceLocation:store.getState().sourceLocation
   
    }
}

export const setCarMode=()=>{
    return{
   type: 'CARMODE',
   searchMode: 'SearchCar',
   carUrl: 'http://localhost:8050/viewCars',
   isActive: false,
   HasLoaded:true,
   passengerName:store.getState().passengerName,
   sourceLocation:store.getState().sourceLocation
    }
}


export function modeSwitcher(event){
    
    if(event.target.name==='driver'){
        store.dispatch(setDriverMode());
    }else if(event.target.name==='car'){
        store.dispatch( setCarMode());
    }
    
}

export const setPassengerName = (name)=>{
return{

        type:'SETPASSENGERNAME',
        passengerName: name,
        HasLoaded:false
}
}

export const setSource = (source)=>{
    return{
    
            type:'SETSOURCE',
            source: source,
            HasLoaded:false
    }
    }
 


export const handleChange=(event)=>{

    if(event.target.value==='pname'){
    store.dispatch(setPassengerDetail(event.target.value,store.getState().sourceLocation));
    }else{
        store.dispatch(setPassengerDetail(store.getState().sourceLocation,event.target.value));
    }

}




export function createTrip(id,name,pid,pname){

    if(store.getState().searchMode){
        store.dispatch(setDriverId(id,name,store.getState().passengerId
        ,store.getState().passengerName
        ,store.getState().sourceLocation));}
        else{
            store.dispatch(setCarId(id,name,
                store.getState().passengerId,
            store.getState().passengerName,
            store.getState().sourceLocation))
        }
        console.log("==================================="+ store.getState().passengerName)
        let  object=
                {passengerName:pname,
                passengerId:pid,
                driverId:id,
                driverName:name,
                tripId:"5454",
                dateAndTimeOfTrip:"02/05/03",
                sourceLocation:store.getState().sourceLocation,
                tripCompleted:false,
                fare:null
                };

      axios.post('http://localhost:9042/createTrip',object);

}



export const setDriverId = (did,dname,pid,pname,loc) => {
    return{
        type: 'SETDRIVERID',
        driverId: did,
        driverName: dname,
        passengerId: pid,
        sourceLocation:loc,
        passengerName: pname,
        searchMode: 'TripStatusMode',
        HasLoaded:true,
        isActive: true,
    }
}

export const setCarId = (did,dname,pid,pname,loc) => {
    return{
        type: 'SETCARID',
        carId: 2,
        driverId: did,
        driverName: dname,
        passengerId: pid,
        sourceLocation:loc,
        passengerName: pname,
        searchMode: 'TripStatusMode',
        HasLoaded:true,
        carUrl: 'http://localhost:8050/viewCars',
        isActive: true
    }
}



export const setPaynowMode = {
    
        type: 'SETPAYMENTMODE',
        searchMode: 'Payment',
        HasLoaded:true
       
    
}

export const setEndMode = {
    
    type: 'SETENDMODE',
    searchMode: 'End',
    HasLoaded:true
   

}

export const setPassengerDetail = (passengerName,sourceLocation)=>{
return{

        type:'SETPASSENGER',
        passengerName,
        sourceLocation,
        HasLoaded:false
}
}
 




 export const setUserData=(pid,pname)=>{
console.log("Set USEr");
    return{
        type: 'SETUSERDATA',
        passengerId:pid,
        passengerName:pname,
        HasLoaded:true
    }


 }



const store = createStore(reducer,applyMiddleware(thunk));

export default store;