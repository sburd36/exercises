import React from "react";

export default class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            snapshot: undefined //firebase snapshot of all tasks for this user
        }
    }
    componentDidMount() {
        //TODO: if this.props.taskRef is something, 
        //start listening for changes to the ref

    }
    componentWillReceiveProps(nextProps) {
        //TODO: if nextProps.taskRef is something,
        //start listening for changes to the ref

    }
    listenForTasks() {
        //TODO: listen for changes on the tasksRef
        //and update the firebase snapshot in our state
        //when there are changes
    }
    componentWillUnmount() {
        //stop listening for changes to tasksRef
    }
    render() {
        //if we don't yet have a snapshot, render
        //a simple loading message 
        //(or replace this with something cooler)
        if (!this.state.snapshot) {
            return <p>loading...</p>
        }

        //TODO: loop over the tasks snapshot
        //and create a <Task/> for each child snapshot
        //pushing it into an array

        return (
            <ul>
            </ul>
        );
    }
}