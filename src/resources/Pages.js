import React from "react";
import { useLocation } from "react-router-dom";
import { Header, Main, Footer, Administrator, dishesObject, pagesObject } from "./includes/Header";


export function Home(){
    return(
        <>
            <Header />
        <h1>Welcome to my Home Page</h1>
        </>
    )
}


export function Blog(){
    return(
        <>
            <Header />
            <h1>Let's chat it out</h1>
        </>
    )
}


export function AboutMe(){
    
    return(
        <>
            <Header />
            <h1>Here's a little about me </h1>
        </>
    )
}


export function ContactMe(){
    return(
        <>
            <Header />
            <h1>Drop me DM</h1>
        </>
    )
}


export function Admin(props){
    return(
        <>
            {props.admin 
            ? <Administrator userName={props.userName}/> 
            : 
            <div className="App">
            <Header name="Billy" pages={pagesObject}/>
            <Main content="over my content" dishes={dishesObject}/>
            <Footer year={new Date().getFullYear()}/>
            </div>
            }
        </>
    )
}

export function Whoops404(){
    let location = useLocation();
    return(
        <>
            <Header />
            <h1>404: Resource not found at {location.pathname}</h1>
            
        </>
    )
}