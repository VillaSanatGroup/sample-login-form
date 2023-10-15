import { Link, useNavigate } from "react-router-dom";

import Field from "./Field";
import React from "react";
import logo from "../assets/img/logo.png";
import { useForm } from "react-hook-form";

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
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = () => {
        navigate("/welcome");
    };

    return (
        <div className="container">
            <div className="wrapper">
                <img src={logo} alt="logo" />
                <h1>ورود</h1>
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

export default Login;