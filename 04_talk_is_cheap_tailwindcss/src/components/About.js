
import UserContext from "../utils/useUserContext";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import { useContext } from "react";


class About extends Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  // const {loggedInUser} = useContext(UserContext);

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React Web Series</h2>
        {/* <User name={"Arnav Umarkar"}/> */}
        {/* creating instances of the class */}
        <UserClass name={"Arnav Umarkar"} /> 
        <UserClass name={"Ram"} /> 
        <h3>User : 
          <UserContext.Consumer>
            {({loggedInUser})=> (<h4>{loggedInUser}</h4>)}
          </UserContext.Consumer>
          
        </h3>
      </div>
    );
  }
}

export default About;

// two sage process while rendering the component
// - First rendering
// - Second commit (componentDidMount)
/*
  - Parent Constructor
  - Parent render

      - First Constructor
      - First Render

      - Second Constructor
      - Second Render

      <DOM UPDATE - IN SINGLE BATCH>

      - First componentDidMount
      - Second componentDidMount

  - Parent componentDidMount
*/