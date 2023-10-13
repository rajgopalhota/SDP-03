import React, { useState } from "react";
import Captcha from "react-captcha-generator";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import UrlHelper from "./../UrlHelper";



export default function Login() {
  const [imageURL, setImageURL] = useState('');
  const [signURL, setSignURL] = useState('');

  const navigate = useNavigate();
  const [captchaValue, setCaptchaValue] = useState("");
  const [userCaptchaValue, setUserCaptchaValue] = useState("");
  const [captchaRefresh, setCaptchaRefresh] = useState(false);

  const navReg = () => {
    navigate('/register');
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleUserCaptchaChange = (event) => {
    setUserCaptchaValue(event.target.value);
  };

  const handleCaptchaClick = () => {
    setCaptchaRefresh(!captchaRefresh);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userCaptchaValue === captchaValue) {
      const formData = new FormData();
      formData.append("phone", e.target.elements.phone.value);
      formData.append("password", e.target.elements.password.value);
      submitLogin(formData, e);

    } else {
      toast("Incorrect captcha");
    }
  };

  async function submitLogin(data, e) {
    console.log(data)
    try {
      const response = await UrlHelper.post("/login", data);
      toast("Login success");
      console.log(response.data.phone);
      const phonedat = response.data.phone;
      console.log(response.data.imagePath); 
      const imgresponse = await UrlHelper.get(`/images/${phonedat}/${"photo"}`, { responseType: 'arraybuffer' });
      const signresponse = await UrlHelper.get(`/images/${phonedat}/${"signature"}`, { responseType: 'arraybuffer' });
      const responseimagedata = imgresponse.data;
      const responsesignaturegedata = signresponse.data;

      const blob = new Blob([responseimagedata], { type: 'image/png' });
      const imageURL = URL.createObjectURL(blob);
        setImageURL(imageURL);

      const signblob = new Blob([responsesignaturegedata], { type: 'image/png' });
      const signURL = URL.createObjectURL(signblob);
        setSignURL(signURL);
      // e.target.reset();
    } catch (error) {

      toast("An error occured during registration!");
    }
  }


  return (
    <>
      <div
        className="modal fade loginmodal"
        tabIndex="-5"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content tilt-in-fwd-br">
            <div className="container">
              <div
                className="glass-card p-4 m-2 flex-fill loginmodal"
              >
                <h2>
                  Welcome to Vajra <i className="fa-solid fa-sack-dollar"></i>
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <br />
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fa fa-phone"></i>
                        </span>
                      </div>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <br />
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fa fa-lock"></i>
                        </span>
                      </div>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div
                      className="form-group col-md-5"
                      onClick={handleCaptchaClick}
                    >
                      <Captcha
                        key={captchaRefresh ? "refresh" : "normal"} // Force re-render on refresh
                        result={handleCaptchaChange}
                        textColor="white"
                        className="captcha"
                      />
                    </div>
                    <div
                      className="form-group col-md-5"
                      style={{ marginTop: "30px" }}
                    >
                      <input
                        type="text"
                        onChange={handleUserCaptchaChange}
                        placeholder="Enter captcha"
                        className="form-control captchatext"
                      />
                    </div>
                  </div>
                  <p data-dismiss="modal" data-bs-dismiss="modal" onClick={navReg}>
                    Newbie?
                    SignUp here
                  </p>
                  <div className="text-center loginbutton logbutton">
                    <button type="submit">
                      <i className="fa fa-paper-plane"></i>&nbsp;Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
