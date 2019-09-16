package com.example.demo.controller;




import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.OffersModel;
import com.example.demo.service.AdminService;

import lombok.extern.slf4j.Slf4j;


@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@Slf4j
public class AdminController {

	@Autowired
	public AdminService service;

	
	@PostMapping("/addOffers")
	public Boolean addOffers(@RequestBody OffersModel offers) {
	
		System.out.println(offers.getOfferCode());
		service.addOffers(offers);
		return true;
	}

	@DeleteMapping("/deleteOffer/{offerId}")
	public Boolean deleteOffers(@PathVariable("offerId") Long offerId) {
		
		service.removeOffers(offerId);
		
		return  true;
	}
	
	@GetMapping("/viewOffers")
	public List<OffersModel> viewOffers(){
		
		List<OffersModel> offerList = new ArrayList<>();
		Iterable<OffersModel> offer = this.service.getOffers();
		log.info("===============================" +offer);
		
		offer.forEach(e->offerList.add(e));
		return offerList;
	}

	

	
	

}
