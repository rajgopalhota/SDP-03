package com.SDP.Vajra.model;

import java.util.Arrays;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@Column(name = "firstName")
	private String firstName;
	@Column(name = "lastName")
	private String lastName;
	@Column(name = "email")
	private String email;
	@Column(name = "phone", unique = true)
	private String phone;
	@Column(name = "password")
	private String password;
	@Column(name = "gender")
	private String gender;
	@Column(name = "aadharNumber")
	private String aadharNumber;
	@Column(name = "panNumber")
	private String panNumber;
	@Column(name = "mpin")
	private String mpin;

	@Lob
	@Column(name = "imagePath", columnDefinition = "MEDIUMBLOB")
	private byte[] imagePath;

	@Lob
	@Column(name = "signaturePath", columnDefinition = "MEDIUMBLOB")
	private byte[] signaturePath;

	@Column(name = "role")
	private String role = "customer";

	@Column(name = "isVerified")
	private boolean isVerified = false;

	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JsonManagedReference
	private List<BankAccount> bankAccounts;

//	public void setVerified(boolean isVerified) {
//		this.isVerified = isVerified;
//	}

	public User() {
	}

	public User(Long id, String firstName, String lastName, String email, String phone, String password, String gender,
			String aadharNumber, String panNumber, String mpin, byte[] imagePath, byte[] signaturePath, String role,
			boolean isVerified, List<BankAccount> bankAccounts) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phone = phone;
		this.password = password;
		this.gender = gender;
		this.aadharNumber = aadharNumber;
		this.panNumber = panNumber;
		this.mpin = mpin;
		this.imagePath = imagePath;
		this.signaturePath = signaturePath;
		this.role = role;
		this.isVerified = isVerified;
		this.bankAccounts = bankAccounts;
	}

	public List<BankAccount> getBankAccounts() {
		return bankAccounts;
	}

	public void setBankAccounts(List<BankAccount> bankAccounts) {
		this.bankAccounts = bankAccounts;
	}

	public String getMpin() {
		return mpin;
	}

	public void setMpin(String mpin) {
		this.mpin = mpin;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getAadharNumber() {
		return aadharNumber;
	}

	public void setAadharNumber(String aadharNumber) {
		this.aadharNumber = aadharNumber;
	}

	public String getPanNumber() {
		return panNumber;
	}

	public void setPanNumber(String panNumber) {
		this.panNumber = panNumber;
	}

	public byte[] getImagePath() {
		return imagePath;
	}

	public void setImagePath(byte[] imagePath) {
		this.imagePath = imagePath;
	}

	public byte[] getSignaturePath() {
		return signaturePath;
	}

	public void setSignaturePath(byte[] signaturePath) {
		this.signaturePath = signaturePath;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public boolean getIsVerified() {
		return isVerified;
	}

	public void setIsVerified(boolean isVerified) {
		this.isVerified = isVerified;
	}

	@Override
	public String toString() {
		return "Register{" + "id=" + id + ", firstName='" + firstName + '\'' + ", lastName='" + lastName + '\''
				+ ", email='" + email + '\'' + ", phone='" + phone + '\'' + ", password='" + password + '\''
				+ ", gender='" + gender + '\'' + ", aadharNumber='" + aadharNumber + '\'' + ", panNumber='" + panNumber
				+ '\'' + ", imagePath=" + Arrays.toString(imagePath) + ", signaturePath="
				+ Arrays.toString(signaturePath) + '}';
	}
}