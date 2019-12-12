import React from "react";

import Form from "./Form";
import List from "./List";
import Sort from "./SortComponent/Sort";
import Filter from "./FilterComponent/Filter";

class Article extends React.Component {
    state = {
        tasks: [],
        initialTasksBeforeFilter: []
    };

    handleAddTask = data => {
        const nextTasks = [data, ...this.state.tasks];

        this.setState({ tasks: nextTasks, initialTasksBeforeFilter: nextTasks });
    };

    handleDeleteTask = id => {
        const nextTasks = this.state.tasks.filter(task => task.id !== id);

        this.setState({ tasks: nextTasks, initialTasksBeforeFilter: nextTasks });
    };

    handleSortTasks = (field, dir) => {
        const nextTasks = this.state.tasks.sort((task1, task2) =>
            task1[field] > task2[field] ? (dir ? 1 : -1) : dir ? -1 : 1
        );

        this.setState({ tasks: nextTasks });
    };

    handleFilterTasks = ({ date, task }) => {
        let nextTasks;

        if (!date && !task) {
            nextTasks = this.state.initialTasksBeforeFilter;
        } else if (date && !task) {
            nextTasks = this.state.initialTasksBeforeFilter.filter(t => t.date.includes(date));
        } else if (!date && task) {
            nextTasks = this.state.initialTasksBeforeFilter.filter(t => t.task.includes(task));
        } else {
            nextTasks = this.state.initialTasksBeforeFilter.filter(
                t => t.date.includes(date) && t.task.includes(task)
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
