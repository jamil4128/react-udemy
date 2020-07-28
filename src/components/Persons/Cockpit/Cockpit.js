import React from 'react';
import "./Cockpit.css"

function Cockpit(props) {
    const style = {
        backgroundColor: "green",
        color: "white",
        font: "inherit",
        padding: "8px",
        border: "1px solid blue",
        cursor: "pointer",
        ":hover": {
            backgroundColor: "lightgreen",
            color: "black",
        }
    }
    if (props.nameToggle) {
        style.backgroundColor = "red"
    }
    const classes = []
    if (props.person.length <= 2) {
        classes.push("red")
    }
    if (props.person.length <= 1) {
        classes.push("bold")
    }
    return (
        <div className="Cockpit">
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is very interesting</p>
            <button style={style} onClick={props.toggleNameHandler}>Switch</button>

        </div>
    );
}

export default Cockpit;
