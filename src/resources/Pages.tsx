import React from "react";
import { useLocation } from "react-router-dom";
import { UserInterface, Main, Administrator, dishesObject, pagesObject } from "./includes/Header";
import styled from "styled-components";
import { DisplayDiv, SubContainer } from "./Displays/StyledSections/StyledSections";




export function Home(){
    return(
        <>
        <DisplayDiv>
            <SubContainer>
                <h1>Welcome to my Home Page</h1>
            </SubContainer>
        </DisplayDiv>
        </>
    )
}


export function Blog(){
    return(
        <>
        <DisplayDiv>
            <SubContainer>
            <h1>Let's chat it out</h1>
            </SubContainer>
        </DisplayDiv>
        </>
    )
}


export function AboutMe(){
    
    return(
        <>
        <DisplayDiv>
            <SubContainer>
            <h1>Here's a little about me </h1>
            </SubContainer>
        </DisplayDiv>
        </>
    )
}


export function ContactMe(){
    return(
        <>
        <DisplayDiv>
            <SubContainer>
            <h1>Drop me DM</h1>
            </SubContainer>
        </DisplayDiv>
        </>
    )
}

interface AdminInfo{
    isAdmin ?: boolean;
    userName ?: string;
}

export class Admin extends React.Component<AdminInfo, UserInterface>{
    render() {

        const { isAdmin, userName } = this.props;


        return(
            <>
            
            { isAdmin 
            ? 
            <DisplayDiv>
                <SubContainer>
                    <Administrator />   
                </SubContainer>
            </DisplayDiv>
            : 
            <div className="App">
            {/* <Main props={ dishesObject }/> */}
            </div>
            }
                
                
            </>
        );
    }
}

export function Whoops404(){
    let location = useLocation();
    return(
        <>
        <DisplayDiv>
            <SubContainer>
                <h1>404: Resource not found at {location.pathname}</h1>
            </SubContainer>
        </DisplayDiv>
            
        </>
    )
}