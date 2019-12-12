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

    render() {
        return (
            <React.Fragment>
                <Form onAddTask={this.handleAddTask} />
                <List tasks={this.state.tasks} />
            </React.Fragment>
        );
    }
}

export default Article;
