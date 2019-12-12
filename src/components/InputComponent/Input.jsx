import React from "react";

import "./Input.css";

const Input = (props) => (
    <input
        id={props.id}
        className={props.className}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
    />
);

export default Input;
