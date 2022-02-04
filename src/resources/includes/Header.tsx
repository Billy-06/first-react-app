import React from "react";
import styled from "styled-components";
import myrestaurant from "./myrestaurant.jpeg";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { DisplayDiv, PictureDiv, SubContainer } from "../Displays/StyledSections/StyledSections";
import { NavHeader, NavButton, FooterDiv, FooterContainer } from "../Displays/StyledSections/StyledSections";

export interface UserInterface {
  userName ?: string;
  name ?: string;
  twitter_username ?: string;
  public_repos ?: number;
  location ?: string;
  avatar_url ?: string;
  validInfo ?: boolean;
}

function GrabInfo(profileName: string): UserInterface {
  const [data, setData] = useState<UserInterface>({});

  useEffect(() => {
    if (!data) return ;
      
    fetch(`https://api.github.com/users/${ profileName }`)
    .then((response) => response.json())
    .then(setData)
    .catch();
  }, [ profileName, data ]);

    return data;
}

export class Administrator extends React.Component<UserInterface>{


  render(): React.ReactNode {

    const { 
      userName, name, twitter_username,
      public_repos, location, avatar_url
    } = this.props;

    return (
      <>
      <DisplayDiv>
          <PictureDiv>
            <h1>
              This is the admin page. You must be 
              authorized to view this.
            </h1>
            {JSON.stringify(this.props)}
          </PictureDiv>
          <SubContainer>
              <div className="admin views" style={{ display:"flex", justifyContent:"center" }} >
                <div className="views">
                  <h1>Name: { name }</h1>
                  <p>Twitter Handle: { twitter_username }</p>
                  <p>Number of Public Repos: { public_repos }</p>
                  <h4>Location: { location }</h4>
                </div>
                <div className="views">
                  <img alt={ userName } src={ avatar_url }/>
                </div>
              </div>
          </SubContainer>
        </DisplayDiv>
      </>
    )
  } 
}

export class Header extends React.Component{
  render(): React.ReactNode {
    return(
      <header>
          <NavHeader>
            <NavButton> <Link to="../" >Home</Link> </NavButton> 
            <NavButton> <Link to="../blog">Blog</Link> </NavButton>
            <NavButton> <Link to="../about">AboutMe</Link> </NavButton> 
            <NavButton> <Link to="../contact">ContactMe</Link> </NavButton> 
            <NavButton> <Link to="../admin">Admin</Link> </NavButton> 
          </NavHeader>
      </header>
    );
  }
}

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

interface DishObject{
  id: number;
  title: string;
}

export function Main( { props }:JSX.Element) {
  const [loggedIn, setLoggedIn] = useState("You are logged in");
  return(
    <section>
      <span>
        <h2>{ loggedIn }</h2>
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
      <p>Have a read { props }. Happy reading</p>
      <img 
      src={myrestaurant} 
      alt="A restaurant" 
      height={400}/>
      <h3 style={{textAlign: "left"}} >Menu Items</h3>
      <ul style={{textAlign: "left", listStyle: "none"}}>
          {props.map((dish: DishObject) => (
          <li key={ dish.id }>{ dish.title }</li>
          ))}
      </ul>
    </section>
  )
}

interface DocFooter {
  date: Date;
}

export class Footer extends React.Component{

  render(): React.ReactNode {
    // const { date } = this.props;
      return(
          <FooterDiv>
              <FooterContainer >
                  <p>Contact Me on Social</p>
                  <p>Copyright 2022 </p>
              </FooterContainer>
          </FooterDiv>
      );
  }
}
// Lacks keys for teh value and thus give an error when rendered.
// Best to map it to an object.


