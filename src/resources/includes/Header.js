import React from "react";
import myrestaurant from "./myrestaurant.jpeg"
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


export function Administrator({ userName }){
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  // My Git Json: https://api.github.com/users/Billy-06

  useEffect(() => {
    if (!userName) return ;
    setLoading(true);
      
    fetch(`https://api.github.com/users/${userName}`)
    .then((response) => response.json())
    .then(setData)
    .then(() => setLoading(false))
    .catch(setError);
  }, [userName]);

  if(loading) return <h1>Currently fetching data....</h1>;
  if(error) return <pre>{JSON.stringify(error, null,2)}</pre>;
  if(!data) return null;

  return (
    <>
        <Header />
      <h1>
        This is the admin page. You must be 
        authorized to view this.
      </h1>
      {JSON.stringify(data)}
      <div className="admin views" style={{ display:"flex", justifyContent:"center" }} >
          <div className="views">
            <h1>Name: {data.name}</h1>
            <p>Twitter Handle: {data.twitter_username}</p>
            <p>Number of Public Repos: {data.public_repos}</p>
            <h4>Location: {data.location}</h4>
          </div>
          <div className="views">
            <img alt={data.userName} src={data.avatar_url}/>
          </div>
            
            
      </div>
      <Footer />
    </>
  )


  
}

export function Header(props){
  return(
    <header>
        <div style={{ 
            backgroundColor:"lightpink",
            fontSize:"1.2em",
            display:"flex",
            justifyContent: "center",
            height:"60px" }}>
            <div style={{
                position:"relative",
                top:"20%",
                width:"80%"
            }}>
                <nav style={{display: "flex", justifyContent:"space-between"}}>
                    {/* the link to attribute takes the route path to the page*/}
                    <Link to="../" style={{ borderRadius:"25px", backgroundColor:"lightcyan", width:"120px", height:"30px", textAlign:"center" }} >Home</Link>
                    <Link to="../blog" style={{ borderRadius:"25px", backgroundColor:"lightcyan", width:"120px", height:"30px", textAlign:"center" }}>Blog</Link>
                    <Link to="../about" style={{ borderRadius:"25px", backgroundColor:"lightcyan", width:"120px", height:"30px", textAlign:"center" }}>AboutMe</Link>
                    <Link to="../contact" style={{ borderRadius:"25px", backgroundColor:"lightcyan", width:"120px", height:"30px", textAlign:"center" }}>ContactMe</Link>
                    <Link to="../admin" style={{ borderRadius:"25px", backgroundColor:"lightcyan", width:"120px", height:"30px", textAlign:"center" }}>Admin</Link>
                </nav>
            </div>
        </div>
    </header>
  )
}

export function Main(props){
  const [loggedIn, setLoggedIn] = useState("You are logged in");
  return(
    <section>
      <span>
        <h2>{loggedIn}</h2>
        <button onClick={() => setLoggedIn("You are Logged In")}>
          Log In
        </button>
        <button onClick={() => setLoggedIn("You are Logged Out")}>
          Log Out
        </button>
        <button onClick={() => setLoggedIn("You just Deleted your Account Buddy")}>
          Delete Account
        </button>
        <button onClick={() => setLoggedIn("Welcome to your new account")}>
          Create Account
        </button>
      </span>
      <p>Have a read {props.content}. Happy reading</p>
      <img 
      src={myrestaurant} 
      alt="A restaurant" 
      height={400}/>
      <h3 style={{textAlign: "left"}} >Menu Items</h3>
      <ul style={{textAlign: "left", listStyle: "none"}}>
          {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
          ))}
      </ul>
    </section>
  )
}
export function Footer(props){
  return(
    <footer>
      <div style={{
          backgroundColor: "lightpink",
          display: "flex",
          justifyContent: "center",
          position: "-webkit-sticky",
          height: "40px"
      }}>
          <div style={{ 
              position: "relative",
              top: "15%",
              display: "flex",
              justifyContent: "space-between",
              width: "70%"
            }} >
              <p>Contact Me on Social</p>
              <p>Copyright {props.year}</p>
          </div>
          
      </div>
    </footer>
  )
}

// Lacks keys for teh value and thus give an error when rendered.
// Best to map it to an object.
const dishes = [
  "Macarroni and Cheese",
  "Sushi",
  "Mango Chicken"
]

const pages = [
  "Home Page",
  "About Me",
  "Contact Me"
]

export const dishesObject = dishes.map((dish, i) => ({ id:i ,title: dish }))
export const pagesObject = pages.map((page, i) => ({ id:i ,title: page }))

