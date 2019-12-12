import React from "react";

import Form from "./Form";
import List from "./List";

const myTasks = [];

class Article extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: myTasks
        };
    }

    handleAddTask = data => {
        const nextTasks = [data, ...this.state.tasks];
        this.setState({ tasks: nextTasks });
    };

    handleDeleteTask = id => {
        const nextTasks = this.state.tasks.filter(task => task.id !== id);
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
            </>
        );
    }
}

export default Article;
