package com.SDP.Vajra.service;

import com.SDP.Vajra.model.User;

public interface UserService {
	public User registerUser(User r);

	public User findById(String id);

}
