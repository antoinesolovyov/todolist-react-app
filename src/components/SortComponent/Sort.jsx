import React from "react";

import "./Sort.css";

class Sort extends React.Component {
    state = { field: "date", dir: false };

    handleButtonClick = event => {
        this.setState({
            field: event.target.id,
            dir: !this.state.dir
        });

        this.props.onSortTasks(event.target.id, !this.state.dir);
    };

    render() {
        return (
            <div className="sort">
                <p>Sort</p>
                <button id="date" onClick={this.handleButtonClick}>
                    Sort on date
                    {this.state.field === "date" && this.state.dir ? "↑" : "↓"}
                </button>
                <button id="task" onClick={this.handleButtonClick}>
                    Sort on task
                    {this.state.field === "task" && this.state.dir ? "↑" : "↓"}
                </button>
            </div>
        );
    }
}

export default Sort;
