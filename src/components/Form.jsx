import React from "react";

import Input from "./InputComponent/Input";

class Form extends React.Component {
    state = { date: "", task: "", isError: false };

    handleChange = event => {
        const { id, value } = event.target;
        this.setState({ [id]: value, isError: false });
    };

    handleSubmit = event => {
        const { date, task } = this.state;
        const uuidv1 = require("uuid/v1");

        if (date && task) {
            this.props.onAddTask({
                id: uuidv1(),
                date,
                task
            });

            this.setState({ isError: false });
        } else {
            this.setState({ isError: true });
        }

        event.preventDefault();
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Input
                    id="date"
                    className={this.state.isError ? "input__alert" : ""}
                    type="date"
                    value={this.state.date}
                    onChange={this.handleChange}
                    placeholder="Date"
                />
                <Input
                    id="task"
                    className={this.state.isError ? "input__alert" : ""}
                    type="text"
                    value={this.state.task}
                    onChange={this.handleChange}
                    placeholder="Task"
                />
                <input className="add__task" type="submit" value="Add task" />
            </form>
        );
    }
}

export default Form;
