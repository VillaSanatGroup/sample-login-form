import { Link, useNavigate } from "react-router-dom";

import Field from "./Field";
import React from "react";
import logo from "../assets/img/logo.png";
import { useForm } from "react-hook-form";

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
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = () => {
        navigate("/welcome");
    };

    return (
        <div className="container">
            <div className="wrapper">
                <img src={logo} alt="logo" />
                <h1>عضویت</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {fieldsInfo.map(fieldInfo =>
                        <Field
                            key={fieldInfo.id}
                            fieldInfo={fieldInfo}
                            register={register}
                            errors={errors}
                        />
                    )}
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

export default Register;