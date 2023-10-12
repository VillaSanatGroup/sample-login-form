import "../styles/SignUp.css"

import React , {useState} from 'react';

import Logo from "../assets/icons/Logo.png";
import envelope from "../assets/icons/envelope-solid-48.png"
import lock from "../assets/icons/lock-alt-solid-48 (2).png"

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="App">
      <div className="login-form">
        <img className="login-form__card-image" src={Logo} alt="logo" />
        <div className="login-form__header-image"></div>
        <p className="login-form__subtitle">سلام!</p>
        <p className="login-form__description">لطفا مشخصات کاربری خود را در فرم زیر وارد کنید</p>
        <form>
          <div className="login-form__input-container">
            <img src={envelope} alt="envelope" className="login-form__icon" />
            <input type="email" placeholder="ایمیل" className="login-form__input"/>
          </div>
          <div className="login-form__input-container">
            <img src={lock} alt="lock" className="login-form__icon" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="رمز عبور"
              className="login-form__input"
            />
            <span className="login-form__show-password" onClick={togglePasswordVisibility}>
              {showPassword ? "مخفی کن" : "نمایش"}
            </span>
          </div>
          <button type="submit" className="login-form__submit-button">ثبت نام</button>
        </form>
      </div>
    </div>
  )
}

export default Login;