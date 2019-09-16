export const reducer = (state = {
    passengerId:'',                             //required For trip creation
    passengerName:'',                           //Required For trip creation
    searchMode: 'SearchDriver',                 
    driverId: '',                               //Required For trip Creation
    driverName:'',                              //Required For trip Creation
    carId: '',
    carType: '',
    carUrl: '',
    driverUrl: '',
    checkUrl:'',
    tripCreationUrl:'',
    HasLoaded:false,
    isActive: false,
    source: ''
} , action) => {
    switch (action.type) {
        case 'SETPASSENGER':
            return Object.assign({},action);
        case 'SETUSERDATA':
            return Object.assign({},action);
        case 'DRIVERMODE':
            return Object.assign({}, action);
        case 'CARMODE':
            return Object.assign({}, action);
        case 'SETDRIVERID':
            return Object.assign({}, action);
        case 'SETCARID':
            return Object.assign({}, action);
        case 'SETCARTYPE':
            return Object.assign({}, action);
        case 'SETACTIVE':
            return Object.assign({}, action);
        case 'SETPAYMENTMODE':
            return Object.assign({}, action);
         case 'SETSOURCE':
            return Object.assign({}, action);
        case 'SETPASSENGERNAME':
                 return Object.assign({},action);
        case 'SETENDMODE':
            return Object.assign({}, action);
        default:
            return state
    }
}



export default reducer;