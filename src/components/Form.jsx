import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: "", task: "", isError: false };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

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
            <>
                <form onSubmit={this.handleSubmit}>
                    <input
                        id="date"
                        className={this.state.isError ? "input__alert" : ""}
                        type="date"
                        value={this.state.date}
                        onChange={this.handleChange}
                        placeholder="Task"
                    />
                    <input
                        id="task"
                        className={this.state.isError ? "input__alert" : ""}
                        type="text"
                        value={this.state.task}
                        onChange={this.handleChange}
                        placeholder="Task"
                    />
                    <input
                        className="add__task"
                        type="submit"
                        value="Add task"
                    />
                </form>
            </>
        );
    }
}

export default Form;
