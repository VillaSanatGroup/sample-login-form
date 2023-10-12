import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import logo from "../assets/img/logo.png";


const fieldsInfo = [
    {
        id: 1,
        name: "email",
        placeholder: "آدرس ایمیل",
        iconClassName: "fa-solid fa-envelope"
    },
    {
        id: 2,
        name: "password",
        placeholder: "رمز عبور",
        iconClassName: "fa-solid fa-eye"
    }
];

const Login = () => {

    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = () => {
        navigate("/welcome");
    };

    return (
        <div className="container">
            <div className="wrapper">
                <img src={logo} alt="logo" />
                <h1>ورود</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {
                        fieldsInfo.map(fieldInfo =>
                            <Field
                                key={fieldInfo.id}
                                fieldInfo={fieldInfo}
                                register={register}
                                errors={errors}
                            />
                        )
                    }
                    <button
                        className={Object.keys(errors).length && "disable-btn"}
                        type="submit">
                        ورود
                    </button>
                </form>
                <p>
                    ثبت‌نام نکرده‌اید؟
                    <Link to="/register"> ثبت‌نام</Link>
                </p>
            </div>
        </div>
    );
};


const Field = ({fieldInfo, register, errors}) => {

    const {name, placeholder, iconClassName} = fieldInfo;
    const [showPassword, setShowPassword] = useState(false);
    const iconRef = useRef();

    const togglePasswordVisibility = () => {
        if (iconRef.current.className === "fa-solid fa-eye") {
            setShowPassword(true);
        } else if (iconRef.current.className === "fa-solid fa-eye-slash") {
            setShowPassword(false);
        }
    };

    return (
        <div className="field">
            <input
                type={
                    iconClassName === "fa-solid fa-eye" ?
                    showPassword ? "text" : "password" :
                    "text"
                }
                {...register(name, {
                    required: true
                })}
                placeholder={placeholder}
            />
            {
                showPassword ?
                <i ref={iconRef} className={iconClassName + "-slash"} onClick={togglePasswordVisibility}></i> :
                <i ref={iconRef} className={iconClassName} onClick={togglePasswordVisibility}></i>
            }
            <span className="error">
                {
                    errors[name]?.type === "required" && `${placeholder} نمی‌تواند خالی باشد!`
                }
            </span>
        </div>
    );
};


export default Login;