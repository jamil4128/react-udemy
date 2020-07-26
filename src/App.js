import React, { Component } from 'react';
import "./App.css";
import Person from "./Person/Person"

export class App extends Component {
  state = {
    person: [
      { name: "Jamil", age: "29" },
      { name: "Maruf", age: "22" },
      { name: "Mollika", age: "21" }
    ],
    otherState: "I am another state",
    nameToggle: false
  }

  switchNameHandler = (NewName) => {
    this.setState({
      person: [
        { name: NewName, age: "29" },
        { name: "Maruf", age: "22" },
        { name: "Mollika", age: "20" }
      ]
    },
      () => {
        console.log("was clicked")
      })
  }

  changeInputHandler = (event) => {
    this.setState({
      person: [
        { name: "jamil", age: "29" },
        { name: event.target.value, age: "22" },
        { name: "Mollika", age: "20" }
      ]
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
      backGroundColor: "#c2f2e2",
      font: "inherit",
      padding: "8px"
    }

    let personConditional = null
    if (this.state.nameToggle) {
      personConditional =
        < div >
          {this.state.person.map(p => {
            return <Person name={p.name} age={p.age} />

          })}
        </div >

    }
    return (
      <div className="App" >
        <h1>Hello World</h1>
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

