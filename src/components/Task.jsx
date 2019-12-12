import React from "react";

class Task extends React.Component {
    state = {
        checked: false,
        checkedClass: ""
    };

    handleCheckboxChange = event => {
        this.setState({
            checked: event.target.checked
        });

        if (event.target.checked) {
            this.setState({ checkedClass: "task__checked" });
        } else {
            this.setState({ checkedClass: "" });
        }
    };

    handleButtonClick = event => {
        this.props.onDeleteTask(this.props.id);

        event.preventDefault();
    };

    render() {
        return (
            <li>
                <div className="checkbox">
                    <input
                        type="checkbox"
                        checked={this.state.checked}
                        onChange={this.handleCheckboxChange}
                    />
                </div>
                <div className="task">
                    <p className="task__date">{this.props.date}</p>
                    <p
                        className={
                            ("task__description", this.state.checkedClass)
                        }
                    >
                        {this.props.task}
                    </p>
                </div>
                <div className="delete">
                    <input
                        type="button"
                        onClick={this.handleButtonClick}
                        value="–"
                    />
                </div>
            </li>
        );
    }
}

export default Task;
