package com.SDP.Vajra.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.SDP.Vajra.model.User;
import com.SDP.Vajra.service.UserService;

@CrossOrigin("http://localhost:3000")
@RestController
public class UserRest {
	UserService rss;

	@Autowired
	public UserRest(UserService rss) {
		super();
		this.rss = rss;
	}

	@PostMapping("/reg")
	public ResponseEntity<User> registerUservajra(@RequestPart("imagePath") MultipartFile imagePath,
			@RequestPart("signaturePath") MultipartFile signaturePath, @RequestPart("firstName") String firstName,
			@RequestPart("lastName") String lastName, @RequestPart("email") String email,
			@RequestPart("phone") String phone, @RequestPart("password") String password,
			@RequestPart("gender") String gender, @RequestPart("aadharNumber") String aadharNumber,
			@RequestPart("panNumber") String panNumber) {
		try {
			User register = new User();
			register.setFirstName(firstName);
			register.setLastName(lastName);
			register.setEmail(email);
			register.setPhone(phone);
			register.setPassword(password);
			register.setGender(gender);
			register.setAadharNumber(aadharNumber);
			register.setPanNumber(panNumber);
			byte[] decodedImagePath = imagePath.getBytes();
	        byte[] decodedSignaturePath = signaturePath.getBytes();
			register.setImagePath(decodedImagePath);
			register.setSignaturePath(decodedSignaturePath);
			User registeredUser = rss.registerUser(register);
			return new ResponseEntity<>(registeredUser, HttpStatus.CREATED);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}


	@PostMapping("/login")
	public ResponseEntity<User> loginUser(@RequestPart("phone") String phone, @RequestPart("password") String password) {
	    try {
	        User user = rss.findById(phone);
	        
	        if (user != null) {
	            if (user.getPassword().equals(password)) {
	                return new ResponseEntity<>(user, HttpStatus.OK);
	            } else {
	                return new ResponseEntity<>(null,HttpStatusCode.valueOf(204));
	            }
	        } else {
	            return new ResponseEntity<>(null, HttpStatusCode.valueOf(204));
	        }
	    }catch (Exception e) {
	        e.printStackTrace();
	        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	}

	
	@GetMapping("/images/{phonenumber}/{imageType}")
    public ResponseEntity<byte[]> getImage(@PathVariable String phonenumber,@PathVariable String imageType) {
        try {
            User user = (User) rss.findById(phonenumber);

            if (user != null) {
                byte[] imageData = null;
                if ("photo".equals(imageType) && user.getImagePath() != null) {
                    imageData = user.getImagePath();
                } else if ("signature".equals(imageType) && user.getSignaturePath() != null) {
                    imageData = user.getSignaturePath();
                }

                if (imageData != null) {
                    return new ResponseEntity<>(imageData, HttpStatus.OK);
                }
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
	
	
	
}
