/*
 * THIS IS AN INITIATOR CLASS:
 * It merely calls TripcCeator service 
 * 
 * Declaration of variables and 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * */

package com.vericab.trips.services;





import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.vericab.trips.models.HistoryTripDataModel;
import com.vericab.trips.models.TripDataModel;

//import lombok.extern.slf4j.Slf4j;
//@Slf4j
@Service
public class TripServiceInitiator {

	
	@Autowired
	private TripCreator serviceCall;
	

	public void tripCreationInitiator(TripDataModel Entity) {
		
		
		 serviceCall.createTrip(Entity);
	}
	
	
	public void EndTrip(TripDataModel onGoingTripEntity) {
		
		serviceCall.tripHasEnded(onGoingTripEntity);
	}
	
	public Iterable<HistoryTripDataModel> checkHistoryForUser(long userId,Pageable pageable){
		
		return  serviceCall.checkHistoryForUser(userId, pageable);
	}
	
	public Iterable<HistoryTripDataModel> checkHistoryForDriver(long driverId,Pageable pageable){
		
		return  serviceCall.checkHistoryForDriver(driverId, pageable);
	}
	
	public void createHistory(HistoryTripDataModel historyData) {
		
		serviceCall.createHistory(historyData);
		
	}
	
	public Iterable<HistoryTripDataModel> findAll(){
		
		return serviceCall.checkAllHistory();
	}
	
}
