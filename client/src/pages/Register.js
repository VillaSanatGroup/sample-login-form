import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import logo from "../assets/img/logo.png";


const fieldsInfo = [
    {
        id: 1,
        name: "username",
        pattern: "^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]{4,10}$",
        placeholder: "نام کاربری",
        iconClassName: "fa-solid fa-user",
        error: "نام کاربری باید شامل 4 تا 10 حرف انگلیسی و عدد باشد!"
    },
    {
        id: 2,
        name: "email",
        pattern: "^[A-Za-z0-9]+[@][a-z]+[.][a-z]{2,3}$",
        placeholder: "آدرس ایمیل",
        iconClassName: "fa-solid fa-envelope",
        error: "آدرس ایمیل نامعتبر است!"
    },
    {
        id: 3,
        name: "password",
        pattern: "^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%])[A-Za-z0-9!@#$%]{6,16}$",
        placeholder: "رمز عبور",
        iconClassName: "fa-solid fa-eye",
        error: "رمز عبور باید شامل 6 تا 16 حرف انگلیسی، عدد و کاراکتر خاص باشد!"
    }
];

const Register = () => {

    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = () => {
        navigate("/welcome");
    };

    return (
        <div className="container">
            <div className="wrapper">
                <img src={logo} alt="logo" />
                <h1>عضویت</h1>
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
                        ثبت‌نام
                    </button>
                </form>
                <p>
                    قبلا ثبت‌نام کرده‌اید؟
                    <Link to="/"> ورود</Link>
                </p>
            </div>
        </div>
    );
};


const Field = ({fieldInfo, register, errors}) => {

    const {name, pattern, placeholder, iconClassName, error} = fieldInfo;
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
                    required: true,
                    pattern: new RegExp(pattern)
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
                    (errors[name]?.type === "required" && `${placeholder} نمی‌تواند خالی باشد!`) ||
                    (errors[name] && error)
                }
            </span>
        </div>
    );
};


export default Register;