package com.SDP.Vajra.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.SDP.Vajra.model.User;
import com.SDP.Vajra.service.UserService;

@CrossOrigin("*")
@RestController
public class AdminRest {
	
	@Autowired
	UserService ars;
	
	
	@GetMapping("/admin/users")
	public ResponseEntity<List<User>> getAllUsers() {
	    try {
	        List<User> users = ars.finadAll();

	        if (users.isEmpty()) {
	            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	        }

	        return new ResponseEntity<>(users, HttpStatus.OK);
	    } catch (Exception e) {
	        e.printStackTrace();
	        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	}
	
	
	

}
