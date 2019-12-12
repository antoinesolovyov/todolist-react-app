import React from "react";

import "./Input.css";

export default class Input extends React.Component {
    render() {
        return (
            <input
                id={this.props.id}
                className={this.props.className}
                type={this.props.type}
                value={this.props.value}
                onChange={this.props.onChange}
                placeholder={this.props.placeholder}
            />
        );
    }
}
