import React, { useRef, useState } from 'react';

const Field = ({ fieldInfo, register, errors }) => {
  const { name, pattern, placeholder, iconClassName, error } = fieldInfo;
  const [showPassword, setShowPassword] = useState(false);
  const iconRef = useRef();

  const togglePasswordVisibility = () => {
    if (iconRef.current.className === 'fa-solid fa-eye') {
      setShowPassword(true);
    } else if (iconRef.current.className === 'fa-solid fa-eye-slash') {
      setShowPassword(false);
    }
  };

  return (
    <div className="field">
      <input
        type={
          iconClassName === 'fa-solid fa-eye'
            ? showPassword
              ? 'text'
              : 'password'
            : 'text'
        }
        {...register(name, {
          required: true,
          pattern: new RegExp(pattern),
        })}
        placeholder={placeholder}
      />
      {showPassword ? (
        <i
          ref={iconRef}
          className={iconClassName + '-slash'}
          onClick={togglePasswordVisibility}
        ></i>
      ) : (
        <i
          ref={iconRef}
          className={iconClassName}
          onClick={togglePasswordVisibility}
        ></i>
      )}
      <span className="error">
        {(errors[name]?.type === 'required' && `${placeholder} نمی‌تواند خالی باشد!`) ||
          (errors[name] && error)}
      </span>
    </div>
  );
};

export default Field;