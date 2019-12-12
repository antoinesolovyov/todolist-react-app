import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: "", task: "" };

        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleTaskChange = this.handleTaskChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleDateChange(event) {
        this.setState({ date: event.target.value });
    }

    handleTaskChange(event) {
        this.setState({ task: event.target.value });
    }

    handleSubmit = event => {
        const { date, task } = this.state;
        const uuidv1 = require('uuid/v1');

        this.props.onAddTask({
            id: uuidv1(),
            date,
            task
        });

        event.preventDefault();
    };

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input
                        className="date__input"
                        type="date"
                        value={this.state.date}
                        onChange={this.handleDateChange}
                        placeholder="Task"
                    />
                    <input
                        className="task__input"
                        type="text"
                        value={this.state.task}
                        onChange={this.handleTaskChange}
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
