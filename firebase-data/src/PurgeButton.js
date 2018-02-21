import React from "react";

export default class PurgeButton extends React.Component {
    handleClick() {
        //TODO: use the tasksRef prop to find all tasks
        //that have a `.done` property set to true, and
        //remove them from the database
        let doneTasksRef = this.props.tasksRef.orderByChild("done").equalTo(true);
        doneTasksRef.once("value", snapshot => {
            snapshot.forEach(taskSnap => {
                taskSnap.ref.remove();
            });
        });
    }
    render() {
        return (
            <button className="btn btn-primary" onClick={() => this.handleClick()}>
                Purge Completed
            </button>
        );
    }
}