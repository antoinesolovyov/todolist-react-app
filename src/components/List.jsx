import React from "react";

import Task from "./Task";

class List extends React.Component {
    render() {
        const list = () =>
            this.props.tasks.map(task => (
                <Task
                    key={task.id}
                    id={task.id}
                    date={task.date}
                    task={task.task}
                    onDeleteTask={this.props.onDeleteTask}
                />
            ));

        return (
            <div className="task__list">
                <ul>{list()}</ul>
            </div>
        );
    }
}

export default List;
