import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            count2: 1
        }

        console.log(this.props.name + " Constructor");
        
    }

    componentDidMount() {
        console.log(this.props.name + " Component Did Mount");        
    }

    render() {
        
        const {name} = this.props;
        const {count, count2} = this.state;
        console.log(name + " Render");
        return (
            <div className="user-card">
                {/* <h2>Name: {this.props.name}</h2> */}
                <h2>Name: {name}</h2>
                <button onClick={()=>{
                    // never update state variables directly
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>Increase Count</button>
                <h2>count: {count}</h2>
                {/* <h2>count2: {count2}</h2> */}
                <h3>Location: Pune</h3>
                <h4>Contact: @arnavumarkar9</h4>
            </div>
        )
    }
}

export default UserClass;