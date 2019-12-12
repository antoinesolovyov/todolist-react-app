import React from "react";

import Form from "./Form";
import List from "./List";
import Sort from "./SortComponent/Sort";
import Filter from "./FilterComponent/Filter";

class Article extends React.Component {
    state = {
        tasks: JSON.parse(localStorage.getItem("tasks")),
        initialTasksBeforeFilter: JSON.parse(localStorage.getItem("tasks"))
    };

    handleAddTask = data => {
        const nextTasks = [data, ...this.state.initialTasksBeforeFilter];

        localStorage.setItem("tasks", JSON.stringify(nextTasks));
        this.setState({
            tasks: nextTasks,
            initialTasksBeforeFilter: nextTasks
        });
    };

    handleDeleteTask = id => {
        const nextTasks = this.state.initialTasksBeforeFilter.filter(
            task => task.id !== id
        );

        localStorage.setItem("tasks", JSON.stringify(nextTasks));
        this.setState({
            tasks: nextTasks,
            initialTasksBeforeFilter: nextTasks
        });
    };

    handleSortTasks = (field, dir) => {
        const nextTasks = this.state.initialTasksBeforeFilter.sort(
            (task1, task2) =>
                task1[field] > task2[field] ? (dir ? 1 : -1) : dir ? -1 : 1
        );

        localStorage.setItem("tasks", JSON.stringify(nextTasks));
        this.setState({ tasks: nextTasks });
    };

    handleFilterTasks = ({ date, task }) => {
        let nextTasks;

        if (!date && !task) {
            nextTasks = this.state.initialTasksBeforeFilter;
        } else if (date && !task) {
            nextTasks = this.state.initialTasksBeforeFilter.filter(initTask =>
                initTask.date.includes(date)
            );
        } else if (!date && task) {
            nextTasks = this.state.initialTasksBeforeFilter.filter(initTask =>
                initTask.task.includes(task)
            );
        } else {
            nextTasks = this.state.initialTasksBeforeFilter.filter(
                initTask =>
                    initTask.date.includes(date) && initTask.task.includes(task)
            );
        }

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
                <Filter onFilterTasks={this.handleFilterTasks} />
            </>
        );
    }
}

export default Article;
