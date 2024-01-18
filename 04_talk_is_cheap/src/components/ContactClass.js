import { Component } from "react";
import Shimmer from "./Shimmer";

class Contact extends Component {

  constructor() {
    super();
    this.state = {
      userInfo: {
        name: "",
        location: "",
        avatar_url: "",
        company: "",
        public_repos: ""
      }
    }
  }
    
  async componentDidMount(){
    let response = await fetch("https://api.github.com/users/ArnavU");
    let data = await response.json();

    this.setState({
      userInfo: data
    })
  }
  
  render() {
    if(this.state.userInfo.name == "") {
      return <Shimmer/>
    }
    const {name, location, avatar_url, company, public_repos} = this.state.userInfo;
    debugger;
    return(
      <div className="contact-card">
      <h2>Name: {name}</h2>
      <h2>Location: {location}</h2>
      <h2>Contact: {"arnavumarkar1232@gmail.com"}</h2>
      <img src={avatar_url}/>
      <h2>College: {company}</h2>
      <h2>Total Repos: {public_repos}</h2>
    </div>
   )
  }
}

// const Contact = () => {
// 	return (
// 		<div>
// 			<h1>Contact Us Page</h1>
// 		</div>
// 	);
// };

export default Contact;
