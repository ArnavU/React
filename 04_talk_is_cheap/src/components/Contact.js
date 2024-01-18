import { Component, useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Contact = () => {
	const [userInfo, setUserInfo] = useState(null);
    const [count, setCount] = useState(0);
    
	useEffect(() => {
        fetchData();

        let timer = null;
        // timer = setInterval(()=>{
        //     console.log("Set Interval Called");
        // }, 1000);
        console.log("Use effect called");
        
        // this function will just before we change the route
        return ()=>{
            if(timer)
            clearInterval(timer);
        }

	}, [count]);
    
	const fetchData = async () => {
        let response = await fetch("https://api.github.com/users/ArnavU");
		let data = await response.json();
        
		setUserInfo(data);
	};
    
	if (userInfo == null) {
        return <Shimmer />;
	}
    
	// debugger;
    const { name, location, avatar_url, company, public_repos } = userInfo;
	return (
		<div className="contact-card">
            <button onClick={()=>{
                setCount(count+1);
            }}>Increase Counter</button>
            <h2>Count: {count}</h2>
			<h2>Name: {name}</h2>
			<h2>Location: {location}</h2>
			<h2>Contact: {"arnavumarkar1232@gmail.com"}</h2>
			<img src={avatar_url} />
			<h2>College: {company}</h2>
			<h2>Total Repos: {public_repos}</h2>
		</div>
	);
};

export default Contact;
