import React from "react";

import Input from "../InputComponent/Input";

class Filter extends React.Component {
    state = { date: "", task: "" };

    handleChange = event => {
        const { id, value } = event.target;
        this.setState({ [id]: value, isError: false });
    };

    handleSubmit = event => {
        const { date, task } = this.state;

        this.props.onFilterTasks({
            date,
            task
        });

        event.preventDefault();
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                Filter
                <Input
                    id="date"
                    type="date"
                    value={this.state.date}
                    onChange={this.handleChange}
                    placeholder="Date"
                />
                <Input
                    id="task"
                    type="text"
                    value={this.state.task}
                    onChange={this.handleChange}
                    placeholder="Task"
                />
                <input className="add__task" type="submit" value="Filter" />
            </form>
        );
    }
}

export default Filter;
