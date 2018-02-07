import React from "react";

export default class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <div className="card-text">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}