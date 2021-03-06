import React from 'react';

const Input = ({ elementConfig, value, changeHandler, label }) => {
  return (
    <>
      <label className="label">{label}</label>
      <input
        {...elementConfig}
        value={value}
        onChange={changeHandler}
        maxlength="25"
      />
    </>
  );
};

export default Input;
