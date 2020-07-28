import React, { Component } from "react";
import Person from "./Person/Person"
class Persons extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log("persons.js getDerivedStateFromProps", props)
        return state
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("Persons.js shouldComponentUpdate")
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Persons.js getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate() {
        console.log("Persons.js componentDidUpdate")
    }
    render() {
        console.log("Persons.js rendering......")
        return (
            this.props.person.map((p, index) => {
                return < Person
                    click={() => this.props.deleteClick(index)
                    }
                    name={p.name}
                    age={p.age}
                    key={p.id}
                    changed={(event) => { this.props.changeClick(event, p.id) }} />

            })

        )
    }
}
export default Persons
