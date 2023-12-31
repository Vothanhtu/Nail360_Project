import React, { useState } from 'react';
import { CloseButton } from 'reactstrap';
import './LoginPage.css';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import {  FaCaretDown} from 'react-icons/fa';
import Navigation from './Navigation';
function LoginPage(props) {
    const [isCountryOpen, setIsCountryOpen] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [resultFB, setResultFB] = useState([]);
    const countryOptions = [
        {
            code: "+84",
            label: "Viet Nam +84",
        },
        {
            code: "+54",
            label: "Argentina+54"
        },
        {
            code: "+86",
            label: "China +86"
        },
        {
            code: "+44",
            label: "England +44"
        },
        {
            code: "+61",
            label: "Australia +61"
        },
    ]
    const [countrySelected, setCountrySelected] = useState(countryOptions[0].code);
    const [formData, setFormData] = useState({ tel: '6543210', password: 'password2' });
      // Xu ly dang nhap
    const [showPopup, setShowPopup] = useState(true);
    const toggleDropdown = () => {
        setIsCountryOpen(!isCountryOpen);
        console.log(isCountryOpen);
      };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };
    // Create token
    const generateRandomString = (json) => {
        return btoa(json);
      };
    console.log(props);
    const handleSubmit = event => {
        event.preventDefault();
        // Login
        const matchedAccount = sampleAccounts.find(
            (account) =>
              account.tel === formData.tel && account.password === formData.password
          );
          if (matchedAccount) {

            const token = generateRandomString( JSON.stringify(matchedAccount) );
            localStorage.setItem('token', token);  // Lưu token vô storage

            // localStorage.setItem('user', JSON.stringify(matchedAccount)); // Lưu in4 người dùng
            // let dataReturns = {
            //     token : token,
            //     user : JSON.stringify(matchedAccount)
            // }
            // props.getTokenNav(dataReturns);
            setShowPopup(!showPopup);
            props.closePopup();
           // setShowSuccessMessage(true);


            // check 
          } else {
            alert("'Invalid login credentials");
          }
    };
       // Test login
       const sampleAccounts = [
        { tel: '0123456789', password: 'password1' },
        { tel: '6543210', password: 'password2' },
      ];
     if (!showPopup) {
        return null;
      }
    //Hide password
    
    // Facebook and Google Login
    const handleFacebookLogin = (response) => {
        console.log(response);
  };
    const handleGoogleLogin = (response) => {
    };

    const handleLoginError = (error) => {
        console.error(error);
    };

    return (

        <div className='popup-login'>
            <img alt='login-logo' className='login-logo' src='login-logo.svg'></img>
            <div className='header-login-popup'>
                <h2>Log In</h2>
                <p>Welcome back!</p>
                <p>Please enter your details</p>
            </div>
            <CloseButton onClick={props.closePopup} />
            {/* Form login */}
            <form onSubmit={handleSubmit} className='form-login'>

                <label for="phone" className='select-country'>
                    <div className='select-country-code'>
                        <button className='btn-select-country' onClick={toggleDropdown}>
                            {countrySelected} <FaCaretDown/>
                        </button>
                        
                        {isCountryOpen && (
                            <div>
                                <ul className='country-list left-align'>
                                    {countryOptions.map((option) => (
                                        <li className='country-list-item' onClick={() => {
                                            setCountrySelected(option.code);
                                            setIsCountryOpen(!isCountryOpen);
                                        }}>
                                            {option.label}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                    </div>
                <input type="tel" name="tel" id='phone' placeholder='|       Phone Number' className='numberField' value={formData.tel}  onChange={handleInputChange} />
                </label>
                <label for="password">
                    <input type="password" name="password" placeholder="Password" className='passwordField' value={formData.password}  onChange={handleInputChange} />
                </label>
                {/* <button onClick={toggleShowPassword}>
        {showPassword ? 'Hide Password' : 'Show Password'}
      </button>
      {showPassword && <p className='hide-password'>{formData.password}</p>} */}
                <p>Forgot password?</p>
                <p>Don't have an account</p>
                <button type="submit">Continute</button>
                {showSuccessMessage && <div>Login successful</div>}
            </form>

            <p>Or</p>
            <FacebookLogin
                appId="297111689601368"
                fields="name,email,picture"
                callback={handleFacebookLogin}
                onFailure={handleLoginError}
                cssClass="btn btn-primary btn-login-facebook"
                textButton="Continute with Facebook"
            />

            <br /><br />
            {/* <GoogleLogin
        clientId="YOUR_GOOGLE_CLIENT_ID"
        buttonText="Continute with Google"
        onSuccess={handleGoogleLogin}
        onFailure={handleLoginError}
        cookiePolicy={'single_host_origin'}
        cssClass="btn-login-google"
      /> */}
        </div>
    );
}

export default LoginPage;
