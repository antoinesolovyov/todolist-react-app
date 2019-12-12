import React from "react";

import Form from "./Form";
import List from "./List";
import Sort from "./Sort";

class Article extends React.Component {
    state = {
        tasks: []
    };

    handleAddTask = data => {
        const nextTasks = [data, ...this.state.tasks];
        this.setState({ tasks: nextTasks });
    };

    handleDeleteTask = id => {
        const nextTasks = this.state.tasks.filter(task => task.id !== id);
        this.setState({ tasks: nextTasks });
    };

    handleSortTasks = (field, dir) => {
        const nextTasks = this.state.tasks.sort((task1, task2) =>
            task1[field] > task2[field] ? (dir ? 1 : -1) : dir ? -1 : 1
        );
        this.setState({ tasks: nextTasks });
    };

    render() {
        return (
            <>
                <Form onAddTask={this.handleAddTask} />
                <List
                    tasks={this.state.tasks}
                    onDeleteTask={this.handleDeleteTask}
                />
                <Sort onSortTasks={this.handleSortTasks} />
            </>
        );
    }
}

export default Article;
