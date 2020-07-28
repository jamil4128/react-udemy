import React, { Component } from 'react';
import "./App.css";
import Persons from "../components/Persons/Persons";

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      person: [
        { id: "df33", name: "Jamil", age: "29" },
        { id: "sdfs55", name: "Maruf", age: "22" },
        { id: "fdsf5", name: "Mollika", age: "21" }
      ],
      otherState: "I am another state",
      nameToggle: false
    }
    console.log("App.js constructor")
  }
  static getDerivedStateFromProps(props, state) {
    console.log("app.js getDerivedStateFromProps", props)
    return state
  }
  componentDidMount() {
    console.log("app.js componentDidMount")
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("app.js shouldComponentUpdate")
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("app.js getSnapshotBeforeUpdate")
    return null
  }
  componentDidUpdate() {
    console.log("app.js componentDidUpdate")
  }


  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.person]
    persons.splice(personIndex, 1)
    this.setState({ person: persons })
  }
  changeInputHandler = (event, id) => {
    const personIndex = this.state.person.findIndex(p => {
      return p.id === id
    })
    const persons = { ...this.state.person[personIndex] }
    persons.name = event.target.value

    const person = [...this.state.person]
    person[personIndex] = persons
    this.setState({
      person: person
    },
      () => {
        console.log("was clicked")
      })
  }
  toggleNameHandler = () => {
    const willToggle = this.state.nameToggle
    this.setState({ nameToggle: !willToggle })
  }
  render() {
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

    let personConditional = null
    if (this.state.nameToggle) {
      personConditional =
        < div >
          <Persons
            deleteClick={this.deletePersonHandler}
            person={this.state.person}
            changeClick={this.changeInputHandler} />
        </div >
      style.backgroundColor = "red"
    }
    const classes = []
    if (this.state.person.length <= 2) {
      classes.push("red")
    }
    if (this.state.person.length <= 1) {
      classes.push("bold")
    }
    console.log("app.js render")
    return (
      <div className="App" >
        <h1>{this.props.appTitle}</h1>
        <p className={classes.join(' ')}>This is very interesting</p>
        <button style={style} onClick={this.toggleNameHandler}>Switch</button>
        {personConditional}
      </div>
    )

  }
  //return React.createElement("div",{className: "App"},React.createElement("h1",null,"I am Jamil"))
}

export default App;








//assignment React components
// class App extends Component{
//   state={
//     person:[
//       {name:"Jamil"},
//       {name:"Maruf"},
//       {name:"Faruk"},
//     ]
//   }
//   changeNameHandler=()=>{
//     this.setState({
//       person:[
//       {name:"Jamila"},
//       {name:"Maruf"},
//       {name:"Faruk"}
//     ]
//     })

//   }
//   switchNameHandler=(newName)=>{
//     this.setState({
//       person:[
//       {name:"Jamila"},
//       {name:"Maruf"},
//       {name:newName}
//     ]
//     })
//   }
//   changeEventHandler=(event)=>{
//     this.setState({
//       person:[
//         {name:"Jamila"},
//         {name:event.target.value},
//         {name:"Faruk"}
//       ]
//     })
//   }
//   render(){
//     return(
//       <div className="App">
//         <UserInput click={this.changeEventHandler}/>
//         <UserOutput name={this.state.person[0].name} click={this.changeNameHandler}/>
//         <UserOutput name={this.state.person[1].name} />
//         <UserOutput name={this.state.person[2].name} click={this.switchNameHandler.bind(this,"Mallika")}/>
//       </div>
//     )
//   }
// }
// export default App;










//React hooks

// import React,{useState} from 'react';
// import "./App.css";
// import Person from "./Person/Person";

// const App=(props)=> {
//   const [persons, setPersons] = useState({
//     person:[
//       {name:"Jamil", age:"29"},
//       {name:"Maruf", age:"22"},
//       {name:"Mollika", age:"21"}
//     ],
//   })
//   const [other, setother] = useState("this is another state")
//   console.log(persons,other)
//   const changeFunctionHandler=()=>{
//     setPersons({
//     person:[
//       {name:"Faruk", age:"29"},
//       {name:"Maruf", age:"22"},
//       {name:"Mollika", age:"20"}
//     ]
//   })
//   }

//   return (
//     <div className="App">
//     <h1>I am a React component</h1>
//     <button onClick={changeFunctionHandler}>Switch</button>
//     <Person name={persons.person[0].name} age={persons.person[0].age}/>
//     <Person name={persons.person[1].name} age={persons.person[1].age}>I am a child</Person>
//     <Person name={persons.person[2].name} age={persons.person[2].age}/>

//     </div>
//   );
// }

// export default App;
