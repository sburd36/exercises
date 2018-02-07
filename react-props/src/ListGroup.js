import React from "react";

export default class ListGroup extends React.Component {
    render() {
        return (
            <ul className="list-group">
                {
                    this.props.items.map((item, i) => 
                        <li key={i} className="list-group-item">{item}</li>)
                }
            </ul>
        );
    }
}