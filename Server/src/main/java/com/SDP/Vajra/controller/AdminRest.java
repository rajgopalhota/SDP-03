package com.SDP.Vajra.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

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
	
	@PostMapping("/delete/{phone}")
	 public ResponseEntity<User> rejectUser(@PathVariable String phone) {
	     try {
	         User rejectedUser = ars.rejectUser(phone);
	         return new ResponseEntity<>(rejectedUser, HttpStatus.OK);
	     } catch (Exception e) {
	         // Handle the case where the user is not found	
	         return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	     }
	 }
	
	@PostMapping("/admin/users/{id}")
	public ResponseEntity<User> updateUserDetails(
	        @PathVariable Long id,
	        @RequestBody User updatedUserData) {
	    try {
	        User existingUser = ars.findById(id);

	        if (existingUser == null) {
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	        }

	        // Update the user details
	        existingUser.setFirstName(updatedUserData.getFirstName());
	        existingUser.setLastName(updatedUserData.getLastName());
	        existingUser.setEmail(updatedUserData.getEmail());
	        existingUser.setPhone(updatedUserData.getPhone());
	        existingUser.setPassword(updatedUserData.getPassword());
	        existingUser.setAadharNumber(updatedUserData.getAadharNumber());
	        existingUser.setPanNumber(updatedUserData.getPanNumber());
	        existingUser.setMpin(updatedUserData.getMpin());
	        existingUser.setIsVerified(updatedUserData.getIsVerified());

	        // Update the user
	        User updatedUser = ars.save(existingUser);

	        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
	    } catch (Exception e) {
	        // Log the exception instead of printing the stack trace
	        e.printStackTrace();
	        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	}
	
	

}
