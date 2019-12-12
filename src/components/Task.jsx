import React from "react";

class Task extends React.Component {
    state = { checked: false, bg: "white" };

    handleCheckboxChange = event => {
        this.setState({
            checked: event.target.checked
        });

        if (this.state.checked) {
            this.setState({
                bg: "red"
            });
        } else {
            this.setState({
                bg: "white"
            });
        }
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
                    <p className="task__description">{this.props.task}</p>
                </div>
                <div className="delete">
                    <input type="button" value="–" />
                </div>
            </li>
        );
    }
}

export default Task;
