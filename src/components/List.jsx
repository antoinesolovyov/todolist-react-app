import React from "react";

import Task from "./Task";

class List extends React.Component {
    render() {
        const listElement = [];

        for (let i = 0; i < this.props.tasks.length; i++) {
            listElement.push(
                <Task
                    key={this.props.tasks[i].id}
                    id={this.props.tasks[i].id}
                    date={this.props.tasks[i].date}
                    task={this.props.tasks[i].task}
                    onDeleteTask={this.props.onDeleteTask}
                />
            );
        }

        return (
            <div className="task__list">
                <ul>{listElement}</ul>
            </div>
        );
    }
}

export default List;
