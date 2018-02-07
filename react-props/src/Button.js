import React from "react";

export default class Button extends React.Component {
    render() {
        let styleClasses = "btn btn-" + this.props.kind;
        return (
            <button className={styleClasses}>
                {this.props.caption}
            </button>
        );
    }    
}